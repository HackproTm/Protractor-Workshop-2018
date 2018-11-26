import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private bProceedToCheckout: ElementFinder;

  constructor () {
    this.bProceedToCheckout = $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.bProceedToCheckout.click();
  }
}
