"use strict";

module.exports = function when() {
  this.When(
    /^I select Budget$/,
    pages.home.selectBudget
  );

  this.When(
    /^I click Register$/,
    pages.login.clickRegister
  );

  this.When(
    /^I enter "([^"]*)?" into the email field$/,
    pages.registration.enterEmail
  );

  this.When(
    /^I enter "([^"]*)?" into the password field$/,
    pages.registration.enterPassword
  );

  this.When(
    /^I enter "([^"]*)?" into the confirm password field$/,
    pages.registration.confirmPassword
  );
};
