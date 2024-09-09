import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <main className="ubuntu">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
