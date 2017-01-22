"use strict";

const path = require("path");
const express = require("express");
const clientInitializer = require("luca-client-initializer");

const staticFileLocation = path.join(__dirname, "app");
clientInitializer.initialize(express, "checking-account-client", staticFileLocation);
