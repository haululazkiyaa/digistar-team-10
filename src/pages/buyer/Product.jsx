import { useEffect, useRef, useState } from "react";

import ProductDetail from "../../components/product/ProductDetail";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import ProductList from "../../components/product/ProductList";
import ProductOrder from "../../components/product/ProductOrder";
import ReviewBox from "../../components/review/ReviewBox";
import StoreInfo from "../../components/store/StoreInfo";

const Product = () => {
  const [openedTab, setOpenedTab] = useState("Deskripsi Produk");

  const handleClickedTab = (tab) => {
    setOpenedTab(tab);
  };

  useState(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab) {
      setOpenedTab(tab);
    }
  }, []);

  const tabRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab) {
      tabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <div>
      <div className="container-layout px-0 sm:px-5">
        <div className="flex flex-col md:flex-row h-full w-full md:space-x-6">
          <div className="w-full h-full md:w-9/12">
            <div className="flex flex-col md:flex-row h-full w-full md:space-x-6">
              <ProductGallery />
              <ProductInfo />
            </div>
            <div
              ref={tabRef}
              className="flex flex-col items-start justify-start w-full"
            >
              <StoreInfo />
              <div className="mt-3 w-full px-4 md:px-0">
                <div className="border-b border-borderCard-divider w-full px-0">
                  <ul className="flex flex-wrap -mb-px space-x-6 font-ubuntu">
                    <li>
                      <div
                        className={`inline-block pb-4 text-center cursor-pointer ${
                          openedTab === "Deskripsi Produk"
                            ? "text-secondary-70 rounded-t-lg border-b-4 border-secondary-70 active font-bold"
                            : "text-paletteText-inactive border-b-2 border-transparent hover:border-gray-300' hover:text-gray-600 hover:border-gray-300"
                        }`}
                        onClick={() => handleClickedTab("Deskripsi Produk")}
                      >
                        Deskripsi Produk
                      </div>
                    </li>
                    <li>
                      <div
                        className={`inline-block pb-4 text-center cursor-pointer ${
                          openedTab === "Review"
                            ? "text-secondary-70 rounded-t-lg border-b-4 border-secondary-70 active font-bold"
                            : "text-paletteText-inactive border-b-2 border-transparent hover:border-gray-300' hover:text-gray-600 hover:border-gray-300"
                        }`}
                        onClick={() => handleClickedTab("Review")}
                      >
                        Review
                      </div>
                    </li>
                  </ul>
                </div>
                {openedTab === "Deskripsi Produk" && <ProductDetail />}
                {openedTab === "Review" && <ReviewBox />}
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/12 sticky top-auto">
            <ProductOrder />
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default Product;
