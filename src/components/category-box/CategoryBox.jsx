import CategoryItem from "./CategoryItem";
import Select from "react-select";
import { useState } from "react";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "white",
    borderColor: "#e2e8f0",
    borderRadius: "0.375rem",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#e2e8f0",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0.5rem 0.75rem",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#718096",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#1a202c",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#718096",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.375rem",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#EDF2F7" : "white",
    color: "#1a202c",
    "&:hover": {
      backgroundColor: "#EDF2F7",
    },
  }),
};

const customStyles2 = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "white",
    borderColor: "#e2e8f0",
    borderRadius: "0.375rem",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#e2e8f0",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0.5rem 0.75rem",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#718096",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#1a202c",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#718096",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.375rem",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#EDF2F7" : "white",
    color: "#1a202c",
    "&:hover": {
      backgroundColor: "#EDF2F7",
    },
  }),
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const options2 = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const CategoryBox = () => {
  const [selectedMenu, setSelectedMenu] = useState("Tender Kilat");

  const handleSelectedMenu = (menu) => {
    setSelectedMenu(menu);
  };
  return (
    <div className="hidden md:block">
      <div className="container-layout">
        <div className="flex felx-row">
          <div className="flex gap-0.5 flex-1">
            <div
              className={`flex flex-row items-center gap-x-2 ${
                selectedMenu === "Tender Kilat"
                  ? "bg-white cursor-default"
                  : "bg-[#F1F3F7] cursor-pointer"
              } p-4 rounded-t-2xl w-fit border-[#e6e6e6] border-[1px] border-b-0 hover:bg-white z-20`}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.2) -2px -2px 7px -4px",
              }}
              onClick={() => handleSelectedMenu("Tender Kilat")}
            >
              <div className="relative w-[15px] h-[15px]">
                <img
                  alt="Tender Kilat"
                  loading="lazy"
                  src="/images/rfq-flash-logo.png"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    objectFit: "fill",
                    color: "transparent",
                  }}
                />
              </div>
              <p className="text-[16px] text-[#686E76] font-ubuntu font-bold">
                Tender Kilat
              </p>
            </div>
            <div
              className={`flex flex-row items-center gap-x-2 ${
                selectedMenu === "GLID Logistic"
                  ? "bg-white cursor-default"
                  : "bg-[#F1F3F7] cursor-pointer"
              } p-4 rounded-t-2xl w-fit border-[#e6e6e6] border-[1px] border-b-0 hover:bg-white z-20`}
              style={{ boxShadow: "rgba(0, 0, 0, 0.2) -2px -2px 7px -4px" }}
              onClick={() => handleSelectedMenu("GLID Logistic")}
            >
              <div className="relative w-[15px] h-[15px]">
                <img
                  alt="GLID Logistic"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    objectFit: "fill",
                    color: "transparent",
                  }}
                  src="/images/glid-logo.png"
                />
              </div>
              <p className="text-[16px] text-[#686E76] font-ubuntu font-normal">
                GLID Logistic
              </p>
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-between  ${
              selectedMenu === "Kategori"
                ? "bg-white cursor-default"
                : "bg-[#F1F3F7] cursor-pointer"
            } py-4 px-[17px] rounded-t-2xl w-[139px] border-[#e6e6e6] border-[1px] border-b-0 hover:bg-white z-20`}
            style={{ boxShadow: "rgba(0, 0, 0, 0.2) -2px -2px 7px -4px" }}
            onClick={() => handleSelectedMenu("Kategori")}
          >
            <div className="relative w-[15px] h-[15px]">
              <img
                alt="Kategori"
                loading="lazy"
                src="/images/mini-category.png"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  objectFit: "fill",
                  color: "transparent",
                }}
              />
            </div>
            <p className="text-[16px] text-[#686E76] font-ubuntu font-normal">
              Kategori
            </p>
          </div>
        </div>
        {selectedMenu === "Tender Kilat" && (
          <div
            className="bg-white px-4 pt-4 pb-0 rounded-b-2xl rounded-tr-none border-[1px] border-t-0"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.1) 0px 0px 7px 0px",
              background:
                "url('/images/rfq-bg-ellipse-left.png') left bottom / 11% no-repeat, url('/images/rfq-bg-ellipse-right.png') right bottom / 12% no-repeat, url('/images/rfq-bg-ellipse-mini-right.png') right 30% / 1.5% no-repeat, url('/images/rfq-bg-ellipse-bottom.png') 94% bottom / 10% no-repeat",
            }}
          >
            <section>
              <div>
                <span className="text-[#444B55] font-bold text-[18px]">
                  Isi form Tender Kilat
                </span>
                <span className="text-[12px] text-[#686E76] font-normal pl-3">
                  Apa itu Tender Kilat?
                </span>
                <a
                  target="_self"
                  href="/tender-kilat?utm_source=onsite&amp;utm_medium=widgethomepage&amp;utm_campaign=tenderkilat"
                >
                  <span className="text-[12px] text-[#0092AC] cursor-pointer pl-1">
                    Pelajari di sini
                  </span>
                </a>
              </div>
              <div className="w-full h-[104px] flex flex-row items-start justify-start space-x-3 mt-6">
                <div className="w-1/2 h-full">
                  <label
                    htmlFor="judul-permintaan"
                    className="block text-sm font-[500] text-[#8C9197] mb-2"
                  >
                    Judul Permintaan
                  </label>
                  <input
                    className="appearance-none border border-gray-300 hover:border-gray-400 rounded-lg w-full py-2 px-3 text-[#444B55] focus:outline-none h-[48px]"
                    id="judul-permintaan"
                    type="text"
                    placeholder="Pengadaan Laptop Kantor"
                    value=""
                    onChange={() => {}}
                  />
                </div>
                <div className="w-1/2 h-full">
                  <div className="w-full h-full flex flex-row items-start justify-start space-x-3">
                    <div className="w-1/3">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-sm font-[500] text-[#8C9197] mb-2">
                          Jenis Produk
                        </p>
                        <div className="relative w-full font-ubuntu">
                          <Select
                            options={options}
                            styles={customStyles}
                            placeholder="Pilih"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3">
                      <div className="react-datepicker-wrapper h-fit w-full">
                        <div className="react-datepicker__input-container">
                          <div className="w-full font-ubuntu select-none">
                            <div className="flex items-center space-x-1 mb-2 w-full">
                              <label className="block text-[#8C9197] text-sm font-[500]">
                                Batas Waktu Tender
                              </label>
                            </div>
                            <div className="flex border border-gray-300 rounded-[8px] w-full py-2 px-3 bg-white hover:border-gray-400 h-[48px] ">
                              <div className="flex items-center justify-center pr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="17"
                                  height="17"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
                                    stroke="#0092AC"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01"
                                    stroke="#0092AC"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                              <input
                                className="undefined focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm w-full text-paletteText-primary"
                                placeholder="Pilih Tanggal"
                                value=""
                                onChange={() => {}}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3">
                      <div className="w-full h-full flex flex-col items-start justify-start pr-4">
                        <div className="block text-sm font-[500] text-[#8C9197] mb-2">
                          &nbsp;
                        </div>
                        <button className="flex items-center justify-center px-2 w-full h-[48px] rounded-lg font-[500] leading-5 text-[#9BA3BA] bg-[#DDE1EC] cursor-not-allowed ">
                          <span>Buat Permintaan</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
        {selectedMenu === "GLID Logistic" && (
          <div
            className="bg-white px-4 pt-4 pb-0 rounded-b-2xl rounded-tr-none border-[1px] border-t-0"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.1) 0px 0px 7px 0px",
              background:
                "url('/images/rfq-bg-ellipse-left.png') left bottom / 11% no-repeat, url('/images/rfq-bg-ellipse-right.png') right bottom / 12% no-repeat, url('/images/rfq-bg-ellipse-mini-right.png') right 30% / 1.5% no-repeat, url('/images/rfq-bg-ellipse-bottom.png') 94% bottom / 10% no-repeat",
            }}
          >
            <section>
              <div className="text-[#444B55] font-bold text-[18px] font-ubuntu">
                Kirim Barang dengan GLID
              </div>
              <div className="w-full h-[104px] flex flex-row items-start justify-start space-x-3 mt-6">
                <div className="w-1/2">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-sm font-[500] text-[#8C9197] mb-2">
                      Pilih Layanan
                    </p>
                    <div className="relative w-full font-ubuntu">
                      <Select
                        options={options2}
                        styles={customStyles2}
                        placeholder="Pilih Layanan"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="judul-permintaan"
                    className="block text-sm font-[500] text-[#8C9197] mb-2"
                  >
                    Nilai Barang
                  </label>
                  <div className="w-full">
                    <div className="flex h-[48px] border border-gray-300 hover:border-gray-400 rounded-lg overflow-hidden">
                      <div className="flex w-14 items-center justify-center text-sm font-[500] text-[#8C9197] bg-[#DEE3ED] p-[13px]">
                        Rp
                      </div>
                      <input
                        type="text"
                        inputMode="decimal"
                        name="price"
                        className="focus:outline-none h-full p-[12px] text-[#444B55] w-full overflow-hidden"
                        placeholder="Masukan Nilai Barang "
                        value=""
                      />
                    </div>
                    <div className="text-red-500 text-xs font-normal h-[18px] mt-1 ml-1"></div>
                  </div>
                </div>
                <div className="w-1/4">
                  <label
                    htmlFor="judul-permintaan"
                    className="block text-sm font-[500] text-[#8C9197] mb-2"
                  >
                    Berat Paket
                  </label>
                  <div className="w-full">
                    <div className="flex h-[48px] border border-gray-300 hover:border-gray-400 rounded-lg overflow-hidden">
                      <input
                        type="text"
                        inputMode="decimal"
                        name="gram"
                        className="focus:outline-none h-full p-[12px] text-[#444B55] w-full overflow-hidden"
                        placeholder="1000"
                        value=""
                      />
                      <div className="flex  w-14 items-center justify-center text-sm font-[500] text-[#8C9197] bg-[#DEE3ED] p-[13px]">
                        Gram
                      </div>
                    </div>
                    <div className="text-red-500 text-xs font-normal h-[18px] mt-1 ml-1"></div>
                  </div>
                </div>
                <div className="w-1/5">
                  <div className="w-full h-full flex flex-col items-start justify-start pr-4">
                    <div className="block text-sm font-[500] text-[#8C9197] mb-2">
                      &nbsp;
                    </div>
                    <button className="flex items-center justify-center px-2 w-full h-[48px] rounded-lg font-[500] leading-5 text-[#9BA3BA] bg-[#DDE1EC] cursor-not-allowed">
                      <span>Lengkapi Data</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
        {selectedMenu === "Kategori" && (
          <div
            className="bg-white px-4 pt-4 pb-0 rounded-b-2xl rounded-tr-none border-[1px] border-t-0"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.1) 0px 0px 7px 0px",
              background:
                "url('/images/rfq-bg-ellipse-left.png') left bottom / 11% no-repeat, url('/images/rfq-bg-ellipse-right.png') right bottom / 12% no-repeat, url('/images/rfq-bg-ellipse-mini-right.png') right 30% / 1.5% no-repeat, url('/images/rfq-bg-ellipse-bottom.png') 94% bottom / 10% no-repeat",
            }}
          >
            <div className="flex flex-col space-y-3 mb-4 xl:w-[1200px] xl:mx-auto">
              <div className="text-[#444B55] font-bold text-[18px] font-ubuntu">
                Kategori
              </div>
              <div className="hidden md:grid grid-cols-10 border rounded-lg bg-white flex-wrap max-w-[1168px]">
                <CategoryItem
                  url="/promo"
                  alt="Promo"
                  imageSrc="https://stg.berasumkm.id/_next/static/media/promo-category.6cbd3ddf.svg"
                  label="Promo"
                />
                <CategoryItem
                  url="/c/makanan-and-minuman"
                  alt="Makanan & Minuman"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2Fe3deda0f94d08c412e8e20f80d7d92.png&amp;w=3840&amp;q=25"
                  label="Makanan & Minuman"
                />
                <CategoryItem
                  url="/c/fashion-pria"
                  alt="Fashion Pria"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F903e32aa89ce7bbc6b502fd65f68a4.png&amp;w=3840&amp;q=25"
                  label="Fashion Pria"
                />
                <CategoryItem
                  url="/c/barang-lainnya"
                  alt="Barang Lainnya"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F5d9fad00a17a0d6472581df7f0c77e.png&amp;w=3840&amp;q=25"
                  label="Barang Lainnya"
                />
                <CategoryItem
                  url="/c/office-and-stationery"
                  alt="Office & Stationery"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F797aa9abe890dbd1966bed68b086f8.png&amp;w=3840&amp;q=25"
                  label="Office & Stationery"
                />
                <CategoryItem
                  url="/c/elektronik"
                  alt="Elektronik"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2Fcd2ed590b89270e402f2d24964432b.png&amp;w=3840&amp;q=25"
                  label="Elektronik"
                />
                <CategoryItem
                  url="/c/souvenir-and-merchandise"
                  alt="Souvenir & Merchandise"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2Ff0adb8329a3a94cdd0a841d305daf8.png&amp;w=3840&amp;q=25"
                  label="Souvenir & Merchandise"
                />
                <CategoryItem
                  url="/c/dapur"
                  alt="Dapur"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F0a17ff8cdc7e0b481e36018f006e64.png&amp;w=3840&amp;q=25"
                  label="Dapur"
                />
                <CategoryItem
                  url="/c/kesehatan"
                  alt="Kesehatan"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2Fa8ad9ebc60b1b5af06594a8bff53b6.png&amp;w=3840&amp;q=25"
                  label="Kesehatan"
                />

                <CategoryItem
                  url="/c/fashion-wanita"
                  alt="Fashion Wanita"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2Ff890a3a8e70769e5e69b4869749d03.png&amp;w=3840&amp;q=25"
                  label="Fashion Wanita"
                />
                <CategoryItem
                  url="/c/pertanian-and-peternakan"
                  alt="Pertanian & Peternakan"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F8fcba391bbe890e8fd198b44c8cd5c.png&amp;w=3840&amp;q=25"
                  label="Pertanian & Peternakan"
                />
                <CategoryItem
                  url="/c/komputer-and-laptop"
                  alt="Komputer & Laptop"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2Fc13bf5832b5a74f982d89dc0305933.png&amp;w=3840&amp;q=25"
                  label="Komputer & Laptop"
                />
                <CategoryItem
                  url="/c/kecantikan"
                  alt="Kecantikan"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F1e86587a11eaba2d93e70312f434f7.png&amp;w=3840&amp;q=25"
                  label="Kecantikan"
                />
                <CategoryItem
                  url="/c/rumah-tangga"
                  alt="Rumah Tangga"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F1dd12f247dc60e57cffbd5e925ae91.png&amp;w=3840&amp;q=25"
                  label="Rumah Tangga"
                />
                <CategoryItem
                  url="/c/fashion"
                  alt="Fashion"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F431be8981f75550994ef6adb10e858.png&amp;w=3840&amp;q=25"
                  label="Fashion"
                />
                <CategoryItem
                  url="/c/perawatan-tubuh"
                  alt="Perawatan Tubuh"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F7e570d6ce59f60dcbc3ab2b2866e2b.png&amp;w=3840&amp;q=25"
                  label="Perawatan Tubuh"
                />
                <CategoryItem
                  url="/c/fashion-anak-and-bayi"
                  alt="Fashion Anak & Bayi"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2Fb8e8ccc59587c3b57d15eb72f94039.png&amp;w=3840&amp;q=25"
                  label="Fashion Anak & Bayi"
                />
                <CategoryItem
                  url="/c/pertukangan"
                  alt="Pertukangan"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2Fca45e6ffe7681979e0ae061ce1c6f0.png&amp;w=3840&amp;q=25"
                  label="Pertukangan"
                />
                <CategoryItem
                  url="/c/buku"
                  alt="Buku"
                  imageSrc="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F17efe1871cca316baee42fedc88294.png&amp;w=3840&amp;q=25"
                  label="Buku"
                />
                <CategoryItem
                  url="/c"
                  alt="Lihat Semua"
                  imageSrc="https://stg.berasumkm.id/_next/static/media/all-category.b04c678f.svg"
                  label="Lihat Semua"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryBox;
