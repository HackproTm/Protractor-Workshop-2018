import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private bProceedToCheckout: ElementFinder;

  constructor () {
    this.bProceedToCheckout = $('#center_column > form > p > button > span');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.bProceedToCheckout.click();
  }
}
