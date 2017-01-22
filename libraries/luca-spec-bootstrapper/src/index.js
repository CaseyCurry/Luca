"use strict";

const requireAll = (context) => {
  return context
    .keys()
    .map(context);
};

const bootstrap = (context) => {
  const modules = requireAll(context);
  return modules;
};

module.exports.bootstrap = bootstrap;
