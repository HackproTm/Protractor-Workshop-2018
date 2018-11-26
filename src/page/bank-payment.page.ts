import { $, ElementFinder } from 'protractor';

export class BankPaymentStepPage {
  private bConfirmOrder: ElementFinder;

  constructor () {
    this.bConfirmOrder = $('#cart_navigation > button > span');
  }

  public async confirmOrder(): Promise<void> {
    await this.bConfirmOrder.click();
  }
}
