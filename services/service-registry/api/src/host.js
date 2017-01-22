"use strict";

const app = require("express")();
const apiInitializer = require("luca-api-initializer");
const dependencies = require("./dependencies");
const routes = require("./routes/index");
const port = 12001;

apiInitializer.initializeWithPort(app, port, routes.register(dependencies));
