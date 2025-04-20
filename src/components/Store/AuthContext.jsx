import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    
    const expirationTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes expiry
    localStorage.setItem("expirationTime", expirationTime);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
  };

  useEffect(() => {
    const storedExpirationTime = localStorage.getItem("expirationTime");
    let logoutTimer;

    if (userIsLoggedIn && storedExpirationTime) {
      const remainingTime = +storedExpirationTime - new Date().getTime();

      if (remainingTime <= 0) {
        logoutHandler();
        alert("Session expired. Please log in again.");
      } else {
        logoutTimer = setTimeout(() => {
          logoutHandler();
          alert("You have been logged out due to inactivity.");
        }, remainingTime);
      }
    }

    return () => clearTimeout(logoutTimer); // Cleanup
  }, [userIsLoggedIn]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
