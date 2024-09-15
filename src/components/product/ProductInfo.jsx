const ProductInfo = () => {
  return (
    <div className="w-full">
      <div
        id="product-descriptions"
        className="grid grid-cols-1 px-4 md:p-4 lg:p-0 divide-y-2 xl:divide-y divide-[#DEE3ED] h-fit w-full"
      >
        <div className="pb-4 px-0 xl:pb-6 pt-4 md:pt-0">
          <h1 className="text-sm md:text-base font-medium text-paletteText-primary font-ubuntu mb-1 capitalize">
            BALLPOINT TRIFELO BP-316/317
          </h1>
          <div className="flex gap-x-3 items-center">
            <label className="font-bold text-base md:text-2xl text-paletteText-primary font-ubuntu">
              Rp6.700
            </label>
          </div>
          <div className="flex items-center space-x-1 mt-2">
            <div className="text-sm flex-nowrap text-paletteText-primary font-ubuntu">
              507 Terjual
            </div>
            <div className="text-borderCard-textFieldBorder">•</div>
            <div className="flex items-center justify-center bg-white border-[1px] border-borderCard-textFieldBorder p-1 px-2.5 rounded-md">
              <div className="text-xs flex-nowrap text-paletteText-primary font-ubuntu font-medium pr-1">
                5
              </div>
              <div className="flex-nowrap">
                <ul className="flex items-center gap-x-1 text-center">
                  <li>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="text-tertiary-60 text-xs"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex w-auto gap-2 mt-2">
            <div className="bg-[#E6F4F7] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] px-2 !h-[24px] !text-[12px] leading-[18px]">
              <div
                className="flex items-center justify-center space-x-1"
                style={{ color: "rgb(0, 126, 135)" }}
              >
                <span className="font-medium font-ubuntu ">PKP</span>
              </div>
            </div>
            <div className="bg-[#E6F4F7] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] px-2 !h-[24px] !text-[12px] leading-[18px]">
              <div
                className="flex items-center justify-center space-x-1"
                style={{ color: "rgb(0, 126, 135)" }}
              >
                <span className="font-medium font-ubuntu ">PPN</span>
              </div>
            </div>
            <div className="bg-[#F3F5FC] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] px-2 !h-[24px] !text-[12px] leading-[18px]">
              <div
                className="flex items-center justify-center space-x-1"
                style={{ color: "rgb(19, 33, 70)" }}
              >
                <span className="font-medium font-ubuntu ">PPh22</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-10 pt-4 pb-4 mx-0 text-paletteText-primary font-ubuntu">
          <div className="space-y-3 px-0">
            <h2 className="font-medium font-ubuntu mb-2">Informasi Produk</h2>
            <table className="border-none text-sm w-full">
              <tbody>
                <tr>
                  <td className="hidden xl:block w-[35%] py-1.5 align-top capitalize pr-4">
                    <div className="text-[#8C9197] whitespace-nowrap">
                      Kategori
                    </div>
                  </td>
                  <td className="w-full xl:w-[65%] py-1.5 align-top">
                    <div className="flex space-x-3 font-[500]">
                      Office &amp; Stationery, Alat Tulis, Lainnya
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="hidden xl:block w-[35%] py-1.5 align-top capitalize pr-4">
                    <div className="text-[#8C9197] whitespace-nowrap">
                      Brand
                    </div>
                  </td>
                  <td className="w-full xl:w-[65%] py-1.5 align-top overflow-hidden">
                    <div className="font-[500] w-[255px] max-w-[255px] break-all truncate">
                      -
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="hidden xl:block w-[35%] py-1.5 align-top capitalize pr-4">
                    <div className="text-[#8C9197] whitespace-nowrap">
                      Min Pembelian
                    </div>
                  </td>
                  <td className="w-full xl:w-[65%] py-1.5 align-top">
                    <div className="font-[500] w-[255px] max-w-[255px] break-all truncate">
                      5 pcs
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="hidden xl:block w-[35%] py-1.5 align-top capitalize pr-4">
                    <div className="text-[#8C9197] whitespace-nowrap">
                      Berat Satuan
                    </div>
                  </td>
                  <td className="w-full xl:w-[65%] py-1.5 align-top">
                    <div className="font-[500] w-[255px] max-w-[255px] break-all truncate">
                      100 gram
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="hidden xl:block w-[35%] py-1.5 align-top capitalize pr-4">
                    <div className="text-[#8C9197] whitespace-nowrap">
                      Dimensi Ukuran
                    </div>
                  </td>
                  <td className="w-full xl:w-[65%] py-1.5 align-top">
                    <div className="flex flex-col">
                      <div className="font-[500] w-[255px] max-w-[255px] break-all truncate">
                        15x3x3cm
                      </div>
                      <div className="font-[500] w-[255px] max-w-[255px] break-all truncate">
                        (Berat volume: 0.02kg)
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-[1] pt-4 px-0 pb-4 xl:pt-6">
          <div className="rounded-lg mx-0 space-y-3 lg:mx-0">
            <div className="text-paletteText-primary font-ubuntu font-medium mb-3">
              Biaya Pengiriman
            </div>
            <div className="flex items-start justify-start space-x-1 md:space-x-4">
              <img className="w-4 h-4 mt-[2px]" src="/svgs/ic-store.svg" />
              <div className="flex flex-col space-y-4 text-paletteText-primary font-ubuntu">
                <div className="flex space-x-1">
                  <div className="text-paletteText-inactive text-sm">
                    Dikirim Dari
                  </div>
                  <div className="text-paletteText-primary text-sm font-[500]">
                    Kota Tangerang Selatan
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 md:space-x-4 cursor-pointer">
              <img className="w-4 h-4" src="/svgs/ic-location.svg" />
              <div className="cursor-pointer flex items-center justify-between w-full">
                <div>
                  <span className="text-paletteText-primary font-ubuntu text-sm font-[500] capitalize">
                    Pilih Alamat
                  </span>
                </div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  width="1em"
                  height="1em"
                  className="text-paletteText-inactive hover:text-[#009EA9] font-semibold"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-start justify-start space-x-1 md:space-x-4">
              <img
                className="w-4 h-4 mt-[2px]"
                src="/svgs/ic-truck-fast.svg"
                alt="icon"
              />
              <div className="flex flex-col space-y-4 w-full">
                <div className="cursor-pointer flex items-center justify-between w-full">
                  <div>
                    <div className="flex text-paletteText-inactive text-sm font-[500] capitalize font-ubuntu">
                      Pilih Kurir &nbsp;
                    </div>
                  </div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    className="text-paletteText-inactive hover:text-[#009EA9] font-semibold"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
