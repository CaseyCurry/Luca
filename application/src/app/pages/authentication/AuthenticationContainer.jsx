import React from "react";
import Authentication from "./Authentication";
import {persistToken} from "../../modules/authentication";

const AuthenticationContainer = ({next}) => {
  const handleSuccessfulAuthentication = (token) => {
    persistToken(token);
    return next();
  };
  const usersService = <UserService.App
    handleSuccessfulAuthentication={handleSuccessfulAuthentication}/>;
  return <Authentication content={usersService}/>;
};

AuthenticationContainer.propTypes = {
  next: React.PropTypes.func.isRequired
};

export default AuthenticationContainer;
