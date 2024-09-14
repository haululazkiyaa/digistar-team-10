import MainNavigation from "./MainNavigation";
import TopNavigation from "./TopNavigation";

const Header = () => {
  return (
    <header className="sticky top-0 z-40">
      <TopNavigation />
      <MainNavigation />
    </header>
  );
};

export default Header;
