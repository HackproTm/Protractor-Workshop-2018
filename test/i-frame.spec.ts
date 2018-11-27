import { browser } from 'protractor';
import { IFramePage } from './../src/page';

describe('when open Automation Practice with iFrames', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/iframe-practice-page/');
  });

  it('then heigth for Frame1 was changed', async () => {
    const iFramePage: IFramePage = new IFramePage();

    const newHeight = 900;
    await iFramePage.setFrame1Height(newHeight);
    await expect(await iFramePage.getFrame1Height()).toBe(newHeight);
    await expect(await iFramePage.getPageTitle()).
      toBe('TOOLSQA | Free QA Automation Tools Tutorials');

    await iFramePage.switchToFrame1();
    await expect(await iFramePage.getPageTitle()).
      toBe('Demo Form for practicing Selenium Automation');

    await iFramePage.switchToMainPage();
    await expect(await iFramePage.getPageTitle()).
      toBe('TOOLSQA | Free QA Automation Tools Tutorials');
  });
});
