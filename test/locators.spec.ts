import { browser } from 'protractor';
import { PersonalInformationPage } from './../src/page/personal-information.page';

describe('when open Automation Practice', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  it('then should have a title', async () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    await personalInformationPage.fillForm({
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: 7,
      professions: ['Automation Tester'],
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
