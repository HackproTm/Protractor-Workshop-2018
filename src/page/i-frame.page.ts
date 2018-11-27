import { $, ElementFinder, browser, promise } from 'protractor';

export class IFramePage {
  private iFrame1: ElementFinder;

  constructor () {
    this.iFrame1 = $('#IF1');
  }

  public async switchToFrame1(): Promise<void> {
    await browser.switchTo().frame(this.iFrame1.getWebElement());
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }

  public async getFrame1Height(): Promise<number> {
    return Number(await this.iFrame1.getAttribute('height'));
  }

  public setFrame1Height(height: number): promise.Promise<void> {
    return browser.
      executeScript(`arguments[0].height = ${height};`, this.iFrame1.getWebElement());
  }

  public getPageTitle(): promise.Promise<string> {
    return browser.
      executeScript("return document.getElementsByTagName('title')[0].text");
  }
}
