import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

const firefoxConfig = {
  browserName: 'firefox',
  platform: 'linux',
  name: 'firefox-tests',
  shardTestFiles: true,
  maxInstances: 1
};

const chromeConfig = {
  browserName: 'chrome',
  name: 'chrome-tests',
  shardTestFiles: true,
  maxInstances: 1
};

const multiCapabilities = [chromeConfig, firefoxConfig];

export const config: Config = {
  multiCapabilities,
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    name: 'UI Workshop',
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-popup-blocking', '--no-default-browser-check', '--window-size=800,600'],
      prefs: { credentials_enable_service: false }
    }
  },
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(3000);
    reporter();
  }
};
