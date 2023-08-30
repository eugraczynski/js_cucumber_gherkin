const { After } = require('cucumber')
const { browser } = require('protractor')

After({ tags: '@spike'},async function() {
    const screenshot = await browser.takeScreenshot();
    const decodedImage = Buffer.from(screenshot, 'base64');
    return this.attach(decodedImage, 'image/png');
})