import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth } from "../Store/AuthContext";
import Home from "../Layout/Home";
import Store from "../Layout/Store";
import About from "../Layout/About";
import ContactUs from "../Layout/ContactUs";
import ProductPage from "../Product/ProductPage";
import AuthForm from "../Auth/AuthForm";

const Routers = ({ authMode, onToggleAuthMode }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Switch>
      {/* Public routes */}
      <Route exact path="/" component={Home} />
      
      <Route 
        path="/auth"
        render={() =>
          isLoggedIn ? (
            <Redirect to="/" />
          ) : (
            <AuthForm 
              isLogin={authMode === "login"} 
              switchAuthModeHandler={onToggleAuthMode} 
            />
          )
        }
      />

      {/* Protected routes - accessible only when logged in */}
      <Route
        path="/store"
        render={() =>
          isLoggedIn ? <Store /> : <Redirect to="/auth" />
        }
      />
      <Route
        path="/about"
        render={() =>
          isLoggedIn ? <About /> : <Redirect to="/auth" />
        }
      />
      <Route
        path="/contact"
        render={() =>
          isLoggedIn ? <ContactUs /> : <Redirect to="/auth" />
        }
      />
      <Route
        path="/product/:productId"
        render={(props) =>
          isLoggedIn ? <ProductPage {...props} /> : <Redirect to="/auth" />
        }
      />

      {/* Catch-all route */}
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routers;