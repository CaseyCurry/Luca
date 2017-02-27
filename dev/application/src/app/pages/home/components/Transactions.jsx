import React from "react";
import Option from "./Option";

const Transactions = class Transactions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillEnter() {}

  componentWillLeave() {}

  render() {
    return <Option
      subject="Checking Account"
      action="Transactions"
      description="Import and categorize checking account transactions."/>;
  }
};

export default Transactions;
