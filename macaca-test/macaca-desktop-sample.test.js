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

var path = require('path');

var platform = process.env.platform || 'desktop';

var wd = require('webdriver-client')({
  platformName: platform,
  browser: 'chrome'
});

describe('macaca desktop sample', function() {
  this.timeout(5 * 60 * 1000);

  const driver = wd.initPromiseChain();
  const initialURL = 'https://www.baidu.com';

  before((done) => {
    return driver
      .init()
      .setNormalSize()
      .then(initialURL)
      .then((url) => {
        return driver
          .get(url);
      })
      .end(done);
  });

  it('#1 should', () => {
    return driver;
  });

  after((done) => {
    return driver
      .quit(done);
  });
});
