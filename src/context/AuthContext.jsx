import { createContext, useState } from "react";

import PropTypes from "prop-types";
import { login } from "../services/authServices";
import useSweetAlert from "../hooks/useSweetAlert";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const { handleResponseAlert } = useSweetAlert();
  const { handleConfirmationAlert } = useSweetAlert();
  const [token, setToken] = useState(localStorage.token || null);
  const [isLogin, setIsLogin] = useState(localStorage.isLoggedIn || false);

  const handleLogin = async (data) => {
    await login(data)
      .then((res) => {
        if (res.message === "success") {
          localStorage.setItem("token", res.token);
          localStorage.setItem("isLoggedIn", true);
          setToken(res.token);
          setIsLogin(true);
        }
      })
      .catch((err) => {
        handleResponseAlert("error", err.message || "Terjadi Kesalahan!", 3000);
      });
  };

  const handleLogout = () => {
    handleConfirmationAlert(
      "Apakah anda yakin?",
      "Anda akan keluar dari aplikasi dan harus login kembali!",
      "Ya, Logout!",
      "Logout Berhasil!",
      "Anda sudah berhasil logout.",
      async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        setIsLogin(false);
      }
    );
  };

  const props = {
    token,
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
