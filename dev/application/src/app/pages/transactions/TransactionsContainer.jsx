import React from "react";
import Transactions from "./Transactions";
import axios from "axios";
import serviceRegistry from "service-registry-library";

const TransactionsContainer = () => {
  const categoriesApi = {
    client: axios,
    getUrl: () => {
      return serviceRegistry.locate("categories-api")
        .then(url => {
          return `${url}/api/categories`;
        });
    }
  };
  const checkingAccountService = <CheckingAccountService.App categoriesApi={categoriesApi}/>;
  const className = CheckingAccountService.className;
  const menuOptions = CheckingAccountService.menuOptions;
  return <Transactions
    content={checkingAccountService}
    className={className}
    menuOptions={menuOptions}/>;
};

export default TransactionsContainer;
