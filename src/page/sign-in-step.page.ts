import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private tEmail: ElementFinder;
  private tPassword: ElementFinder;
  private bSignIn: ElementFinder;

  constructor () {
    this.tEmail = $('#email');
    this.tPassword = $('#passwd');
    this.bSignIn = $('#SubmitLogin > span');
  }

  public async signIn(email, password): Promise<void> {
    await this.tEmail.sendKeys(email);
    await this.tPassword.sendKeys(password);
    await this.bSignIn.click();
  }
}
