const TopNavigation = () => {
  return (
    <div className="bg-[#f1f3f7]">
      <nav className="justify-between bg-inactive z-40 h-9 hidden md:flex">
        <div className="flex px-[22px] z-40 bg-inactive w-full">
          <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
            Mitra PaDi UMKM
          </div>
          <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
            Menjadi Penjual
          </div>
          <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
            Info
          </div>
          <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
            Pusat Bantuan
          </div>
        </div>
        <div className="flex px-[22px] z-20 bg-inactive space-x-2">
          <div className="flex items-center relative my-2">
            <img
              alt="Logo bangga buatan Indonesia"
              loading="lazy"
              width="24"
              height="24"
              src="/svgs/logo-bbi.svg"
            />
          </div>
          <div className="flex items-center relative my-2">
            <img
              alt="BUMN"
              loading="lazy"
              width="65"
              height="12"
              src="/svgs/logo-bumn.svg"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavigation;
