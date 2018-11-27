import { browser } from 'protractor';
import { PersonalInformationPage } from './../src/page';
import { DownloadService } from '../src/service/download.service';

describe('when open Automation Practice', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('when I am training locators', () => {
    const personalInformationPage = new PersonalInformationPage();

    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        professions: ['Automation Tester'],
        file: 'F:\\GitHub\\HackproTm\\Protractor-Workshop-2018\\resources\\anonymous.jpg',
        download: true,
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });
    });

    it('the form should be filled', async () => {
      await expect(browser.getTitle()).toEqual('Demo Form for practicing Selenium Automation');
    });

    it('then filename should be loaded', async () => {
      expect(await personalInformationPage.getFilename()).toBe('anonymous.jpg');
    });

    it('then should be created a file', async () => {
      const service = new DownloadService();
      const file = await service.readFileFromTemp('Online-Store.zip');
      expect(file.byteLength).toBeGreaterThanOrEqual(8000);
    });
  });
});
