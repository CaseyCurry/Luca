import React from "react";
import Option from "./Option";

const Budget = class Budget extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillEnter() {}

  componentWillLeave() {}

  render() {
    return <Option
      subject="Household"
      action="Budget"
      description="Estimate income and expenditures."
      ref={parent => this.parent = parent}/>;
  }
};

export default Budget;
