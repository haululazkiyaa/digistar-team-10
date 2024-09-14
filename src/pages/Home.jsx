import CategoryBox from "../components/category-box/CategoryBox";
import Hero from "../components/hero/Hero";
import ProductList from "../components/product/ProductList";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryBox />
      <ProductList />
    </div>
  );
};

export default Home;
