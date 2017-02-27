const addStatusRoute = (app) => {
  app.get("/", (request, response) => {
    response.status(200);
    response.end();
  });
};

module.exports = addStatusRoute;
