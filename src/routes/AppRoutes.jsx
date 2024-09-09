import { Route, Routes } from "react-router-dom";

import Buyer from "../pages/buyer/Buyer";
import Home from "../pages/Home";
import Seller from "../pages/seller/Seller";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buyer" element={<Buyer />} />
      <Route path="/seller" element={<Seller />} />
    </Routes>
  );
};

export default AppRoutes;
