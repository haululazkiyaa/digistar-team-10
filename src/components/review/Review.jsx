import ModalLayout from "../../layout/ModalLayout";
import ModalReview from "../modal/ModalReview";
import ReviewItem from "./ReviewItem";
import needReview from "../../data/need-review";
import useModal from "../../hooks/useModal";

const Review = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <div className=" px-4  lg:px-8  py-10 flex w-full">
      <div className="col-span-12 w-full">
        <div className="w-full space-y-6">
          <div className="text-4xl font-medium text-paletteText-primary">
            Ulasan
          </div>
          <div className="border-b border-borderCard-divider">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                <div
                  className="inline-block pb-2 px-4 text-sm text-center cursor-pointer text-secondary-70 rounded-t-lg border-b-2 border-secondary-70 active font-bold"
                  aria-current="page"
                >
                  Menunggu Diulas
                </div>
              </li>
              <li className="mr-2">
                <div
                  className="inline-block pb-2 px-4 text-sm text-center cursor-pointer font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-600 "
                  aria-current="page"
                >
                  Ulasan Saya
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <div
              className="border rounded-lg p-8 space-y-6"
              style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 5px 0px" }}
            >
              <div className="w-full flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <div className="w-full flex-2">
                  <div className="  ">
                    <div className="flex items-center space-x-1 mb-1 w-full">
                      <label className="block text-gray-700 text-sm font-bold">
                        Nomor PO
                      </label>
                    </div>
                    <div className="false">
                      <div className="hidden">
                        <span className="py-2 inline-flex items-center px-2 text-sm text-[#808C92] bg-[#F6F9FC] border rounded-l-[8px] border-r-0 border-[#e5e7eb]">
                          Rp
                        </span>
                      </div>
                      <div className="flex border rounded-[8px] w-full py-2 px-3  ">
                        <input
                          className="focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm w-full text-paletteText-primary overflow-hidden truncate "
                          id=""
                          type=""
                          placeholder="Cari nomor PO/SO/BAST"
                          value=""
                          onChange={() => {}}
                        />
                        <div className="flex items-center justify-center right-0 pl-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            color="#808C92"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(128, 140, 146)" }}
                          >
                            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-2">
                  <div className="react-datepicker-wrapper h-fit w-full">
                    <div className="react-datepicker__input-container">
                      <div className="w-full font-ubuntu select-none">
                        <div className="flex items-center space-x-1 mb-2 w-full">
                          <label className="block text-[#8C9197] text-sm font-[500]">
                            Tanggal Mulai
                          </label>
                        </div>
                        <div className="flex border border-gray-300 rounded-[8px] w-full py-2 px-3 bg-white hover:border-gray-400 h-fit ">
                          <input
                            className="undefined focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm w-full text-paletteText-primary"
                            placeholder="Pilih Tanggal Mulai"
                            value=""
                            onChange={() => {}}
                          />
                          <div className="flex items-center justify-center pl-2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 1024 1024"
                              color="#808C92"
                              height="16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "rgb(128, 140, 146)" }}
                            >
                              <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-2">
                  <div className="react-datepicker-wrapper h-fit w-full">
                    <div className="react-datepicker__input-container">
                      <div className="w-full font-ubuntu select-none">
                        <div className="flex items-center space-x-1 mb-2 w-full">
                          <label className="block text-[#8C9197] text-sm font-[500]">
                            Tanggal Akhir
                          </label>
                        </div>
                        <div className="flex border border-gray-300 rounded-[8px] w-full py-2 px-3 bg-white hover:border-gray-400 h-fit ">
                          <input
                            className="undefined focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm w-full text-paletteText-primary"
                            placeholder="Pilih Tanggal Akhir"
                            value=""
                            onChange={() => {}}
                          />
                          <div className="flex items-center justify-center pl-2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 1024 1024"
                              color="#808C92"
                              height="16"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "rgb(128, 140, 146)" }}
                            >
                              <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-1 flex items-end">
                  <button
                    disabled=""
                    className="w-full border rounded-lg px-3 py-2 text-sm text-paletteText-inactive bg-inactive"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div>
                <div className="pt-4 w-full">
                  {needReview.map((item) => (
                    <ReviewItem
                      key={item.product_title + item.id}
                      item={item}
                      handleReview={() => handleOpenModal()}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <div className="w-fit border rounded-lg overflow-hidden divide-x flex justify-between md:hidden font-ubuntu">
                  <div className="cursor-pointer">
                    <div className="py-2 px-4 text-paletteText-primary font-medium">
                      <span className="">Previous</span>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <div className="py-2 px-4 text-paletteText-primary font-medium">
                      <span className="">Next</span>
                    </div>
                  </div>
                </div>
                <div className="w-fit items-center overflow-hidden hidden space-x-2 md:flex font-ubuntu">
                  <div className="px-2 flex items-center justify-center rounded cursor-not-allowed">
                    <div className="">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        className="text-sm text-gray-300 "
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <div
                      data-testid="page-1"
                      className="px-2 text-paletteText-primary rounded text-white bg-secondary-70 hover:bg-secondary-20 "
                    >
                      1
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <div
                      data-testid="page-2"
                      className="px-2 text-paletteText-primary rounded hover:bg-slate-200"
                    >
                      2
                    </div>
                  </div>
                  <div className="px-2 flex items-center justify-center rounded cursor-pointer hover:bg-slate-200">
                    <div className="">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        className="text-sm text-paletteText-primary "
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalLayout isOpen={isOpen} closeBtnAction={() => handleCloseModal()}>
        <ModalReview />
      </ModalLayout>
    </div>
  );
};

export default Review;
