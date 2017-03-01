import serviceRegistry from "luca-service-registry-library";

const loadCss = (url) => {
  const sheet = document.createElement("link");
  sheet.rel = "stylesheet";
  sheet.href = url;
  document.head.appendChild(sheet);
};

const loadScript = (url) => {
  const script = document.createElement("script");
  script.src = url;
  document.body.appendChild(script);
};

const loadService = (serviceName, callback) => {
  serviceRegistry.locate(serviceName)
    .then(url => {
      callback(url);
    })
    .catch(error => {
      console.log(error);
    });
};

export default {
  loadResources: () => {
    loadService("checking-account-client", (url) => {
      loadCss(`${url}/checking-account.css`);
      loadScript(`${url}/app.min.js`);
    });
    loadService("users-client", (url) => {
      loadScript(`${url}/app.min.js`);
    });
  }
};
