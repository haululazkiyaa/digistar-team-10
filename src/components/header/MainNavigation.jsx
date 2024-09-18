import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const MainNavigation = () => {
  const { isLogin } = useContext(AuthContext);
  return (
    <div className="w-full z-40 flex-col flex bg-white border-b-2">
      <div className="w-full flex md:hidden items-start justify-start transition duration-500 ease-in-out -translate-x-full bg-white flex-col absolute inset-0 md:py-0 z-[1000] h-screen">
        <div className="flex justify-between md:justify-end w-full p-4">
          <div className="text-sm self-center text-[#6b7280] cursor-pointer">
            Tutup
          </div>
        </div>
        <div className="flex justify-between flex-col p-4 w-full h-full">
          <div>
            <a href="/login">
              <button className="py-2 px-4 rounded-lg border-2 border-[#0092ac] text-[#0092ac] text-lg font-semibold mb-4 w-full">
                Masuk
              </button>
            </a>
            <a href="/register-as">
              <button className="py-2 px-4 rounded-lg border-2 border-[#0092ac] text-white bg-[#0092ac] text-lg font-semibold mb-4 w-full">
                Daftar
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col sm:flex-row justify-around bg-white py-0 z-30 px-5 w-full h-[60px] md:h-[80px] ">
        <div className="flex items-center justify-between w-full h-full mt-3 sm:mt-0 md:mt-0 lg:mt-0">
          <div className="relative block md:hidden mr-3">
            {/* <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              color="#444B55"
              className="cursor-pointer"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              style="color: rgb(68, 75, 85);"
            >
              <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
            </svg> */}
          </div>
          <div className="flex-none items-center justify-center h-full w-[100px] max-w-[100px] md:w-[120px] md:max-w-[120px] pr-7">
            <a href="/">
              <span className="flex items-center justify-center cursor-pointer w-full h-full">
                <img
                  src="/svgs/logo.svg"
                  alt="padiUMKM"
                  className="w-[80.18px] h-[44.34px] min-w-max md:w-20 md:h-10 lg:w-[98px] lg:h-[55px]"
                />
              </span>
            </a>
          </div>
          <nav className="group hidden md:flex items-center justify-center h-full">
            <div className="menu-hover  flex items-center justify-start w-[90px] lg:w-[110px]">
              <div className="flex items-center justify-start h-full lg:mr-3">
                <img
                  src="/svgs/category.svg"
                  alt="category"
                  className="!w-[16px] !h-[16px] items-center flex mr-2"
                />
                <p className="flex items-center text-sm font-medium text-[#444B55] py-2 cursor-pointer">
                  Kategori
                </p>
              </div>
              <div
                className="invisible overflow-hidden w-full origin-top-right absolute bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cursor-default z-50 top-[115px] left-0  group-hover:visible"
                style={{ zIndex: 1 }}
              >
                <div role="none">
                  <div className="flex h-[465px] w-full lg:pl-[50px]">
                    <div className="flex-none w-[310px] border-r md:w-[300px]">
                      <div className="h-[45px] flex align-middle justify-between border-b bg-whiite px-5 py-3 w-full">
                        <div className="text-[12px] text-[#8C9197]">
                          Kategori Produk &amp; Jasa
                        </div>
                        <div>
                          <a href="/c">
                            <span className="block text-xs text-cyan-600 m-[2px]">
                              Lihat Semua
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="max-h-[420px] py-3 overflow-y-scroll">
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/bahan-kimia">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Bahan Kimia
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/buku">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Buku
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/dapur">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Dapur
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/elektronik">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Elektronik
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/fashion">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Fashion
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/fashion-anak-and-bayi">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Fashion Anak &amp; Bayi
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/fashion-muslim">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Fashion Muslim
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/fashion-pria">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Fashion Pria
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/fashion-wanita">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Fashion Wanita
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/film-and-musik">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Film &amp; Musik
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/gaming">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Gaming
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/handphone-and-tablet">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Handphone &amp; Tablet
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/ibu-and-bayi">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Ibu &amp; Bayi
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/jasa-advertising">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Jasa Advertising
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/jasa-ekspedisi-and-pengepakan">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Jasa Ekspedisi &amp; Pengepakan
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/jasa-event-organizer">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Jasa Event Organizer
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/jasa-konstruksi-and-renovasi">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Jasa Konstruksi &amp; Renovasi
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/jasa-mandor-and-tenaga-kerja-lainnya">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Jasa Mandor &amp; Tenaga Kerja Lainnya
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/jasa-perawatan-elektronik-and-it">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Jasa Perawatan Elektronik &amp; IT
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/jasa-perawatan-kendaraan">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Jasa Perawatan Kendaraan
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/jasa-percetakan-and-media">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Jasa Percetakan &amp; Media
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/jasa-travel-and-akomodasi">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Jasa Travel &amp; Akomodasi
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/kamera">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Kamera
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/kecantikan">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Kecantikan
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/kesehatan">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Kesehatan
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/komputer-and-laptop">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Komputer &amp; Laptop
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/konveksi-and-laundry">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Konveksi &amp; Laundry
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/mainan-and-hobi">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Mainan &amp; Hobi
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/makanan-and-minuman">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Makanan &amp; Minuman
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/office-and-stationery">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Office &amp; Stationery
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/olahraga">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Olahraga
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/otomotif">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Otomotif
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/pendidikan-dan-pelatihan">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Pendidikan dan Pelatihan
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/pengadaan-kendaraan">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Pengadaan Kendaraan
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/pengadaan-peralatan-mesin">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Pengadaan Peralatan-Mesin
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/perawatan-hewan">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Perawatan Hewan
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/perawatan-tubuh">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Perawatan Tubuh
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/perlengkapan-pesta-and-craft">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Perlengkapan Pesta &amp; Craft
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/pertanian-and-peternakan">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Pertanian &amp; Peternakan
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/pertukangan">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Pertukangan
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/properti">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Properti
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/rumah-tangga">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Rumah Tangga
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/sewa-gedung">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Sewa Gedung
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/sewa-kendaraan">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Sewa Kendaraan
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/sewa-peralatan-mesin">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Sewa Peralatan-Mesin
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/souvenir-and-merchandise">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Souvenir &amp; Merchandise
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/tour-and-travel">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Tour &amp; Travel
                            </span>
                          </a>
                        </div>
                        <div className="font-medium text-[#444B55] hover:bg-[#E6F4F7] mx-3 cursor-pointer rounded-lg whitespace-nowrap">
                          <a href="/c/wedding">
                            <span className=" whitespace-nowrap truncate rounded-lg block p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                              Wedding
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex-1 block overflow-y-scroll">
                      <h5 className="h-[45px] px-[26px] pt-[10px] font-medium capitalize text-gray-800">
                        Fashion
                      </h5>
                      <div className="h-[420px] px-[20px] pb-[20px] overflow-y-auto">
                        <div className="flex flex-wrap justify-start gap-y-0">
                          <div className="w-1/2 lg:w-1/4">
                            <a href="/c/fashion/seragam-kerja">
                              <span className="py-2 block font-[400] whitespace-nowrap truncate cursor-pointer rounded-lg p-2 text-sm hover:bg-[#E6F4F7] hover:text-[#009EA9] text-gray-600">
                                Seragam Kerja
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="relative items-center w-full h-10 text-paletteText-primary px-3 leading-tight hidden sm:flex border-2 rounded-[8px]">
            <div className="w-full h-full ">
              <input
                className="w-full h-full focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm"
                placeholder="Cari produk, jasa, atau vendor"
                value=""
                onChange={() => {}}
              />
            </div>
            <div className="flex items-center justify-center right-0 pl-2">
              <img src="/svgs/ic-search.svg" alt="Search Icon" />
            </div>
          </div>
          <div className="h-full pl-5 flex items-center justify-center"></div>
        </div>
        {isLogin && (
          <>
            <div className="h-full pl-5 flex items-center justify-center">
              <div className="hidden md:flex pr-3">
                <button
                  className="
        text-[#009EA9]  border-[#009EA9] border-solid border text-[12px] flex justify-center gap-2 whitespace-nowrap items-center w-full px-4 py-2.5 rounded-lg
      "
                >
                  <div className="w-4 h-4">
                    <img
                      alt="icon button"
                      width="16"
                      height="16"
                      src="/svgs/ic-pending-payment.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <p className="font-medium">Menunggu Pembayaran</p>
                  <div
                    className="
            bg-[#EE3124] text-white text-[12px] flex items-center justify-center px-1.5 rounded-full
          "
                  >
                    26
                  </div>
                </button>
              </div>
              <a href="/notification">
                <div className="relative flex items-center justify-center cursor-pointer h-full w-full text-paletteText-inactive min-w-[60px]">
                  <div className="flex items-center justify-center hover:bg-[#F3F5FC] hover:rounded-md py-[5px] px-[6px] w-[40px] h-[40px]">
                    <img
                      src="/svgs/notification.svg"
                      alt="notification"
                      className="w-[38px] h-[38px]"
                    />
                  </div>
                  <div className="relative h-full">
                    <div
                      className="overflow-hidden font-ubuntu hidden right-[-20vw] md:-right-40 origin-top-right absolute mt-2 rounded-lg shadow-lg bg-white focus:outline-none cursor-default z-50 w-[70vw] overflow-y-auto bg-white md:w-[412px] !mt-[0] top-[20px] md:top-[20px]"
                      style={{ zIndex: 1 }}
                    >
                      <div className="py-0" role="none">
                        <div>
                          <div className="flex items-center px-[16px] pt-6 pb-4 border-b border-b-inherit">
                            <span className="text-[18px] font-semibold text-[#444B55]">
                              Notifikasi
                            </span>
                          </div>
                          <div className="h-fit overflow-y-auto">
                            <div className="">
                              <div className="p-[16px] space-y-1 bg-[#E6F4F7] hover:bg-[#DDE1EC] cursor-pointer">
                                <div className="flex space-x-1 items-center">
                                  <img
                                    src="/_next/static/media/money.01e6be18.svg"
                                    alt="card-send"
                                    className="w-4 h-4"
                                  />
                                  <span className="text-[12px] font-normal text-[#686E76]">
                                    15:45 WIB
                                  </span>
                                </div>
                                <div>
                                  <span className="text-[14px] font-bold capitalize">
                                    Pembayaran berhasil
                                  </span>
                                </div>
                                <div>
                                  <span className="text-[14px] font-normal text-[#444B55] break-words">
                                    Hore, pembayaranmu berhasil! Pesananmu akan
                                    segera diproses oleh penjual, cek status
                                    pesananmu disini.
                                  </span>
                                </div>
                              </div>
                              <div className="p-[16px] space-y-1 bg-[#E6F4F7] hover:bg-[#DDE1EC] cursor-pointer">
                                <div className="flex space-x-1 items-center">
                                  <img
                                    src="/_next/static/media/money.01e6be18.svg"
                                    alt="card-send"
                                    className="w-4 h-4"
                                  />
                                  <span className="text-[12px] font-normal text-[#686E76]">
                                    15:45 WIB
                                  </span>
                                </div>
                                <div>
                                  <span className="text-[14px] font-bold capitalize">
                                    Pesananmu menunggu pembayaran
                                  </span>
                                </div>
                                <div>
                                  <span className="text-[14px] font-normal text-[#444B55] break-words">
                                    Pesananmu berhasil dibuat, silahkan
                                    menyelesaikan pembayaran.
                                  </span>
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                          <a href="/notification">
                            <div className="flex items-center justify-between px-[16px] py-3 border-b border-b-inherit bg-[#F6F9FC] hover:cursor-pointer">
                              <span className="text-sm font-normal text-[#009EA9]">
                                Lihat Semua Notifikasi
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/cart">
                <div className="flex items-center justify-center w-full h-full">
                  <div className="relative flex items-center justify-center cursor-pointer h-full w-full text-paletteText-inactive min-w-[60px]">
                    <div className="flex items-center justify-center hover:bg-[#F3F5FC] hover:rounded-md py-[5px] px-[6px] w-[40px] h-[40px]">
                      <img
                        src="/svgs/shoping-cart.svg"
                        alt="ShoppingCart"
                        className="w-[38px] h-[38px]"
                      />
                    </div>
                    <div className="absolute top-0 md:top-2 md:right-3 right-0 inline-flex items-center w-4 h-4 md:w-5 md:h-5 justify-center p-1 text-[10px] font-bold leading-none text-red-100 transform translate-x-1/2 translate-y-1/2 bg-[#EE3124] rounded-full">
                      6
                    </div>
                    <div className="relative h-full">
                      <div
                        className="overflow-hidden font-ubuntu hidden right-0 md:-right-40 origin-top-right absolute mt-2 rounded-lg shadow-lg bg-white focus:outline-none cursor-default z-50 w-full lg:w-[560px] !mt-[0] top-[20px]"
                        style={{ zIndex: 1 }}
                      >
                        <div className="py-0" role="none">
                          <div className="pt-6 pb-4 px-4 flex justify-between">
                            <div className="text-[18px] font-semibold text-[#444B55]">
                              Keranjang
                            </div>
                            <a href="/cart">
                              <div className="cursor-pointer font-semibold text-secondary-70 text-sm">
                                Lihat Selengkapnya
                              </div>
                            </a>
                          </div>
                          <div className="border border-[#DEE3ED]"></div>
                          <div className="flex flex-col px-4 max-h-[500px] overflow-y-auto pb-4 divide-y">
                            <a href="/cart">
                              <div className="flex space-x-2 py-4 cursor-pointer">
                                <img
                                  src="https://smb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com/product/image/17092024/667b92b5771653cf3a15cf7e/66e929cd205a689c155cb565/3ba348e8fb9cb682d3240d59fa8e22.jpg"
                                  className="flex-none w-[60px] h-[60px]  rounded"
                                />
                                <div className="flex flex-col justify-start w-full self-center">
                                  <div className="text-paletteText-primary cursor-pointer font-medium flex-nowrap text-ellipsis number-of-line-1">
                                    jasa rakit Lenovo Ideapad gaming
                                  </div>
                                  <div className="text-[#686E76] text-sm">
                                    1 Barang
                                  </div>
                                </div>
                                <div className="flex flex-col space-y-1 items-end justify-end self-center">
                                  <div className="font-bold text-paletteText-primary">
                                    Rp60.000.000
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a href="/cart">
                              <div className="flex space-x-2 py-4 cursor-pointer">
                                <img
                                  src="https://smb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com/product/image/28032024/63eb27d5f31dd022a3c339fe/65fd200053fb0b65547cd3c6/e7976cbce120466480712fd018f533.jpg"
                                  className="flex-none w-[60px] h-[60px]  rounded"
                                />
                                <div className="flex flex-col justify-start w-full self-center">
                                  <div className="text-paletteText-primary cursor-pointer font-medium flex-nowrap text-ellipsis number-of-line-1">
                                    Jasa Design Interior Rumah Minimalis Modern
                                    (2 Tahap, pph4(2) 10%)
                                  </div>
                                  <div className="text-[#686E76] text-sm">
                                    1 Barang
                                  </div>
                                </div>
                                <div className="flex flex-col space-y-1 items-end justify-end self-center">
                                  <div className="font-bold text-paletteText-primary">
                                    Rp5.000.000
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a href="/cart">
                              <div className="flex space-x-2 py-4 cursor-pointer">
                                <img
                                  src="https://smb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com/products/11992/580505/planimeter-tama.1646881824.jpeg"
                                  className="flex-none w-[60px] h-[60px]  rounded"
                                />
                                <div className="flex flex-col justify-start w-full self-center">
                                  <div className="text-paletteText-primary cursor-pointer font-medium flex-nowrap text-ellipsis number-of-line-1">
                                    Tamaya Planix 7 Digital Planimeter Second
                                  </div>
                                  <div className="text-[#686E76] text-sm">
                                    1 Barang
                                  </div>
                                </div>
                                <div className="flex flex-col space-y-1 items-end justify-end self-center">
                                  <div className="font-bold text-paletteText-primary">
                                    Rp7.620.000
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a href="/cart">
                              <div className="flex space-x-2 py-4 cursor-pointer">
                                <img
                                  src="https://smb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com/products/11992/246741/planimeter-plac.1623306555.jpeg"
                                  className="flex-none w-[60px] h-[60px]  rounded"
                                />
                                <div className="flex flex-col justify-start w-full self-center">
                                  <div className="text-paletteText-primary cursor-pointer font-medium flex-nowrap text-ellipsis number-of-line-1">
                                    Planimeter Placom KP-90 / KP-90N
                                  </div>
                                  <div className="text-[#686E76] text-sm">
                                    1 Barang
                                  </div>
                                </div>
                                <div className="flex flex-col space-y-1 items-end justify-end self-center">
                                  <div className="font-bold text-paletteText-primary">
                                    Rp13.710.000
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a href="/cart">
                              <div className="flex space-x-2 py-4 cursor-pointer">
                                <img
                                  src="https://smb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com/products/42264/506609/rawon_1.1640855650.jpeg"
                                  className="flex-none w-[60px] h-[60px]  rounded"
                                />
                                <div className="flex flex-col justify-start w-full self-center">
                                  <div className="text-paletteText-primary cursor-pointer font-medium flex-nowrap text-ellipsis number-of-line-1">
                                    NASI SEDUH INSTAN RAWON PASPANENA (Kemasan
                                    Paper Bowl)
                                  </div>
                                  <div className="text-[#686E76] text-sm">
                                    1 Barang
                                  </div>
                                </div>
                                <div className="flex flex-col space-y-1 items-end justify-end self-center">
                                  <div className="font-bold text-paletteText-primary">
                                    Rp25.000
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a href="/cart">
                              <div className="flex space-x-2 py-4 cursor-pointer">
                                <img
                                  src="https://smb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com/product/image/04042023/642b8d4f9c50519615364a58/642b8f5e60826b8f84dccc20/229f657731c9db1c38b1f0fd024f64.JPG"
                                  className="flex-none w-[60px] h-[60px]  rounded"
                                />
                                <div className="flex flex-col justify-start w-full self-center">
                                  <div className="text-paletteText-primary cursor-pointer font-medium flex-nowrap text-ellipsis number-of-line-1">
                                    Umaiboo
                                  </div>
                                  <div className="text-[#686E76] text-sm">
                                    1 Barang
                                  </div>
                                </div>
                                <div className="flex flex-col space-y-1 items-end justify-end self-center">
                                  <div className="font-bold text-paletteText-primary">
                                    Rp12.000
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <span className="relative core-chat">
                <a href="/chat">
                  <div className="flex items-center justify-center w-full h-full px-2">
                    <div className="flex items-center justify-center cursor-pointer h-full w-full text-paletteText-inactive min-w-[60px]">
                      <div className="flex items-center justify-center hover:bg-[#F3F5FC] hover:rounded-md py-[5px] px-[6px] w-[40px] h-[40px]">
                        <img
                          src="/svgs/message.svg"
                          alt="message"
                          className="text-paletteText-inactive w-[38px] h-[38px]"
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <div
                  role="alert"
                  className="flex absolute z-50 justify-end top-full right-4"
                >
                  <div
                    role="region"
                    aria-label="Notifications (F8)"
                    tabIndex="-1"
                    style={{ pointerEvents: "none" }}
                  >
                    <ol tabIndex="-1"></ol>
                  </div>
                </div>
              </span>
            </div>
            <div className="flex items-center w-full sm:w-fit h-full">
              <div className="items-center justify-center pl-4 hidden sm:flex space-x-5 h-full">
                <div className="h-full relative text-left cursor-pointer">
                  <div className="flex items-center justify-center h-full space-x-3">
                    <div className="relative w-10 h-10 overflow-hidden text-sm rounded-full">
                      <img
                        alt=""
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        sizes="100vw"
                        src="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-private-stage.oss-ap-southeast-5.aliyuncs.com%2Fprofile%2Favatar%2F26072023%2F642b79d69c50519615361f56%2F75731d163cc4984cd9497e475d0c9f.jpeg&amp;w=3840&amp;q=25"
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
                    <div className="flex flex-col ">
                      <div className="max-w-[120px] truncate text-sm text-paletteText-primary">
                        SASA
                      </div>
                      <div className="text-xs text-paletteText-inactive whitespace-nowrap">
                        Buyer Retail
                      </div>
                    </div>
                  </div>
                  <div
                    className="overflow-hidden font-ubuntu hidden right-0 origin-top-right absolute mt-2 rounded-lg shadow-lg bg-white focus:outline-none cursor-default z-50 w-[396px] !mt-[0] top-[60px] pt-4"
                    style={{ zIndex: 1 }}
                  >
                    <div className="py-0" role="none">
                      <div
                        href="#"
                        className="text-gray-700 font-ubuntu block px-4 py-2 text-sm "
                        role="menuitem"
                        id="menu-item-0"
                      >
                        <div className="flex items-center justify-between space-x-3">
                          <div>
                            <div className="relative w-8 h-8 text-sm rounded-full overflow-hidden">
                              <img
                                alt="Profile"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                sizes="100vw"
                                src="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-private-stage.oss-ap-southeast-5.aliyuncs.com%2Fprofile%2Favatar%2F26072023%2F642b79d69c50519615361f56%2F75731d163cc4984cd9497e475d0c9f.jpeg&amp;w=3840&amp;q=25"
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
                          </div>
                          <div className="flex flex-col w-full overflow-hidden false">
                            <div className="flex gap-1 items-center truncate whitespace-nowrap text-sm text-paletteText-primary">
                              SASA{" "}
                            </div>
                            <div className="text-xs text-paletteText-inactive whitespace-nowrap">
                              Buyer Retail
                            </div>
                          </div>
                          <button className="whitespace-nowrap p-1 border rounded-md text-white bg-secondary-70 hover:bg-secondary-40 text-xs font-bold">
                            Lihat Profile
                          </button>
                        </div>
                        <div className="border border-[#DEE3ED] p-2 bg-[#F6F9FC] mt-3 rounded-lg font-ubuntu">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3  cursor-pointer hover:opacity-75">
                              <img
                                alt="Icon Wallet"
                                loading="lazy"
                                width="36"
                                height="36"
                                decoding="async"
                                data-nimg="1"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwallet.48eac4b6.svg&amp;w=96&amp;q=75"
                                style={{ color: "transparent" }}
                              />
                              <div className="flex flex-col">
                                <div className="flex items-center space-x-1">
                                  <span className="text-paletteText-secondary">
                                    Saldo Refund
                                  </span>
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="help-circle"
                                    color="#686E76"
                                    height="12"
                                    width="12"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ color: "rgb(104, 110, 118)" }}
                                  >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line
                                      x1="12"
                                      y1="17"
                                      x2="12.01"
                                      y2="17"
                                    ></line>
                                  </svg>
                                </div>
                                <span className="font-bold text-secondary-70">
                                  Rp0
                                </span>
                              </div>
                            </div>
                            <button
                              className="py-2 px-3 border border-secondary-70 rounded font-medium text-secondary-70 text-sm hover:text-white hover:bg-secondary-70 disabled:bg-[#DDE1EC] disabled:border-[#DDE1EC] disabled:cursor-default disabled:opacity-100 disabled:text-[#9BA3BA]"
                              disabled=""
                            >
                              Tarik
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full divide-y-4 divide-borderCard-card px-4 py-1">
                        <div></div>
                        <div></div>
                      </div>
                      <div
                        className="text-gray-700 font-ubuntu block px-4 py-2 text-sm hover:bg-inactive cursor-pointer"
                        href="#"
                        role="menuitem"
                        id="menu-item-0"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            alt="Payment icon"
                            loading="lazy"
                            width="24"
                            height="24"
                            decoding="async"
                            data-nimg="1"
                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcredit-card.302fcbef.svg&amp;w=48&amp;q=75"
                            style={{ color: "transparent" }}
                          />
                          <div>Pembayaran</div>
                        </div>
                      </div>
                      <div
                        className="text-gray-700 font-ubuntu block px-4 py-2 text-sm hover:bg-inactive cursor-pointer"
                        href="#"
                        role="menuitem"
                        id="menu-item-0"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            alt="Transaction icon"
                            loading="lazy"
                            width="24"
                            height="24"
                            decoding="async"
                            data-nimg="1"
                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftransaction.29de8020.svg&amp;w=48&amp;q=75"
                            style={{ color: "transparent" }}
                          />
                          <div>Daftar Transaksi</div>
                        </div>
                      </div>
                      <div
                        className="text-gray-700 font-ubuntu block px-4 py-2 text-sm hover:bg-inactive cursor-pointer"
                        href="#"
                        role="menuitem"
                        id="menu-item-0"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            alt="Map icon"
                            loading="lazy"
                            width="24"
                            height="24"
                            decoding="async"
                            data-nimg="1"
                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap.9caaf192.svg&amp;w=48&amp;q=75"
                            style={{ color: "transparent" }}
                          />
                          <div>Alamat Pengiriman</div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full divide-y-4 divide-borderCard-card px-4 py-1">
                        <div></div>
                        <div></div>
                      </div>
                      <div
                        className="text-gray-700 font-ubuntu block px-4 py-2 text-sm hover:bg-inactive cursor-pointer "
                        href="#"
                        role="menuitem"
                        id="menu-item-0"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            alt="Logout icon"
                            loading="lazy"
                            width="24"
                            height="24"
                            decoding="async"
                            data-nimg="1"
                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flog-out.5649f1b6.svg&amp;w=48&amp;q=75"
                            style={{ color: "transparent" }}
                          />
                          <div>Keluar</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {!isLogin && (
          <div className="flex items-center w-full sm:w-fit h-full">
            <div className="sm:pl-6 lg:pl-0 hidden sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:mt-0 sm:space-x-5 w-full sm:w-fit">
              <a href="/login-as">
                <button className="px-6 w-full sm:w-fit h-10 primary-button-white">
                  Masuk
                </button>
              </a>
              <a href="/register-as">
                <button className="px-6 w-full sm:w-fit h-10 primary-button-blue">
                  Daftar
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="relative items-center border-b bg-white sm:hidden ">
        <div className="relative items-center h-10 text-paletteText-primary px-3 my-2 leading-tight flex mx-[22px] border-2 rounded-[8px]">
          <div className="w-full h-full ">
            <input
              className="w-full h-full focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm"
              placeholder="Cari produk, jasa, atau vendor"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="flex items-center justify-center right-0 pl-2">
            {/* <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              color="#808C92"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              style="color: rgb(128, 140, 146);"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg> */}
          </div>
          <div
            className="overflow-hidden font-ubuntu hidden right-0 origin-top-right absolute mt-2 rounded-lg shadow-lg bg-white focus:outline-none cursor-default z-50 top-10 w-[100%]"
            style={{ zIndex: 1 }}
          >
            <div className="py-1" role="none">
              <div className="w-full flex justify-center p-0 md:p-2 max-h-[300px] overflow-auto">
                <div className="w-full divide-y-2 divide-borderCard-divider font-ubuntu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
