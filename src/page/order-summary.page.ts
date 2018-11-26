import { $, ElementFinder } from 'protractor';

export class OrderSumaryPage {
  private tMessage: ElementFinder;

  constructor () {
    this.tMessage = $('#center_column > div > p > strong');
  }

  public async getMessageOrderComplete(): Promise<string> {
    return await this.tMessage.getText();
  }
}
