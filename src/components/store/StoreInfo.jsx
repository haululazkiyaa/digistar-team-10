const StoreInfo = () => {
  return (
    <div className="flex px-4 lg:px-0 py-0 w-full">
      <div
        id="seller-information-container"
        className="flex flex-col md:flex-row items-start md:items-center justify-between w-full py-4 md:py-3 px-4 my-5 space-y-4 border lg:space-y-0 rounded-lg font-ubuntu"
        style={{ background: "transparent" }}
      >
        <div className="w-full">
          <div className="flex space-x-5 w-full">
            <div className="relative w-[46px] h-[46px] text-sm rounded-full flex-none border">
              <img
                alt="CV. UZA SERVICE"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="rounded-full"
                sizes="100vw"
                src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcompanies%2F30535%2Ft5IPvJ.Cv.-UZA-SERVICE.1622950619.png&amp;w=3840&amp;q=25"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
              <label className="relative w-full mx-auto top-7 text-center px-[7px] py-[1px] rounded-[3px] font-ubuntu text-[10px] bg-primary-70 text-white">
                UMKM
              </label>
            </div>
            <div className="flex flex-col gap-y-1">
              <a
                title="CV. UZA SERVICE"
                rel="noreferrer noopener"
                target="_blank"
                href="/store/631a58618755a8a9895efc63"
              >
                <div className="flex gap-x-1 items-center">
                  <span className="text-base font-semibold  block text-paletteText-primary cursor-pointer h-[24px] overflow-hidden">
                    CV. UZA SERVICE
                  </span>
                </div>
              </a>
              <div className="flex items-center justify-start gap-x-1.5 gap-y-1 flex-wrap mt-1 md:mt-0">
                <div className="bg-[#E6F4F7] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] px-2 !h-[18px] !text-[10px] leading-[18px]">
                  <div
                    className="flex items-center justify-center space-x-1"
                    style={{ color: "rgb(0, 126, 135)" }}
                  >
                    <span className="font-medium font-ubuntu ">PKP</span>
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <div className="flex items-center justify-start  text-paletteText-inactive">
                  <div className="flex-none w-[18px] mt-0.5">
                    <img
                      alt="location icon"
                      loading="lazy"
                      width="12"
                      height="12"
                      decoding="async"
                      data-nimg="1"
                      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap-pin.4e753bcc.svg&amp;w=32&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <span className="max-w-[185px] text-sm truncate">
                    Kota Tangerang Selatan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-fit">
          <div className="flex flex-col md:flex-row items-center justify-end">
            <div className="w-full md:w-fit">
              <div className="flex items-center justify-start sm:justify-between lg:justify-center pt-4 md:pt-0 md:divide-x-[1px] md:divide-[#EBEBED]">
                <div className="pr-5 flex flex-col flex-none xl:flex-1 items-start md:px-5 sm:flex-none sm:items-center space-y-2 font-ubuntu ">
                  <div className="flex items-center justify-center text-sm font-medium flex-nowrap text-paletteText-primary h-[24px]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="w-5 h-5 text-base text-tertiary-60"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                    <span className="pl-2">5</span>
                  </div>
                  <div className="text-xs text-paletteText-inactive whitespace-nowrap h-[16px]">
                    Rating &amp; Ulasan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
