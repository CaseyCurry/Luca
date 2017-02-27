import React from "react";
import MenuBar from "./menu-bar/MenuBar";
import MenuOptions from "./menu-bar/MenuOptions";
import Content from "./Content";

const Page = class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleHamburgerClick = this
      .handleHamburgerClick
      .bind(this);
  }

  handleHamburgerClick() {
    this.setState(Object.assign({}, this.state, {
      displayMenu: !this.state.displayMenu
    }));
  }

  render() {
    return <div className="page">
      <MenuBar
        pageName={this.props.name}
        handleHamburgerClick={this.handleHamburgerClick}
        menuOptions={this.props.menuOptions}/>
      {this.state.displayMenu && <MenuOptions options={this.props.menuOptions}/>}
      <div className={`content ${this.props.parentClassName}`}>
        <Content
          content={this.props.content}
          className={this.props.childClassName}/>
      </div>
    </div>;
  }
};

Page.propTypes = {
  name: React.PropTypes.string.isRequired,
  menuOptions: React
    .PropTypes
    .arrayOf(React.PropTypes.object)
    .isRequired,
  content: React.PropTypes.any.isRequired,
  parentClassName: React.PropTypes.string.isRequired,
  childClassName: React.PropTypes.string.isRequired
};

export default Page;
