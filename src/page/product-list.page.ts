import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private bAddToCar: ElementFinder;

  constructor () {
    this.bAddToCar = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addToCar(): Promise<void> {
    await this.bAddToCar.click();
  }
}
