import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

export class PersonalInformationPage {
  private tFirstName: ElementFinder;
  private tLastName: ElementFinder;
  private oSex: ElementArrayFinder;
  private oExperience: ElementArrayFinder;
  private cProfession: ElementArrayFinder;
  private cTools: ElementArrayFinder;
  private lContinents: ElementArrayFinder;
  private lCommands: ElementArrayFinder;

  constructor () {
    this.tFirstName = element(by.name('firstname'));
    this.tLastName = element(by.name('lastname'));
    this.oSex = element.all(by.name('sex'));
    this.oExperience = element.all(by.name('exp'));
    this.cProfession = element.all(by.name('profession'));
    this.cTools = element.all(by.name('tool'));
    this.lContinents = element(by.id('continents')).all(by.tagName('option'));
    this.lCommands = element(by.id('selenium_commands')).all(by.tagName('option'));
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
}
