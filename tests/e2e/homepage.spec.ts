import { expect, test } from "@playwright/test";

test("ParaBank homepage loads", async ({ page }) => {
  await page.goto("./");
  await expect(page).toHaveTitle(/ParaBank/i);
});
