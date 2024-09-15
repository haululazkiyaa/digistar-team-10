import { Navigate, Outlet, useLocation } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const PrivateRoute = () => {
  const { isLogin } = useContext(AuthContext);
  const location = useLocation();

  if (!isLogin) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login-as" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
