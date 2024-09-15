const ProductOrder = () => {
  return (
    <div className="border-[1px] p-4 mx-4 md:mx-0 rounded-lg md:sticky md:top-[140px]">
      <div className="font-medium text-paletteText-primary ">
        Atur Pembelian
      </div>
      <div className="w-full space-y-4 text-paletteText-primary mb-5">
        <div className="w-full space-y-1 text-paletteText-primary">
          <div className="text-sm text-paletteText-inactive my-2">
            Jumlah Pembelian
          </div>
          <div className="w-full">
            <div className="flex flex-col xl:flex-row space-y-2 xl:space-y-0 xl:space-x-2">
              <div className="relative flex items-center border-[1px] text-paletteText-primary rounded overflow-hidden leading-tight w-fit h-[40px] ">
                <div className="flex items-center justify-center border-r py-2 px-2 md:p-3 w-8 h-full left-0 mr-1 cursor-pointer text-paletteText-primary font-bold bg-inactive cursor-not-allowed">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="text-sm"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                  </svg>
                </div>
                <div>
                  <input
                    className="w-14 h-full font-semibold focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-center text-sm"
                    placeholder="0"
                    pattern="^[0-9]*$"
                    value="5"
                    onChange={() => {}}
                  />
                </div>
                <div className="flex items-center justify-center border-l py-2 px-2 md:p-3 w-8 h-full right-0 ml-1 cursor-pointer text-paletteText-primary font-bold false">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="text-sm"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center text-paletteText-inactive text-sm">
                <span className="text-[#444B55]">Stok:&nbsp;</span>
                <span className="text-[#444B55]">25</span>
              </div>
            </div>
            <div className="text-[#F7931E] text-sm mt-1">
              Minimal Pembelian 5
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-paletteText-inactive text-sm">Total Harga</div>
          <div className="font-bold text-2xl text-[#009EA9]">Rp33.500</div>
          <div className="border-t border-dashed flex items-center justify-between pt-2">
            <span className="font-medium leading-[18px] text-sm text-[#8C9197]">
              Rp37.185
            </span>
            <span className="font-medium leading-[18px] text-sm text-[#8C9197]">
              (inc. PPN)
            </span>
          </div>
        </div>
        <div className="border-t border-borderCard-divider w-full space-y-5 text-paletteText-primary pt-2">
          <div>
            <span className="flex items-center text-secondary-70 font-[700] space-x-1 cursor-pointer">
              <img src="/svgs/ic-edit.svg" alt="" className="w-4 h-4" />
              <div className="text-xs font-medium font-ubuntu">
                Catatan Untuk Penjual
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full space-y-3">
        <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-3 md:space-y-0 md:space-x-3">
          <div className="w-full md:w-6/12">
            <button className="h-full w-full border rounded-md border-secondary-70 text-secondary-70 font-medium py-2 px-0 hover:bg-secondary-70 hover:text-white">
              <span className="block xl:hidden text-sm">Chat Penjual</span>
              <span className="hidden xl:block">Chat Penjual</span>
            </button>
          </div>
          <div className="w-full md:w-6/12">
            <button className="flex justify-center items-center gap-x-2 w-full h-full border rounded-md font-medium py-2 px-0 whitespace-nowrap text-white bg-secondary-70 hover:bg-secondary-40 border-secondary-70">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="text-sm"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
              </svg>
              <span className="block xl:hidden text-sm">Keranjang</span>
              <span className="hidden xl:block">Keranjang</span>
            </button>
          </div>
        </div>
        <div className="h-full w-full ">
          <a href="/buat-tender-kilat?utm_source=onsite&amp;utm_medium=rfqbuttonpdp&amp;utm_campaign=create_rfq">
            <span className="flex item-center justify-center h-full w-full border rounded-md border-secondary-70 text-secondary-70 font-medium py-2 px-3 hover:bg-secondary-70 hover:text-white">
              <span className="block xl:hidden text-sm">Ajukan Permintaan</span>
              <span className="hidden xl:block">Ajukan Permintaan</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
