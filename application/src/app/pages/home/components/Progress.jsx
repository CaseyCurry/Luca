import React from "react";
import Option from "./Option";

const Progress = class Progress extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillEnter() {}

  componentWillLeave() {}

  render() {
    return <Option
      subject="Long-Term"
      action="Progress"
      description="Track progress towards financial security."/>;
  }
};

export default Progress;
