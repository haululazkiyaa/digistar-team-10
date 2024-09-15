import CategoryItem from "./CategoryItem";
import categories from "../../data/categories";

const Category = () => {
  return (
    <div className="flex flex-col space-y-3 mb-4 xl:w-[1200px] xl:mx-auto">
      <div className="text-[#444B55] font-bold text-[18px] font-ubuntu">
        Kategori
      </div>
      <div className="hidden md:grid grid-cols-10 border rounded-lg bg-white flex-wrap max-w-[1168px]">
        {categories.map((item, index) => (
          <CategoryItem
            key={item.label + index}
            url={item.url}
            alt={item.alt}
            imageSrc={item.imageSrc}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
