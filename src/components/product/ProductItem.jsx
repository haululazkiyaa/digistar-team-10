import PropTypes from "prop-types";

const ProductItem = ({ item }) => {
  return (
    <div className="px-2 pt-[1px] pb-[4px] h-full">
      <a href={item.link} className="block w-full h-full">
        <div className="flex flex-col justify-start h-full w-[173px] rounded-lg overflow-hidden bg-white border border-[#DEE3ED] shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)]">
          <div className="flex-none w-[173px] h-[150px] mb-2 relative">
            <img
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              src={item.imageUrl}
            />
            <div className="absolute bottom-0 left-0">
              <span className="text-center p-1 font-ubuntu text-[10px] font-[500px] bg-primary-70 text-white">
                UMKM
              </span>
            </div>
          </div>
          <div className="px-2 mb-2 w-full">
            <span className="truncate font-normal leading-[21px] line-clamp-2 text-[14px] text-wrap">
              {item.title}
            </span>
            <span className="text-sm font-bold text-wrap">{item.price}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.string,
    link: PropTypes.string,
  }),
};

export default ProductItem;
