import { Locator, Page } from "@playwright/test";


export class HomePage {
  readonly page: Page;
  readonly mainTitle: Locator;


  constructor(page: Page) {
    this.page = page;
    this.mainTitle = page.getByTestId("main-title");
  }

  async navigate(): Promise<boolean> {
    await this.page.goto("/home");
    return true;
  }
}
