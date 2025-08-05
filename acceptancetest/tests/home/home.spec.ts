import { test, expect } from '@playwright/test';
import { environment } from '../../src/resources/environment';

test(`Should navigate to home page and display main title,
  the user should see the main title with the correct text`, async ({
  page,
}) => {
  await page.goto(environment.redirectUri);
  await expect(page).toHaveURL(environment.redirectUri + 'home');
  await expect(page.getByTestId('main-title')).toHaveText(
    'Clean Architecture Guide with NgRx'
  );
});
