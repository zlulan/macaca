/* ================================================================
 * macaca-test-sample by xdf(xudafeng[at]126.com)
 *
 * first created at : Thu Mar 10 2016 14:21:49 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var wd = require('webdriver-client')({
  platformName: 'desktop',
  browserName: 'electron'
});

describe('macaca desktop sample', function() {
  this.timeout(5 * 60 * 1000);

  const driver = wd.initPromiseChain();
  const initialURL = 'https://www.baidu.com';

  before(() => {
    return driver
      .initDriver()
      .setWindowSize(1280, 800);
  });

  it('#0 should go into macaca', function() {
    return driver
      .get(initialURL)
      .sleep(3000);
  });

  it('#1 should works with macaca', function() {
    return driver
      .elementById('kw')
      .sendKeys('macaca')
      .sleep(3000)
      .elementById('su')
      .click()
      .sleep(5000)
      .source()
      .then(function(html) {
        html.should.containEql('macaca');
      })
      .takeScreenshot();
  });

  it('#2 should go into web', function() {
    return driver
      .get(initialURL)
      .sleep(3000);
  });

  it('#3 should works with web', function() {
    return driver
      .elementById('kw')
      .sendKeys('TesterHome')
      .sleep(3000)
      .elementById('su')
      .click()
      .sleep(5000)
      .source()
      .then(function(html) {
        html.should.containEql('TesterHome');
      })
      .takeScreenshot();
  });

  after((done) => {
    return driver
      .quit(done);
  });
});
