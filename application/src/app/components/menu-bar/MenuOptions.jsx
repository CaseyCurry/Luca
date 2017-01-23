import React from "react";
import TransitionGroup from "react-addons-css-transition-group";

const MenuOptions = class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {addedOptions: []};
    this.props.options.forEach(option => {
      const timeout = (this.props.options.indexOf(option) + 1) * 100;
      setTimeout(() => {
        const addedOptions = this.state.addedOptions.concat([option]);
        this.setState(Object.assign({}, this.state, {addedOptions}));
      }, timeout);
    });
  }

  render() {
    const list = this.state.addedOptions.map(option => {
      const menuItemHeight = 50; // this is also defined in _page.scss
      const style = {
        top: (this.state.addedOptions.indexOf(option) + 1) * menuItemHeight + "px"
      };
      return <li
        key={option.name}
        style={style}
        onClick={option.handleClick}>{option.name}</li>;
    });
    return <div className="options">
      <TransitionGroup
        component="ul"
        className="list-unstyled"
        transitionName="item"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {list}
      </TransitionGroup>
    </div>;
    //return <ul className="list-unstyled">{list}</ul>;
  }
};

MenuOptions.propTypes = {
  options: React
    .PropTypes
    .arrayOf(React.PropTypes.shape({name: React.PropTypes.string.isRequired, handleClick: React.PropTypes.func.isRequired}))
};

export default MenuOptions;
