const pageObject = {
  enterEmail: (email, done) => {
    browser.addValue("[type='text']", email);
    done();
  },
  enterPassword: (password, done) => {
    browser.addValue("[placeholder='enter your password']", password);
    done();
  },
  confirmPassword: (password, done) => {
    browser.addValue("[placeholder='confirm your password']", password);
    done();
  },
  seeWeakPasswordError: (done) => {
    const millisecondsToWaitForError = 1000;
    browser.waitForExist(".error", millisecondsToWaitForError);
    const message = browser.getText(".error");
    expect(message)
      .to
      .contain("weak");
    done();
  }
};

module.exports = pageObject;
