module.exports = {



    'Step 1: Login': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Login';
        var step = "1.- ";
        var path = data.path + step + option;

        browser
            .windowMaximize()
            .url('https://deqa.channelauction.com/homes/')
            .waitForElementVisible('body', 1000)
            //.saveScreenshot(path + num + data.ext)
            .click('#main-navbar li a.btn.btn-nav-outline')
            .waitForElementVisible('label[for="userEmail"]', 5000)
            .assert.containsText('body', 'Log In')
            //.saveScreenshot(path + (num = +1) + data.ext)
            .setValue('input[id="userEmail"]', data.user)
            .setValue('input[id="userPassword"]', data.password)
            .click('button[data-elm-id="btnLogin"]')
            .waitForElementVisible('li.dropdown', 20000)
            .assert.containsText('.mb-lg', 'Hi there')
            .pause(3000)


    },

    'Step 2: Select option "Sell a home"': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Sellahome';
        var step = "2.- ";
        var img1 = data.path + step + option + num + data.ext;
        var imgs = data.path + step + option + (num += 1) + data.ext;

        browser
            .click('.nav.navbar-nav.navbar-right li:nth-child(2) a.dropdown-title')
            .pause(1000)
            .waitForElementVisible('.container-fluid a[ui-sref="locate-property"]', 5000)
            .verify.containsText('.container-fluid a[ui-sref="locate-property"]', 'List a Home')
            .click('.nav.navbar-nav.navbar-right li:nth-child(2) a[ui-sref="locate-property"]')
            .pause(2000)
            //.saveScreenshot(img1)
            .waitForElementVisible('div[ng-show="locatePropCtrl.showSearch"]', 5000)
            .assert.containsText('div[ng-show="locatePropCtrl.showSearch"]', 'List a Home')
            .pause(3000)

        //.saveScreenshot(imgs)

    },

    'Step 3: Fill List information': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Listinfo';
        var step = "3.- ";
        var img1 = data.path + step + option + num + data.ext;
        var imgs = data.path + step + option + (num += 1) + data.ext;

        browser
            .setValue('input[name="address"]', data.dir)
            .pause(4000)
            .click('button[btn-whirl="btn-whirl"]')
            .waitForElementVisible('.modal-header h1', 5000)
            .assert.containsText('.modal-header h1', 'Address')
            .click('button[ng-click="caCtrl.createAsset()"]')
            .waitForElementVisible('.left-nav.mt', 5000)
            //.verify.containsText('.listing-package h2', 'Listing Package')
            //.click('a[ng-click="listingPackageCtrl.getStarted()"]')
            //.waitForElementVisible('.intro-section', 5000)
            .assert.containsText('.intro-section', 'Seller Info')
            .pause(3000)



    },



    'Step 4: Fill Seller info': function(browser) {

        var data = browser.globals.variables;
        var num = 1;
        var option = 'Sellerinfo';
        var step = "4.- ";
        var img1 = data.path + step + option + num + data.ext;
        var imgs = data.path + step + option + (num += 1) + data.ext;

        browser
            .click('button[data-elm-id="btnOwner"]')
            .waitForElementVisible('.form-section .section-title', 2000)
            .click('button[data-elm-id="btnHaveAgentNo"]')
            .click('button[data-elm-id="btnSave"]')
            .waitForElementVisible('.property-info', 5000)
            .assert.containsText('.property-info', 'Property Info')
            .pause(3000)




    }


    /*,


    'Step 5: Fill Property info' : function (browser) {

        var data = browser.globals.variables;
        var num =1;
        var option='Propertyinfo';
        var step = "5.- ";
        var img1 = data.path + step + option + num + data.ext;
        var imgs = data.path + step + option + (num += 1) + data.ext;
                 
        browser
           .click('button[data-elm-id="btnAgent"]')
           .waitForElementVisible('.form-section .section-title', 2000)
           .saveScreenshot(img1)
           .click('button[data-elm-id="btnHaveAgentNo"]')    
           .saveScreenshot(imgs)
           .click('data-elm-id="btnSave"  ')        
           .saveScreenshot(imgs)
           .waitForElementVisible('.property-info', 5000)
           .assert.containsText('.property-info', 'Property Info')    
           .saveScreenshot(imgs)

          

    }*/



};