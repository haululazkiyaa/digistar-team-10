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

const TenderKilat = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
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
  );
};

export default TenderKilat;
