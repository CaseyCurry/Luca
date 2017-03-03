"use strict";

module.exports = function then() {
  this.Then(
    /^I expect to see an error indicating my password is too weak$/,
    pages.registration.seeWeakPasswordError
  );

  this.Then(
    /^I expect that (element|inputfield) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContent
  );

  this.Then(
    /^I wait on element "([^"]*)?"( for (\d+)ms)*( to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
    waitOn
  );
};

const checkContent = (type, element, falseCase, expectedText, done) => {
  const command = (type !== "inputfield") ? "getText" : "getValue";
  let doneCallback = done;
  let parsedExpectedText = expectedText;
  let boolFalseCase = !!falseCase;

  if (!doneCallback && typeof parsedExpectedText === "function") {
    doneCallback = parsedExpectedText;
    parsedExpectedText = "";
    boolFalseCase = !boolFalseCase;
  }

  if (parsedExpectedText === undefined && falseCase === undefined) {
    parsedExpectedText = "";
    boolFalseCase = true;
  }

  const text = browser[command](element);

  if (boolFalseCase) {
    expect(parsedExpectedText)
      .not
      .to
      .equal(text);
  } else {
    expect(parsedExpectedText)
      .to
      .equal(text);
  }

  doneCallback();
};

const waitOn = (elem, obsolete, ms, isWaitingOnSpecificState,
  falseState, state, done) => {
  const intMs = parseInt(ms, 10) || 3000;
  let command = "waitForExist";
  let boolFalseState = !!falseState;
  let parsedState = "";

  if (isWaitingOnSpecificState) {
    parsedState = state.indexOf(" ") > -1 ?
      state.split(/\s/)[state.split(/\s/)
        .length - 1] :
      state;

    if (parsedState === "checked") {
      parsedState = "selected";
    }

    command = `waitFor${parsedState[0].toUpperCase()}` +
      `${parsedState.slice(1)}`;
  }

  if (typeof falseState === "undefined") {
    boolFalseState = false;
  }

  browser[command](elem, intMs, boolFalseState);

  done();
};
