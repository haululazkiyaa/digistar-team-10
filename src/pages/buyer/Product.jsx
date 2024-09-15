import ProductDetail from "../../components/product/ProductDetail";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import ProductList from "../../components/product/ProductList";
import ProductOrder from "../../components/product/ProductOrder";
import StoreInfo from "../../components/store/StoreInfo";

const Product = () => {
  return (
    <div>
      <div className="container-layout px-0 sm:px-5">
        <div className="flex flex-col md:flex-row h-full w-full md:space-x-6">
          <div className="w-full h-full md:w-9/12">
            <div className="flex flex-col md:flex-row h-full w-full md:space-x-6">
              <ProductGallery />
              <ProductInfo />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <StoreInfo />
              <ProductDetail />
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
