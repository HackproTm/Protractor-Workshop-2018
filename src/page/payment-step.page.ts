import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private bPayBankWire: ElementFinder;

  constructor () {
    this.bPayBankWire = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async payByBankWire(): Promise<void> {
    await this.bPayBankWire.click();
  }
}
