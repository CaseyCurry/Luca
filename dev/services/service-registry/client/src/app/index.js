document.addEventListener("DOMContentLoaded", () => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const services = JSON.parse(this.responseText);
      const parent = document.getElementById("app");
      appendServices(parent, services);
    }
  };
  xhr.open("GET", "http://localhost:12001/api/services");
  xhr.send();
});

const appendServices = (parent, services) => {
  if (!services.length) {
    const childElement = createNoServicesRegisteredElement();
    parent.appendChild(childElement);
    return;
  }
  services
    .sort()
    .forEach(service => {
      const childElement = createServiceElement(service);
      parent.appendChild(childElement);
    });
};

const createNoServicesRegisteredElement = () => {
  const element = document.createElement("span");
  element.innerHTML = "No Services Registered";
  return element;
};

const createServiceElement = (service) => {
  const name = createDataAttribute(service.name);
  const port = createDataAttribute(`http://localhost:${service.port}`);
  const registrationTime = createDataAttribute(service.registrationTime);

  const element = document.createElement("div");
  element.className = "service";
  element.appendChild(name);
  element.appendChild(port);
  element.appendChild(registrationTime);

  return element;
};

const createDataAttribute = (value) => {
  const element = document.createElement("div");
  element.innerHTML = value;
  return element;
};
