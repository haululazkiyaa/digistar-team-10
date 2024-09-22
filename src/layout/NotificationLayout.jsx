import PropTypes from "prop-types";

const NotificationLayout = ({
  isOpen,
  closeBtnAction,
  title,
  children,
  onClick,
}) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed bottom-0 right-0 bg-white rounded-lg w-full md:w-[500px] shadow-xl z-50 m-5 p-4 space-y-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <img src="/svgs/logo.svg" alt="logo" className="h-6" />
          <p className="font-semibold">{title || "Hai, Padiers"}</p>
        </div>
        <button
          onClick={closeBtnAction}
          className="text-gray-500 hover:text-gray-700"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};

NotificationLayout.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeBtnAction: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default NotificationLayout;
