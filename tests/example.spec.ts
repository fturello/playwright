import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("https://playwright.dev/");

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
	await page.goto("https://playwright.dev/");

	// Click the get started link.
	await page.getByRole("link", { name: "Get started" }).click();

	// Expects the URL to contain intro.
	await expect(page).toHaveURL(/.*intro/);
});

test("homepage has title and links to intro page", async ({ page }) => {
	await page.goto("https://playwright.dev/");

	await expect(page).toHaveTitle(/Playwright/);

	const getStarted = page.getByRole("link", { name: "Get started" });

	await expect(getStarted).toHaveAttribute("href", "/docs/intro");

	await getStarted.click();

	await expect(page).toHaveURL(/.*intro/);
});
