const LoginAs = () => {
  return (
    <div className="flex flex-col md:justify-center lg:justify-center items-center w-full rounded-lg bg-white h-screen lg:h-full py-20 px-10 md:p-10 lg:p-10 xl:p-10">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className="text-2xl text-paletteText-primary font-bold">
            Login Sebagai
          </div>
          <a href="/">
            <div className="relative w-24 h-24 cursor-pointer">
              <img src="/svgs/logo.svg" alt="logo" className="w-full h-full" />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <a href="/login">
          <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 w-full text-paletteText-primary  bg-white border rounded-3xl py-7 px-5 sm:space-x-5 cursor-pointer hover:bg-gradient-to-b from-[#0193AC] to-[#3EC4DB] hover:text-white mb-4">
            <div className="flex justify-between items-center gap-6 w-full">
              <div className="flex gap-2">
                <div className=" flex items-center p-4">
                  <div className="flex justify-center items-center bg-[#E6F4F7] rounded-2xl p-3">
                    <div className="relative w-8 h-8">
                      <img
                        src="/svgs/seller.svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-1">
                  <div className="font-bold text-lg text-center sm:text-left">
                    Penjual
                  </div>
                  <div className="text-base text-center sm:text-left">
                    Jual produk secara efisien ke BUMN maupun retail
                  </div>
                </div>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
              </svg>
            </div>
          </div>
        </a>
        <a href="/login">
          <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 w-full text-paletteText-primary  bg-white border rounded-3xl py-7 px-5 sm:space-x-5 cursor-pointer hover:bg-gradient-to-b from-[#0193AC] to-[#3EC4DB] hover:text-white mb-4">
            <div className="flex justify-between items-center gap-6 w-full">
              <div className="flex gap-2">
                <div className=" flex items-center p-4">
                  <div className="flex justify-center items-center bg-[#E6F4F7] rounded-2xl p-3">
                    <div className="relative w-8 h-8">
                      <img
                        src="/svgs/buyer.svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-1">
                  <div className="font-bold text-lg text-center sm:text-left">
                    Pembeli
                  </div>
                  <div className="text-base text-center sm:text-left">
                    Login pembeli retail dan B2B
                  </div>
                </div>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LoginAs;
