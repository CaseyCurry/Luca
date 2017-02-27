import React from "react";

const Authentication = ({content}) => {
  return <span>{content}</span>;
};

Authentication.propTypes = {
  content: React.PropTypes.object.isRequired
};

export default Authentication;
