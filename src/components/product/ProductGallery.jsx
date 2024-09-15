const ProductGallery = () => {
  return (
    <div className="h-fit md:sticky md:top-[140px] md:flex-none w-full md:w-[432px]">
      <div
        id="product-images"
        className="flex flex-col items-center md:sticky md:top-auto w-full"
      >
        <div className="flex flex-col items-center justify-center w-[100%] h-[320px] sm:h-[432px] sm:w-[432px]">
          <div className="h-full w-full relative overflow-hidden text-sm bg-white">
            <div className="block xl:hidden absolute z-[10] bottom-2 right-2 bg-[#8F95B2] text-sm px-3 py-2 rounded text-[#FFF]">
              1/2
            </div>
            <div className="cursor-pointer">
              <div
                className="bg-[#8F95B2] opacity-[0.5] absolute pointer-events-none z-[10]"
                style={{
                  left: "-120px",
                  top: "-120px",
                  width: "240px",
                  height: "240px",
                  display: "none",
                }}
              ></div>
              <img
                alt="BALLPOINT TRIFELO BP-316/317"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                src="https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/products/30535/258937/trifelo2.1624093142.jpg"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "cover",
                  color: "transparent",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full relative pt-[16px] pb-4 md:pb-6">
          <div
            className="slick-slider product-detail-slick-item relative px-4 lg:px-0  slick-initialized"
            dir="ltr"
          >
            <div className="slick-list">
              <div
                className="slick-track"
                style={{
                  opacity: "1",
                  transform: "translate3d(0px, 0px, 0px)",
                  width: "400px",
                }}
              >
                <div
                  data-index="0"
                  className="slick-slide slick-active slick-current"
                  tabIndex="-1"
                  aria-hidden="false"
                  style={{ outline: "none" }}
                >
                  <div>
                    <div
                      className="flex items-center justify-center overflow-hidden cursor-pointer rounded-md border-2 hover:opacity-80  border-secondary-70"
                      tabIndex="-1"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="flex items-center justify-center relative w-24 h-24 overflow-hidden text-sm bg-white">
                        <div
                          className="h-[150px] flex items-center justify-center relative"
                          style={{ width: "173px" }}
                        >
                          <img
                            alt=""
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="w-full h-full object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                            src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fproducts%2F30535%2F258937%2Ftrifelo2.1624093142.jpg&amp;w=3840&amp;q=15"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: "0px",
                              objectFit: "cover",
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="1"
                  className="slick-slide slick-active"
                  tabIndex="-1"
                  aria-hidden="false"
                  style={{ outline: "none" }}
                >
                  <div>
                    <div
                      className="flex items-center justify-center overflow-hidden cursor-pointer rounded-md border-2 hover:opacity-80  border-white"
                      tabIndex="-1"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="flex items-center justify-center relative w-24 h-24 overflow-hidden text-sm bg-white">
                        <div
                          className="h-[150px] flex items-center justify-center relative"
                          style={{ width: "173px" }}
                        >
                          <img
                            alt=""
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="w-full h-full object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                            src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fproducts%2F30535%2F258937%2Ftrifelo1.1624093142.jpg&amp;w=3840&amp;q=15"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: "0px",
                              objectFit: "cover",
                              color: "transparent",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 items-center w-full">
          <div
            className="click-bagikan-produk flex gap-x-1 items-center"
            id="click-bagikan-produk"
          >
            <span className="font-medium leading-[18px] text-[#686E76] text-[12px]">
              Bagikan Produk :
            </span>
            <button className="">
              <img
                alt="Whatsapp"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                src="/svgs/whatsapp2-logo.svg"
                style={{ color: "transparent" }}
              />
            </button>
            <button className="">
              <img
                alt="Telegram"
                loading="lazy"
                width="22"
                height="2"
                decoding="async"
                data-nimg="1"
                src="/svgs/telegram-logo.svg"
                style={{ color: "transparent" }}
              />
            </button>
            <button className="">
              <img
                alt="Facebook"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                src="/svgs/facebook-logo.svg"
                style={{ color: "transparent" }}
              />
            </button>
            <button className="">
              <img
                alt="Twitter"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                src="/svgs/x-square-logo.svg"
                style={{ color: "transparent" }}
              />
            </button>
            <button className="">
              <img
                alt="Share"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                src="/svgs/share.svg"
                style={{ color: "transparent" }}
              />
            </button>
          </div>
          <hr className="bg-[#009EA9] h-6 w-[2px]" />
          <button
            className="bg-[#DDF4F6] click-add-to-bandingkan-produk gap-x-2 flex hover:bg-cyan-50 hover:cursor-pointer items-center px-2 py-1 rounded"
            id="click-add-to-bandingkan-produk"
          >
            <img
              alt="Bandingkan Produk"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              src="/svgs/ic-compare.svg"
              style={{ color: "transparent" }}
            />
            <span className="font-medium leading-[18px] text-[#009EA9] text-[12px]">
              Bandingkan Produk
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
