"use strict";

const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "client")));

const port = 12000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
