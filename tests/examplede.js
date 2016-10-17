//var path='/tests/screenshots/',
//var format='.png';

module.exports = {


  'Login' : function (browser) {
    var num =1;
    browser

      .windowMaximize()
      .url('https://deqa.channelauction.com/homes/')
      .waitForElementVisible('body', 1000)
      .click('#main-navbar li a.btn.btn-nav-outline')
      //.setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('body', 1000)
      //.verify.visible('input[#userEmail]')
      .saveScreenshot('./tests/screenshots/login'+num+'.png')
      .assert.containsText('body', 'Log In')
      .setValue('input[id="userEmail"]', 'elopez@mahisoft.com')
      .setValue('input[id="userPassword"]', '123456')
      .saveScreenshot('./tests/screenshots/login'+(num+=1)+'.png')
      .click('button[data-elm-id="btnLogin"]')
      .waitForElementVisible('body', 10000)
	  .saveScreenshot('./tests/screenshots/login'+(num+=1)+'.png')
      .assert.containsText('div.mb-lg h1', 'Hi there')
   }
};
