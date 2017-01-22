"use strict";

const axios = require("axios");

const locate = (baseUrl) => {
  return async(name) => {
    const url = `${baseUrl}/${name}`;
    const response = await axios
      .get(url);
    const port = response.data;
    return `http://localhost:${port}`;
  };
};

module.exports = (baseUrl) => {
  return locate(baseUrl);
};
