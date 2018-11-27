import { browser } from 'protractor';
import { PersonalInformationPage } from './../src/page';

describe('when open Automation Practice', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  it('then should have a title', async () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    await personalInformationPage.submit({
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: 7,
      professions: ['Automation Tester'],
      file: 'F:\\GitHub\\HackproTm\\Protractor-Workshop-2018\\resources\\anonymous.jpg',
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands']
    });
    await expect(browser.getTitle()).toEqual('Demo Form for practicing Selenium Automation');
  });
});
