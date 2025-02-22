import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('Homepage should not have any automatically detectable accessibility issues', async ({
    page
  }) => {
    await page.goto('/');
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Services page should be accessible', async ({ page }) => {
    await page.goto('/services');
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Blog page should be accessible', async ({ page }) => {
    await page.goto('/blog');
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Contact form should be accessible', async ({ page }) => {
    await page.goto('/contact');
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Navigation menu should be keyboard accessible', async ({ page }) => {
    await page.goto('/');
    
    // Test keyboard navigation
    await page.keyboard.press('Tab');
    const firstFocusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(firstFocusedElement).toBeTruthy();

    // Navigate through menu items
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBeTruthy();
    }
  });

  test('Modal dialogs should trap focus', async ({ page }) => {
    await page.goto('/');
    
    // Open search modal
    await page.keyboard.press('Control+k');
    
    // Check if focus is trapped in modal
    const focusedElement = await page.evaluate(() => document.activeElement?.getAttribute('role'));
    expect(focusedElement).toBe('dialog');
    
    // Test escape key closes modal
    await page.keyboard.press('Escape');
    const modalVisible = await page.isVisible('[role="dialog"]');
    expect(modalVisible).toBe(false);
  });

  test('Images should have alt text', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.$$('img');
    for (const image of images) {
      const altText = await image.getAttribute('alt');
      expect(altText).toBeTruthy();
    }
  });

  test('Color contrast should meet WCAG standards', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withRules(['color-contrast'])
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Form inputs should have associated labels', async ({ page }) => {
    await page.goto('/contact');
    
    const inputs = await page.$$('input, textarea, select');
    for (const input of inputs) {
      const hasLabel = await page.evaluate((el) => {
        const id = el.id;
        return !!document.querySelector(`label[for="${id}"]`);
      }, input);
      
      expect(hasLabel).toBe(true);
    }
  });
});
