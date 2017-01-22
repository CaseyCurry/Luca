"use strict";

const helmet = require("helmet");
const serviceRegistry = require("luca-service-registry-library");

const initialize = (express, name, staticFileLocation) => {
  const app = express();
  app.use(helmet());

  // add a "/" route so that the service registry can poll the service
  serviceRegistry.addStatusRoute(app);

  app.use(express.static(staticFileLocation));

  serviceRegistry.register(name)
    .then(port => {
      app.listen(port, () => {
        console.log(`listening on port ${port}...`);
      });
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports.initialize = initialize;
