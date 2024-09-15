import ProductItem from "./ProductItem";
import products from "../../data/products";

const ProductList = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="container-layout lg:border lg:border-t lg:border-b-0 lg:border-x-0">
        <div className="flex justify-between pb-3 lg:py-4">
          <div className="text-lg lg:text-[22px] font-bold">
            Koleksi Produk SEMARAK Alat Tulis Kantor
          </div>
          <a href="/collection/koleksi-produk-semarak-alat-tulis-kantor">
            <span className="text-sm lg:text-[16px] font-bold text-secondary-70">
              Lihat Semua
            </span>
          </a>
        </div>
        <div className="flex flex-row w-full h-full">
          <a
            className=" py-[2px] pb-[3px] flex-none w-[179px] h-[366px] relative mr-2 border border-[#DEE3ED] shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)] rounded-lg overflow-hidden cursor-pointer"
            href="/collection/koleksi-produk-semarak-alat-tulis-kantor"
            style={{ backgroundColor: "rgb(245, 240, 219)" }}
          >
            <img
              alt="Image section banner"
              decoding="async"
              data-nimg="fill"
              sizes="100vw"
              src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fproduct-collection%2Fimage_section_banner%2F27082024%2Fkoleksi-produk-semarak-alat-tulis-kantor%2F184cd3feb448160c4006e091892e56.png&w=3840&q=50"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                objectFit: "contain",
                color: "transparent",
              }}
            />
          </a>
          <div className="relative flex-1 w-full md:w-[994px]">
            <div
              className="slick-slider slider-website z-[1] slider-custom-height h-full  slick-initialized"
              dir="ltr"
            >
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    width: "4980px",
                    opacity: "1",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  {products.map((product, index) => (
                    <ProductItem key={index + product.title} item={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
