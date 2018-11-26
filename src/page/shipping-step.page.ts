import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private cTermOfService: ElementFinder;
  private bProceedToCheckout: ElementFinder;

  constructor () {
    this.cTermOfService = $('#cgv');
    this.bProceedToCheckout = $('#form > p > button > span');
  }

  public async agreeTermOfService(): Promise<void> {
    await this.cTermOfService.click();
  }

  public async proceedToCheckout(): Promise<void> {
    await this.bProceedToCheckout.click();
  }
}
