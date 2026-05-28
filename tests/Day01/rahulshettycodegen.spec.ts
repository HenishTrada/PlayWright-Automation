import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/register');

  const randomNumber = Math.floor(Math.random() * 1000);

  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('henish');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('trada');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('tradahenish' + randomNumber + '@gmail.com');
  await page.getByRole('textbox', { name: 'enter your number' }).click();
  await page.getByRole('textbox', { name: 'enter your number' }).fill('8200079192');

  await page.getByRole('combobox').selectOption('3: Engineer');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Passsword' }).click();
  await page.getByRole('textbox', { name: 'Passsword' }).fill('HeNiSh94');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('HeNiSh94');
  await page.getByRole('checkbox').check();

  await page.getByRole('button', { name: 'Register' }).click();

  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('tradahenish' + randomNumber + '@gmail.com');
  await page.getByRole('textbox', { name: 'email@example.com' }).press('Tab');
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('HeNiSh94');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: ' Add To Cart' }).first().click();
  await page.getByRole('button', { name: '   Cart' }).click();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await page.getByRole('textbox', { name: 'Select Country' }).click();
  await page.getByRole('textbox', { name: 'Select Country' }).pressSequentially('india', {delay: 150});
  await page.getByRole('button', { name: ' India' }).click();
  await page.getByText('Place Order').click();
  
  await page.getByRole('button', { name: '   ORDERS' }).click();
  await page.getByRole('button', { name: 'View' }).click();
  await page.getByRole('button', { name: 'Sign Out' }).click();
});