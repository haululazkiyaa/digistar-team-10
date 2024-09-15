import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const AuthLayout = () => {
  const { isLogin } = useContext(AuthContext);

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="flex justify-center items-center lg:h-screen bg-gradient-to-b from-[#0193AC] to-[#3EC4DB]">
        <div className="max-w-screen-lg w-full lg:flex overflow-hidden h-fit items-center">
          <div className="relative  lg:max-w-screen-sm w-full hidden lg:flex flex-col justify-center items-center space-y-7 p-10">
            <div className="flex justify-center items-center flex-1">
              <div className="relative w-[300px] h-[270px]">
                <img
                  src="/svgs/login-card.svg"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-4 flex-1 min-h-[144px]">
              <div className="text-2xl text-white font-bold text-center">
                Bersama PaDi UMKM
              </div>
              <div className="text-white text-center font-normal">
                Mari tingkatkan pertumbuhan ekonomi UMKM untuk Indonesia yang
                lebih maju.
              </div>
            </div>
            <div className="flex space-x-1 absolute bottom-3 ml-6 mb-1 ">
              <div className="rounded-full p-1 bg-white w-6 "></div>
              <div className="rounded-full p-1 bg-borderCard-textFieldBorder  "></div>
              <div className="rounded-full p-1 bg-borderCard-textFieldBorder  "></div>
              <div className="rounded-full p-1 bg-borderCard-textFieldBorder  "></div>
            </div>
            <div className="absolute false right-0 flex justify-between px-5">
              <span className="cursor-pointer">
                <div className="bg-white text-[#808C92] p-2 rounded-full">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                  </svg>
                </div>
              </span>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      <div className="hidden md:block lg:block  xl:block absolute left-0 top-5">
        <img
          alt="ornament"
          src="/svgs/oranament-left.svg"
          width="73"
          height="315"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="absolute right-0 top-10">
        <img
          alt="ornament"
          src="/svgs/oranament-right.svg"
          width="90"
          height="154"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <img
          alt="ornament"
          src="/svgs/oranament-bottom.svg"
          width="148"
          height="144"
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
};

export default AuthLayout;
