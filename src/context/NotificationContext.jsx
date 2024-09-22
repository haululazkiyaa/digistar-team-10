import { createContext, useState } from "react";

import NotificationLayout from "../layout/NotificationLayout";
import PropTypes from "prop-types";

export const NotificationContext = createContext();

const NotificationContextProvider = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [title, setTitle] = useState("Notfikasi");
  const [message, setMessage] = useState("");

  const handleShowNotification = (title, message) => {
    setTitle(title);
    setMessage(message);
    setShowNotification(true);
  };

  const props = {
    handleShowNotification,
    setShowNotification,
  };

  return (
    <NotificationContext.Provider value={props}>
      {children}

      <NotificationLayout
        title={title}
        isOpen={showNotification}
        closeBtnAction={() => setShowNotification(false)}
        onClick={() => (window.location.href = "/buyer")}
      >
        {message}
      </NotificationLayout>
    </NotificationContext.Provider>
  );
};

NotificationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NotificationContextProvider;
