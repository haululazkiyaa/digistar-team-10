import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <main className="ubuntu">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AppLayout;
