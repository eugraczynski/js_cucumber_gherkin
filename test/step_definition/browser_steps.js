const { Given, When, Then, setDefaultTimeout } = require('cucumber');
const { browser } = require('protractor');
const { expect } = require('chai');

Given('I open {string} url', {timeout: 3*5000}, async function(url) {
    return await browser.get(url);
});

Then(/^Page title should (not )?be "([^"]*)"$/, async function(notArg, string) {
    const pageTitle = await browser.getTitle();
    if (notArg) {
        expect(pageTitle).to.not.be.equal(string)
    }
    else {
        expect(pageTitle).to.be.equal(string)
    }
});

When('I wait {int} seconds', function(int) {
    browser.sleep(int*1000);
});