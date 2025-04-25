import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
  email: "",
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    email: email,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
