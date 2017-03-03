const pageObject = {
  selectBudget: (done) => {
    browser.click("[href='Budget']");
    done();
  }
};

module.exports = pageObject;
