import Select from "react-select";

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

const GlidLogistic = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
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
                options={options}
                styles={customStyles}
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
                onChange={() => {}}
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
                onChange={() => {}}
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
  );
};

export default GlidLogistic;
