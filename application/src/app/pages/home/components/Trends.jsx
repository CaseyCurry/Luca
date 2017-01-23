import React from "react";
import Option from "./Option";

const Trends = class Trends extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillEnter() {}

  componentWillLeave() {}

  render() {
    return <Option
      subject="Recent"
      action="Trends"
      description="Visualize activity to spot opportunities for improvement."/>;
  }
};

export default Trends;
