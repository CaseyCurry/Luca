import React from "react";
import TransitionGroup from "react-addons-transition-group";
import Budget from "./components/Budget";
import Transactions from "./components/Transactions";
import Trends from "./components/Trends";
import Progress from "./components/Progress";

const Home = ({children}) => {
  if (children) {
    return <div>{children}</div>;
  }
  return <TransitionGroup>
    <div className="home">
      <div>
        <Budget/>
        <Transactions/>
        <Trends/>
        <Progress/>
      </div>
    </div>
  </TransitionGroup>;
};

Home.propTypes = {
  children: React.PropTypes.object
};

export default Home;
