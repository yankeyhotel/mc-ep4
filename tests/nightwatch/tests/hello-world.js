module.exports = {
  'Click increments the count' : function (browser) {
      browser
          .url('http://localhost:3000')
          .waitForElementVisible('body', 1000)
          .assert.title('mc-ep4')
          .assert.containsText('p', "You've pressed the button 0 times.")
          .click('button')
          .assert.containsText('p', "You've pressed the button 1 times.")
          .end();
  }
};