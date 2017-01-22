"use strict";

const axios = require("axios");
const portscanner = require("portscanner");
const findAPort = require("./routes/find-a-port")(portscanner);
const services = require("./routes/services")(axios, findAPort);

const dependencies = {
  services
};

module.exports = dependencies;
