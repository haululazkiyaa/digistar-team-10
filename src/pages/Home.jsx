const Home = () => {
  return (
    <div>
      <div className="mt-0">
        <div className="container-layout">
          <div className="flex w-full md:gap-x-2 lg:gap-x-3 xl:gap-x-4">
            <div className="relative w-full lg:w-3/5 lg:h-[329px]">
              <div className="hidden bg-white hover:bg-gray-200 hover:cursor-pointer p-2 left-2 rounded-full top-[45%] z-[1]">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="h-[calc(100vw/2)] lg:max-h-[calc(100vh/5)] w-full cursor-pointer">
                <img
                  alt="Main Banner Homepage"
                  loading="lazy"
                  className="rounded-lg"
                  sizes="100vw"
                  src="/images/promo-1.jpeg"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    objectFit: "fill",
                    color: "transparent",
                  }}
                />
              </div>
              <div className="hidden bg-white hover:bg-gray-200 hover:cursor-pointer p-2 right-2 rounded-full top-[45%] z-[1]">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="flex space-x-1 absolute bottom-3 ml-6 mb-1 ">
                <div className="rounded-full p-1 bg-borderCard-textFieldBorder  hover:bg-inactive cursor-pointer"></div>
                <div className="rounded-full p-1 bg-white w-10 hover:bg-inactive cursor-pointer"></div>
                <div className="rounded-full p-1 bg-borderCard-textFieldBorder  hover:bg-inactive cursor-pointer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
