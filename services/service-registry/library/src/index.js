"use strict";

const register = require("./register");
const locate = require("./locate");
const addStatusRoute = require("./add-status-route");

const baseUrl = "http://localhost:12001/api/services";

module.exports.register = register(baseUrl);
module.exports.locate = locate(baseUrl);
module.exports.addStatusRoute = addStatusRoute;
