"use strict";

const path = require("path");
const clientInitializer = require("luca-client-initializer");

const staticFileLocation = path.join(__dirname, "app");
const home = "index.html";
const port = 13000;
clientInitializer.initializeApplication(port, staticFileLocation, home);
