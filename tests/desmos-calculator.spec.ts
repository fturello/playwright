import { test, expect } from "@playwright/test";

test("Able to calculate 1 + 1", async ({ page }) => {
	await page.goto("https://www.desmos.com/scientific?lang=fr%22");
	await page.getByRole("button", { name: "1" }).click();
	await page.getByRole("button", { name: "Plus" }).click();
	await page.getByRole("button", { name: "1" }).click();
	await page.getByText("=2").click();
	await expect(page.getByText("equals 2=2", { exact: true })).toBeVisible();
});
