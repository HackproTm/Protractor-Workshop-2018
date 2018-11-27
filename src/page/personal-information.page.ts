import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';
import { resolve } from 'path';
import { existsSync } from 'fs';
import * as remote from 'selenium-webdriver/remote';
import { DownloadService } from '../service/download.service';

export class PersonalInformationPage {
  private tFirstName: ElementFinder;
  private tLastName: ElementFinder;
  private oSex: ElementArrayFinder;
  private oExperience: ElementArrayFinder;
  private cProfession: ElementArrayFinder;
  private bUploadFile: ElementFinder;
  private lDownloadFile: ElementFinder;
  private cTools: ElementArrayFinder;
  private lContinents: ElementArrayFinder;
  private lCommands: ElementArrayFinder;
  private bSummit: ElementFinder;

  constructor () {
    this.tFirstName = element(by.name('firstname'));
    this.tLastName = element(by.name('lastname'));
    this.oSex = element.all(by.name('sex'));
    this.oExperience = element.all(by.name('exp'));
    this.cProfession = element.all(by.name('profession'));
    this.bUploadFile = element(by.id('photo'));
    this.lDownloadFile = element(by.linkText('Selenium Automation Hybrid Framework'));
    this.cTools = element.all(by.name('tool'));
    this.lContinents = element(by.id('continents')).all(by.tagName('option'));
    this.lCommands = element(by.id('selenium_commands')).all(by.tagName('option'));
    this.bSummit = element(by.id('submit'));
  }

  private async uploadFile(file: string): Promise<void> {
    const fullPath = resolve(process.cwd(), file);

    if (existsSync(fullPath)) {
      await browser.setFileDetector(new remote.FileDetector());
      await this.bUploadFile.sendKeys(fullPath);
      await browser.setFileDetector(undefined);
    }
  }

  private async downloadFile() {
    const link = await this.lDownloadFile.getAttribute('href');

    const service = new DownloadService();
    await service.downloadFile(link, 'Online-Store.zip');
  }

  public async getFilename(): Promise<string> {
    const fullPath: string = await this.bUploadFile.getAttribute('value');
    return fullPath.split(/(\\|\/)/g).pop();
  }

  public async fillForm(personalInfo): Promise<void> {
    await this.tFirstName.sendKeys(personalInfo.firstName);
    await this.tLastName.sendKeys(personalInfo.lastName);
    await this.oSex.filter(elem => elem.getAttribute('value').
      then(value => value === personalInfo.sex)).first().click();
    await this.oExperience.filter(elem => elem.getAttribute('value').
      then(value => value === String(personalInfo.experience))).first().click();
    await personalInfo.professions.forEach((profession) => {
      this.cProfession.filter(elem => elem.getAttribute('value').
        then(value => value === profession)).first().click();
    });
    if (personalInfo.file) {
      await this.uploadFile(personalInfo.file);
    }
    if (personalInfo.download) {
      await this.downloadFile();
    }
    await personalInfo.tools.forEach((tool) => {
      this.cTools.filter(elem => elem.getAttribute('value').
        then(value => value === tool)).first().click();
    });
    await this.lContinents.filter(elem => elem.getText().
      then(text => text === personalInfo.continent)).first().click();
    await personalInfo.commands.forEach((command) => {
      this.lCommands.filter(elem => elem.getAttribute('value').
        then(value => value === command)).first().click();
    });
  }

  public async submit(personalInfo): Promise<void> {
    this.fillForm(personalInfo);
    this.bSummit.click();
  }
}
