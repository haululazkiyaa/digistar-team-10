import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import Review from "../../components/review/Review";
import Sidebar from "../../components/sidebar/Sidebar";

const Buyer = () => {
  return (
    <div>
      <BreadCrumb />
      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row h-full relative ">
        <Sidebar />
        <Review />
      </div>
    </div>
  );
};

export default Buyer;
