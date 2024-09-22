import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NotificationContextProvider from "../context/NotificationContext";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <main className="ubuntu">
      <NotificationContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </NotificationContextProvider>
    </main>
  );
};

export default AppLayout;
