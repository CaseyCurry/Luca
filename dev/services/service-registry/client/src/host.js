"use strict";

const path = require("path");
const clientInitializer = require("luca-client-initializer");

const port = 12000;
const staticFileLocation = path.join(__dirname, "app");
clientInitializer.initializeWithPort(port, staticFileLocation);
