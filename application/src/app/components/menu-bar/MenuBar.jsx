import React from "react";
import HomeButton from "./HomeButton";
import Title from "./Title";
import Hamburger from "./Hamburger";

const MenuBar = ({pageName, handleHamburgerClick, menuOptions}) => {
  return <div className="menu-bar">
    <HomeButton/>
    <Title pageName={pageName}/>
    {menuOptions && menuOptions.length > 0 && <Hamburger handleClick={handleHamburgerClick}/>}
  </div>;
};

MenuBar.propTypes = {
  pageName: React.PropTypes.string.isRequired,
  menuOptions: React
    .PropTypes
    .arrayOf(React.PropTypes.object)
    .isRequired,
  handleHamburgerClick: React.PropTypes.func.isRequired
};

export default MenuBar;
