import React from "react";
import {Link} from "react-router";

const Option = ({subject, action, description}) => {
  return <Link to={action}>
    <div className={action.toLowerCase()}>
      <div>
        <div className="subject">{subject}</div>
        <div className="action">{action}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  </Link>;
};

Option.propTypes = {
  subject: React.PropTypes.string.isRequired,
  action: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
};

export default Option;
