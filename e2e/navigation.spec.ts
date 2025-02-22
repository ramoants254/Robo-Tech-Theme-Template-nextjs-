import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate through all main pages', async ({ page }) => {
    // Start from homepage
    await page.goto('/');
    await expect(page).toHaveTitle(/RoboTech/);

    // Navigate to Services
    await page.click('text=Services');
    await expect(page).toHaveURL(/.*services/);
    await expect(page.locator('h1')).toContainText(/Services/);

    // Navigate to Blog
    await page.click('text=Blog');
    await expect(page).toHaveURL(/.*blog/);
    await expect(page.locator('h1')).toContainText(/Blog/);

    // Navigate to Contact
    await page.click('text=Contact');
    await expect(page).toHaveURL(/.*contact/);
    await expect(page.locator('h1')).toContainText(/Contact/);
  });

  test('should test contact form submission', async ({ page }) => {
    await page.goto('/contact');

    // Fill out contact form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'Test message');

    // Submit form
    await page.click('button[type="submit"]');

    // Check for success message
    await expect(page.locator('text=Message sent')).toBeVisible();
  });

  test('should test blog post navigation', async ({ page }) => {
    await page.goto('/blog');

    // Click on first blog post
    await page.click('.blog-post:first-child');

    // Check if we're on a blog post page
    await expect(page).toHaveURL(/.*blog\/.+/);
    
    // Check if blog content is loaded
    await expect(page.locator('article')).toBeVisible();
  });

  test('should test mobile navigation', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');

    // Open mobile menu
    await page.click('button[aria-label="Menu"]');

    // Check if mobile menu is visible
    await expect(page.locator('nav[role="navigation"]')).toBeVisible();

    // Navigate through mobile menu
    await page.click('text=Services');
    await expect(page).toHaveURL(/.*services/);
  });

  test('should test theme features demo', async ({ page }) => {
    await page.goto('/demo');

    // Test feature navigation
    await page.click('text=Rich Components');
    await expect(page.locator('text=Comprehensive set of pre-built components')).toBeVisible();

    // Test video player
    await page.click('button:has-text("Play Demo")');
    await expect(page.locator('video')).toBeVisible();
  });
});
