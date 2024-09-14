import PropsTypes from "prop-types";

const Banner = ({ alt, imageSrc }) => {
  return (
    <div className="overflow-hidden relative w-full lg:h-[157px] cursor-pointer flex items-center justify-center">
      <img
        alt={alt}
        loading="lazy"
        className="rounded-lg object-cover w-full h-full"
        src={imageSrc}
      />
    </div>
  );
};

Banner.propTypes = {
  alt: PropsTypes.string,
  imageSrc: PropsTypes.string,
};

export default Banner;
