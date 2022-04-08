import React from "react";
import { Redirect } from "react-router-dom";

import { Switch, Route } from "react-router-dom";
import LoginScreen from "../LoginScreen";
import RegisterScreen from "../RegisterScreen";

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/register" component={RegisterScreen} />
        <Redirect to='/auth/login' />
      </Switch>
    </div>
  );
};
