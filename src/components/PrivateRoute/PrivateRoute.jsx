import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../Store/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authCtx = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        authCtx.token ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

export default PrivateRoute;
