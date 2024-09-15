import { createContext, useState } from "react";

import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(localStorage.isLoggedIn || true);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLogin(false);
  };

  const props = {
    isLogin,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
