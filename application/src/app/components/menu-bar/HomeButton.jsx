import React from "react";
import {Link} from "react-router";

const HomeButton = () => {
  return <Link to="/" className="home">
    <span>Home</span>
  </Link>;
};

export default HomeButton;
