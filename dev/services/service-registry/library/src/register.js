"use strict";

const axios = require("axios");

const register = (baseUrl) => {
  return async(name, statusCheckPollDuration) => {
    let url = buildUrl(baseUrl, statusCheckPollDuration);
    const service = {
      name
    };
    let response = await axios
      .post(url, service, {
        validateStatus: (status) => {
          return status == 201 || status == 409;
        }
      });
    if (response.status == 409) {
      response = await replaceRegistration(service, baseUrl, url);
    }
    const port = response.data;
    return port;
  };
};

const buildUrl = (baseUrl, statusCheckPollDuration) => {
  let url = baseUrl;
  if (statusCheckPollDuration) {
    url += `?statusCheckPollDuration=${statusCheckPollDuration}`;
  }
  return url;
};

const replaceRegistration = async(service, baseUrl, url) => {
  await axios
    .delete(`${baseUrl}/${service.name}`);
  return await axios
    .post(url, service);
};

module.exports = (baseUrl) => {
  return register(baseUrl);
};
