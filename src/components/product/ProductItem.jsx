import PropTypes from "prop-types";

const ProductItem = ({ item }) => {
  return (
    <div
      className="slick-slide slick-active slick-current"
      tabIndex="-1"
      aria-hidden="false"
      style={{ outline: "none" }}
    >
      <div>
        <div
          className="px-2 pt-[1px] pb-[4px] h-full"
          tabIndex="-1"
          style={{ width: "100%", display: "inline-block" }}
        >
          <div className="flex flex-col justify-start h-full w-[173px] rounded-lg overflow-hidden bg-white font-ubuntu border border-[#DEE3ED] shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)]">
            <a className="block w-full h-full" href={item.link}>
              <div className="cursor-pointer flex flex-col items-center justify-between w-full h-full">
                <div className="flex-none w-[173px] h-[150px] mb-2 relative aspect-w-1 aspect-h-1 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 text-sm select-none">
                  <div
                    className="h-[150px] flex items-center justify-center relative"
                    style={{ width: "173px" }}
                  >
                    <img
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      src={item.imageUrl}
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "cover",
                        objectPosition: "center center",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0">
                    <span className="text-center p-1 font-ubuntu text-[10px] font-[500px] bg-primary-70 text-white">
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className="px-2 mb-2 w-full select-none">
                  <div className="border-[#DEE3ED] border flex gap-x-1 items-center px-1.5 py-1 rounded-xl w-fit">
                    <img
                      alt="store"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      src="/svgs/shop.svg"
                      style={{ color: "transparent" }}
                    />
                    <span className="truncate w-[120px] text-[#444B55] font-medium font-ubuntu  text-[10px]">
                      {item.store}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between w-full h-full select-none">
                  <div className="w-full px-2 pb-2 space-y-1 text-paletteText-primary">
                    <div className="flex flex-col gap-y-1">
                      <span className="truncate font-normal leading-[21px] line-clamp-2 text-[14px] text-wrap">
                        {item.title}
                      </span>
                      <span className="text-sm font-bold text-wrap">
                        {item.price}
                      </span>
                    </div>
                    <div className="text-xs flex items-center justify-start gap-x-0.5 h-[22px]">
                      <div className="flex-none w-[15px]">
                        <img
                          alt=""
                          loading="lazy"
                          width="12"
                          height="12"
                          decoding="async"
                          data-nimg="1"
                          className="!w-3 !h-3"
                          src="/svgs/map-pin.svg"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div
                        className="flex-1 truncate mb-[2px]"
                        title="Kab. Klaten"
                        style={{ width: "140px" }}
                      >
                        {item.city}
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-2 pb-2 space-x-2">
                    <div className="flex gap-1 flex-wrap select-none">
                      <div className="bg-[#E6F4F7] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] ">
                        <div
                          className="flex items-center justify-center space-x-1"
                          style={{ color: "rgb(0, 146, 172)" }}
                        >
                          <span className="font-medium font-ubuntu ">
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.string,
    link: PropTypes.string,
    status: PropTypes.string,
    store: PropTypes.string,
    city: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default ProductItem;
