import React from "react";
import Page from "../../components/Page";

const Transactions = ({content, className, menuOptions}) => {
  // const menuOptions = [
  //   {
  //     name: "Import",
  //     handleClick: () => {
  //       console.log("import");
  //     }
  //   }, {
  //     name: "Import 2",
  //     handleClick: () => {
  //       console.log("import");
  //     }
  //   }
  // ];
  console.log(CheckingAccountService.menuOptions);
  return <Page
    name="Transactions"
    menuOptions={menuOptions}
    content={content}
    parentClassName={className}
    childClassName="transaction-content"/>;
};

Transactions.propTypes = {
  content: React.PropTypes.object.isRequired,
  className: React.PropTypes.string.isRequired,
  menuOptions: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default Transactions;
