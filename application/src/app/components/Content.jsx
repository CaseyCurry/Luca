import React from "react";

const Content = ({content, className}) => {
  return <div className={className}>{content}</div>;
};

Content.propTypes = {
  content: React.PropTypes.any.isRequired,
  className: React.PropTypes.string.isRequired
};

export default Content;
