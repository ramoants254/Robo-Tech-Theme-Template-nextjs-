import { test, expect } from '@playwright/test';
import { blogPosts } from '@/data/blog-posts';
import { products, services } from '@/data/products';
import { users } from '@/data/users';

// Content Quality Tests
test.describe('Content Quality', () => {
  test('blog posts have required fields', () => {
    for (const post of blogPosts) {
      expect(post.title).toBeTruthy();
      expect(post.content.length).toBeGreaterThan(100);
      expect(post.author).toBeTruthy();
      expect(post.coverImage).toMatch(/^\/images\//);
      expect(post.tags.length).toBeGreaterThan(0);
    }
  });

  test('products have required fields', () => {
    for (const product of products) {
      expect(product.name).toBeTruthy();
      expect(product.description.length).toBeGreaterThan(50);
      expect(product.features.length).toBeGreaterThan(0);
      expect(product.images.length).toBeGreaterThan(0);
      expect(product.price).toBeGreaterThan(0);
    }
  });

  test('users have required fields', () => {
    for (const user of users) {
      expect(user.name).toBeTruthy();
      expect(user.email).toMatch(/^[^@]+@[^@]+\.[^@]+$/);
      expect(user.role).toBeTruthy();
      expect(user.avatar).toMatch(/^\/images\//);
    }
  });
});

// Performance Tests
test.describe('Performance', () => {
  test('homepage loads within performance budget', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);

    // Check for key elements
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('images are optimized', async ({ page }) => {
    await page.goto('/');
    const images = await page.$$eval('img', imgs => 
      imgs.map(img => ({
        src: img.src,
        width: img.width,
        height: img.height,
        loading: img.loading,
      }))
    );

    for (const img of images) {
      expect(img.loading).toBe('lazy');
      expect(img.width).toBeGreaterThan(0);
      expect(img.height).toBeGreaterThan(0);
    }
  });
});

// Responsive Design Tests
test.describe('Responsive Design', () => {
  const viewports = [
    { width: 375, height: 667 }, // Mobile
    { width: 768, height: 1024 }, // Tablet
    { width: 1440, height: 900 }, // Desktop
  ];

  for (const viewport of viewports) {
    test(\`layout at \${viewport.width}x\${viewport.height}\`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');

      // No horizontal overflow
      const body = await page.$eval('body', el => ({
        clientWidth: el.clientWidth,
        scrollWidth: el.scrollWidth,
      }));
      expect(body.scrollWidth).toBeLessThanOrEqual(body.clientWidth);

      // Navigation is appropriate for viewport
      if (viewport.width < 768) {
        await expect(page.locator('button[aria-label="Menu"]')).toBeVisible();
      } else {
        await expect(page.locator('nav > ul')).toBeVisible();
      }
    });
  }
});

// Accessibility Tests
test.describe('Accessibility', () => {
  test('meets WCAG guidelines', async ({ page }) => {
    await page.goto('/');
    const violations = await page.evaluate(async () => {
      // @ts-ignore
      const { axe } = window;
      const results = await axe.run();
      return results.violations;
    });
    expect(violations).toHaveLength(0);
  });

  test('has proper keyboard navigation', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const firstFocused = await page.evaluate(() => document.activeElement?.tagName);
    expect(firstFocused).toBeTruthy();
  });
});

// SEO Tests
test.describe('SEO', () => {
  test('has proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check title and description
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeLessThan(60);

    const description = await page.$eval('meta[name="description"]', el => el.getAttribute('content'));
    expect(description).toBeTruthy();
    expect(description?.length).toBeLessThan(160);

    // Check other important meta tags
    const canonical = await page.$eval('link[rel="canonical"]', el => el.getAttribute('href'));
    expect(canonical).toBeTruthy();

    const viewport = await page.$eval('meta[name="viewport"]', el => el.getAttribute('content'));
    expect(viewport).toBeTruthy();
  });

  test('has proper heading structure', async ({ page }) => {
    await page.goto('/');
    const h1Count = await page.$$eval('h1', els => els.length);
    expect(h1Count).toBe(1);

    const headings = await page.$$eval('h1, h2, h3, h4, h5, h6', els => 
      els.map(el => ({
        level: parseInt(el.tagName.substring(1)),
        text: el.textContent,
      }))
    );

    // Check heading hierarchy
    for (let i = 1; i < headings.length; i++) {
      expect(headings[i].level - headings[i-1].level).toBeLessThanOrEqual(1);
    }
  });
});

// Security Tests
test.describe('Security', () => {
  test('has proper security headers', async ({ page }) => {
    const response = await page.goto('/');
    const headers = response?.headers();
    
    expect(headers?.['x-frame-options']).toBeTruthy();
    expect(headers?.['x-content-type-options']).toBe('nosniff');
    expect(headers?.['strict-transport-security']).toBeTruthy();
  });

  test('forms have CSRF protection', async ({ page }) => {
    await page.goto('/contact');
    const form = await page.$('form');
    const csrfToken = await form?.$eval('input[name="csrf_token"]', el => el.getAttribute('value'));
    expect(csrfToken).toBeTruthy();
  });
});

// Integration Tests
test.describe('Integration', () => {
  test('theme customization works', async ({ page }) => {
    await page.goto('/');
    await page.click('button[aria-label="Customize theme"]');
    await page.click('button[data-theme="dark"]');
    const isDark = await page.$eval('html', el => el.classList.contains('dark'));
    expect(isDark).toBe(true);
  });

  test('search functionality works', async ({ page }) => {
    await page.goto('/');
    await page.fill('input[type="search"]', 'robot');
    await page.waitForSelector('[data-testid="search-results"]');
    const results = await page.$$('[data-testid="search-result"]');
    expect(results.length).toBeGreaterThan(0);
  });
});
