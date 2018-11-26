import { $, ElementFinder, browser, promise } from 'protractor';

export class IFramePage {
  private iframe1: ElementFinder;

  constructor () {
    this.iframe1 = $('#IF1');
  }

  public async getFrame1Height(): Promise<number> {
    return Number(await this.iframe1.getAttribute('height'));
  }

  public setFrame1Height(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }
}
