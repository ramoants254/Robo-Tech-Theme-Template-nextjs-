import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('Homepage should match snapshot', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('Services page should match snapshot', async ({ page }) => {
    await page.goto('/services');
    await expect(page).toHaveScreenshot('services.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('Blog page should match snapshot', async ({ page }) => {
    await page.goto('/blog');
    await expect(page).toHaveScreenshot('blog.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('Contact page should match snapshot', async ({ page }) => {
    await page.goto('/contact');
    await expect(page).toHaveScreenshot('contact.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('Mobile menu should match snapshot', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Open mobile menu
    await page.click('button[aria-label="Menu"]');
    await expect(page).toHaveScreenshot('mobile-menu.png');
  });

  test('Search modal should match snapshot', async ({ page }) => {
    await page.goto('/');
    
    // Open search modal
    await page.keyboard.press('Control+k');
    await expect(page).toHaveScreenshot('search-modal.png');
  });

  test('Newsletter form states should match snapshots', async ({ page }) => {
    await page.goto('/');
    
    // Initial state
    await expect(page.locator('.newsletter-form')).toHaveScreenshot('newsletter-initial.png');
    
    // Loading state
    await page.fill('input[type="email"]', 'test@example.com');
    await page.click('button[type="submit"]');
    await expect(page.locator('.newsletter-form')).toHaveScreenshot('newsletter-loading.png');
    
    // Success state
    await page.waitForSelector('.success-message');
    await expect(page.locator('.newsletter-form')).toHaveScreenshot('newsletter-success.png');
  });

  test('Color theme consistency', async ({ page }) => {
    await page.goto('/');
    
    // Check primary colors
    const primaryColors = await page.$$eval('.bg-gradient-to-r', (elements) =>
      elements.map((el) => window.getComputedStyle(el).background)
    );
    
    // Ensure consistent gradient usage
    primaryColors.forEach((color) => {
      expect(color).toContain('linear-gradient');
      expect(color).toContain('rgb(59, 130, 246)'); // blue-500
      expect(color).toContain('rgb(168, 85, 247)'); // purple-500
    });
  });

  test('Typography consistency', async ({ page }) => {
    await page.goto('/');
    
    // Check heading styles
    const headings = await page.$$eval('h1, h2, h3', (elements) =>
      elements.map((el) => ({
        fontSize: window.getComputedStyle(el).fontSize,
        fontWeight: window.getComputedStyle(el).fontWeight,
        fontFamily: window.getComputedStyle(el).fontFamily
      }))
    );
    
    // Ensure consistent typography
    headings.forEach((heading) => {
      expect(heading.fontFamily).toContain('Inter');
      expect(['700', '600']).toContain(heading.fontWeight);
    });
  });

  test('Responsive design breakpoints', async ({ page }) => {
    const breakpoints = [375, 640, 768, 1024, 1280];
    
    for (const width of breakpoints) {
      await page.setViewportSize({ width, height: 800 });
      await page.goto('/');
      await expect(page).toHaveScreenshot(`responsive-${width}.png`, {
        fullPage: true,
        animations: 'disabled'
      });
    }
  });
});
