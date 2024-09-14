import PropTypes from "prop-types";

const CategoryItem = ({ url, alt, imageSrc, label }) => {
  return (
    <div className="flex flex-col items-center justify-start border-b border-r">
      <a href={url}>
        <div className="py-3 cursor-pointer space-y-2 hover:opacity-60">
          <div className="flex justify-center">
            <div className="relative h-8 sm:h-[50px] w-8 sm:w-[50px] flex-none overflow-hidden">
              <img
                alt={alt}
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                src={imageSrc}
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
          </div>
          <div className="text-center w-[50px] [@media(min-width:380px)]:w-full sm:w-full whitespace-pre-wrap text-paletteText-primary cursor-pointer number-of-line-2 text-xs leading-[18px] font-medium">
            {label}
          </div>
        </div>
      </a>
    </div>
  );
};

CategoryItem.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  imageSrc: PropTypes.string,
  label: PropTypes.string,
};

export default CategoryItem;
