"use strict";

// 12000 and 12001 are reserved for the service registry api and client
let minimumPort = 12002;

const findAPort = async(portscanner) => {
  const port = await portscanner.findAPortNotInUse(minimumPort++, 12999);
  return port;
};

module.exports = findAPort;
