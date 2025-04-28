import { createContext, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
  email: "",
});

export const AuthContextProvider = ({ children }) => {
  const history = useHistory();
  const initialToken = localStorage.getItem("token") || null;
  const initialEmail = localStorage.getItem("email") || null;

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    history.push("/");
  };

  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    history.push("/auth");
  };

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    email,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;