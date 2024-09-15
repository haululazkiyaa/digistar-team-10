import Hero from "../components/hero/Hero";
import ProductList from "../components/product/ProductList";
import Shortcut from "../components/shortcut/Shortcut";

const Home = () => {
  return (
    <div>
      <Hero />
      <Shortcut />
      <ProductList />
    </div>
  );
};

export default Home;
