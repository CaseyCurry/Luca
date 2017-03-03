"use strict";

module.exports = function given() {
  this.Given(
    /^I open the home page/,
    (done) => {
      browser.url(browser.options.baseUrl + "/");
      done();
    }
  );
};
