import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('Homepage should load within performance budget', async ({ page }) => {
    // Start performance measurements
    const performanceTimings = [];
    page.on('metrics', ({ title, value }) => {
      performanceTimings.push({ title, value });
    });

    const response = await page.goto('/', {
      waitUntil: 'networkidle'
    });

    // Test initial page load time
    expect(response?.status()).toBe(200);
    const timing = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        ttfb: navigation.responseStart - navigation.requestStart,
        fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
        lcp: performance.getEntriesByName('largest-contentful-paint')[0]?.startTime,
        cls: performance.getEntriesByName('layout-shift', 'element').reduce((sum, entry) => sum + entry.value, 0),
      };
    });

    // Performance budgets
    expect(timing.ttfb).toBeLessThan(200); // Time to First Byte < 200ms
    expect(timing.fcp).toBeLessThan(1000); // First Contentful Paint < 1s
    expect(timing.lcp).toBeLessThan(2500); // Largest Contentful Paint < 2.5s
    expect(timing.cls).toBeLessThan(0.1); // Cumulative Layout Shift < 0.1

    // Test bundle size
    const scriptRequests = await page.evaluate(() =>
      performance
        .getEntriesByType('resource')
        .filter(entry => entry.initiatorType === 'script')
        .map(entry => ({
          name: entry.name,
          size: entry.encodedBodySize
        }))
    );

    // Ensure main bundle is under 200KB
    const mainBundle = scriptRequests.find(req => req.name.includes('main'));
    expect(mainBundle?.size).toBeLessThan(200 * 1024);
  });

  test('Image optimization', async ({ page }) => {
    await page.goto('/');

    // Check if images are properly sized and optimized
    const images = await page.evaluate(() =>
      Array.from(document.images).map(img => ({
        src: img.src,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        displayWidth: img.width,
        displayHeight: img.height,
        loading: img.loading,
      }))
    );

    for (const img of images) {
      // Ensure images use lazy loading
      expect(img.loading).toBe('lazy');

      // Check if image dimensions are appropriate
      const ratio = img.naturalWidth / img.displayWidth;
      expect(ratio).toBeLessThan(2); // Image shouldn't be more than 2x larger than display size
    }
  });

  test('Client-side navigation performance', async ({ page }) => {
    await page.goto('/');

    // Measure navigation timing
    const navigationStart = Date.now();
    await page.click('a[href="/services"]');
    await page.waitForLoadState('networkidle');
    const navigationEnd = Date.now();

    // Client-side navigation should be fast
    expect(navigationEnd - navigationStart).toBeLessThan(300);
  });

  test('Search modal performance', async ({ page }) => {
    await page.goto('/');

    // Measure modal open time
    await page.keyboard.press('Control+k');
    const modalVisible = await page.waitForSelector('[role="dialog"]', {
      state: 'visible'
    });
    expect(modalVisible).toBeTruthy();

    // Type in search and measure response time
    const searchStart = Date.now();
    await page.type('input[type="text"]', 'robot');
    await page.waitForResponse(response => response.url().includes('/api/search'));
    const searchEnd = Date.now();

    // Search response should be fast
    expect(searchEnd - searchStart).toBeLessThan(500);
  });

  test('Memory usage', async ({ page }) => {
    await page.goto('/');

    // Get initial memory usage
    const initialMemory = await page.evaluate(() => performance.memory?.usedJSHeapSize);

    // Perform some interactions
    for (let i = 0; i < 10; i++) {
      await page.click('a[href="/services"]');
      await page.waitForLoadState('networkidle');
      await page.goBack();
      await page.waitForLoadState('networkidle');
    }

    // Get final memory usage
    const finalMemory = await page.evaluate(() => performance.memory?.usedJSHeapSize);

    // Ensure no significant memory leaks
    expect(finalMemory).toBeLessThan(initialMemory * 1.5);
  });

  test('Resource hints optimization', async ({ page }) => {
    await page.goto('/');

    // Check for preload/prefetch tags
    const links = await page.evaluate(() =>
      Array.from(document.getElementsByTagName('link')).map(link => ({
        rel: link.rel,
        href: link.href,
        as: link.as
      }))
    );

    // Ensure critical resources are preloaded
    expect(links.some(link => link.rel === 'preload' && link.as === 'style')).toBe(true);
    expect(links.some(link => link.rel === 'preload' && link.as === 'script')).toBe(true);
  });

  test('CSS performance', async ({ page }) => {
    await page.goto('/');

    // Measure CSS complexity
    const cssStats = await page.evaluate(() => {
      const styleSheets = Array.from(document.styleSheets);
      let totalRules = 0;
      let specificitySum = 0;

      styleSheets.forEach(sheet => {
        try {
          const rules = Array.from(sheet.cssRules);
          totalRules += rules.length;
        } catch (e) {
          // Handle cross-origin stylesheets
        }
      });

      return { totalRules };
    });

    // Ensure CSS isn't too complex
    expect(cssStats.totalRules).toBeLessThan(2000);
  });
});
