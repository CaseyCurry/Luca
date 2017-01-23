import React from "react";

const Hamburger = ({handleClick}) => {
  return <span className="hamburger" onClick={handleClick}>
    <div className="bun"></div>
    <div className="patty"></div>
    <div className="bun"></div>
  </span>;
};

Hamburger.propTypes = {
  handleClick: React.PropTypes.func.isRequired
};

export default Hamburger;
