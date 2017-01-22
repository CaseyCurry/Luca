"use strict";

const app = require("express")();
const apiInitializer = require("luca-api-initializer");
const routes = require("./api/routes");
const port = 12001;

apiInitializer.initializeWithPort(app, port, routes.register);
