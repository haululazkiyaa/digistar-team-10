import { Route, Routes } from "react-router-dom";

import AppLayout from "../layout/AppLayout";
import AuthLayout from "../layout/AuthLayout";
import Buyer from "../pages/buyer/Buyer";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import LoginAs from "../pages/auth/LoginAs";
import Seller from "../pages/seller/Seller";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login-as" element={<LoginAs />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/seller" element={<Seller />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
