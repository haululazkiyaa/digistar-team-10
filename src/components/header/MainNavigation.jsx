const MainNavigation = () => {
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
          <nav className="hidden md:flex items-center justify-center h-full">
            <div className="flex items-center justify-start w-[90px] lg:w-[110px]">
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
                className="overflow-hidden hidden origin-top-right absolute bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cursor-default z-50 top-[115px] left-0"
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
