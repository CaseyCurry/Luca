import React from "react";

const Title = ({pageName}) => {
  return <span className="title">{pageName}</span>;
};

Title.propTypes = {
  pageName: React.PropTypes.string.isRequired
};

export default Title;
