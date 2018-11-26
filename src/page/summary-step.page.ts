import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private bProceedToCheckout: ElementFinder;

  constructor () {
    this.bProceedToCheckout = $('.cart_navigation span');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.bProceedToCheckout.click();
  }
}
