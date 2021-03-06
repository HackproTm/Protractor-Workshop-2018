import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentStepPage,
  OrderSumaryPage
} from '../src/page';

describe('Given a shopping page', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('when want to buy a T shirt', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.selectProduct('Faded Short Sleeve T-shirts');
      await productAddedModalPage.proceedToCheckout();
      await summaryStepPage.proceedToCheckout();
    });

    describe('and login to the application', () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
      });

      describe('and select default address', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          await addressStepPage.proceedToCheckout();
        });

        describe('and pay to the bank', () => {
          beforeAll(async () => {
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentStepPage: BankPaymentStepPage = new BankPaymentStepPage();

            await shippingStepPage.agreeTermOfService();
            await shippingStepPage.proceedToCheckout();
            await paymentStepPage.payByBankWire();
            await bankPaymentStepPage.confirmOrder();
          });

          it('then the order should be completed', async () => {
            const orderSumaryPage: OrderSumaryPage = new OrderSumaryPage();

            await expect(orderSumaryPage.getMessageOrderComplete())
              .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
