const Footer = () => {
  return (
    <footer className="bg-borderCard-card text-paletteText-primaryflex flex-col items-center">
      <div className="container-layout text-center space-y-5 xl:flex xl:text-left xl:space-y-0 py-14 px-5 xl:px-0 mt-5">
        <div className="flex flex-col space-y-6 text-center md:space-y-0 md:text-left md:flex-row xl:pr-[100px] xl:space-y-0 xl:text-left">
          <div className="w-full flex flex-col space-y-5 text-center xl:text-left xl:w-fit">
            <div className="text-xl font-bold text-paletteText-primary">
              PaDi UMKM
            </div>
            <div className="text-paletteText-inactive space-y-3 whitespace-nowrap">
              <div className="cursor-pointer hover:text-secondary-70 text-sm">
                Tentang PaDi UMKM
              </div>
              <a href="/syarat-dan-ketentuan">
                <div className="cursor-pointer hover:text-secondary-70 text-sm">
                  Syarat &amp; Ketentuan
                </div>
              </a>
              <a href="/kebijakan-privasi">
                <div className="cursor-pointer hover:text-secondary-70 text-sm">
                  Kebijakan Privasi
                </div>
              </a>
              <a href="/landing-page/landing-finance">
                <div className="cursor-pointer hover:text-secondary-70 text-sm">
                  Finance
                </div>
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-5 text-center xl:text-left xl:ml-[100px] xl:w-fit !mt-0">
            <div className="text-xl font-bold text-paletteText-primary">
              Informasi
            </div>
            <div className="text-paletteText-inactive space-y-3 whitespace-nowrap">
              <div className="cursor-pointer hover:text-secondary-70 text-sm">
                FAQ (Tanya Jawab)
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-5 text-center xl:text-left xl:ml-[100px] xl:w-fit !mt-0">
            <div className="text-xl font-bold text-paletteText-primary">
              Penjual
            </div>
            <div className="text-paletteText-inactive space-y-3 whitespace-nowrap">
              <div className="cursor-pointer hover:text-secondary-70 text-sm">
                Panduan Penjual
              </div>
              <div className="cursor-pointer hover:text-secondary-70 text-sm">
                Marketplace
              </div>
              <div className="cursor-pointer hover:text-secondary-70 text-sm">
                Tender
              </div>
              <div className="cursor-pointer hover:text-secondary-70 text-sm">
                Tender
              </div>
              <div className="cursor-pointer hover:text-secondary-70 text-sm">
                Control Tower
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-full flex flex-col space-y-5 overflow-hidden">
          <div className="text-xl font-bold text-paletteText-primary">
            Hubungi Kami
          </div>
          <div className="text-paletteText-inactive space-y-2">
            <div className="text-sm">
              Gedung Telkom Divisi Digital Business &amp; Technology
            </div>
            <div className="text-sm">
              Jl. Prof. DR. Soepomo No.139, RT.13/RW.2, Tebet Barat, Tebet,
              Jakarta Selatan, Jakarta 12810, Indonesia
            </div>
            <div className="flex divide-x-[1px] divide-paletteText-inactive justify-center xl:justify-start">
              <div className="pr-4 text-sm">Senin - Jumat</div>
              <div className="flex items-center pl-4 space-x-4 text-sm">
                <div>08:00 - 17:00 WIB</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 mb-0 justify-center xl:justify-start">
              <div className="cursor-pointer">
                <a
                  className="w-full h-full"
                  href="https://www.facebook.com/PadiUMKM/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img
                    alt="Facebook icon"
                    loading="lazy"
                    width="24"
                    height="24"
                    src="/svgs/facebook-logo.svg"
                    style={{ color: "transparent" }}
                  />
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  className="w-full h-full"
                  href="https://twitter.com/PaDiUMKM"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img
                    alt="X icon"
                    loading="lazy"
                    width="24"
                    height="24"
                    src="/svgs/x-logo.svg"
                    style={{ color: "transparent" }}
                  />
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  className="w-full h-full"
                  href="https://www.instagram.com/PaDiUMKM/?__coig_restricted=1"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img
                    alt="Instagram icon"
                    loading="lazy"
                    width="24"
                    height="24"
                    src="/svgs/instagram-logo.svg"
                    style={{ color: "transparent" }}
                  />
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  className="w-full h-full"
                  href="https://www.youtube.com/channel/UCNJxGqjubc_Immhn30yk6OA"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img
                    alt="Youtube icon"
                    loading="lazy"
                    width="24"
                    height="24"
                    src="/svgs/youtube-logo.svg"
                    style={{ color: "transparent" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="text-paletteText-inactive space-y-2">
            <div className="text-sm font-semibold">
              Layanan Pengaduan Konsumen
            </div>
            <div className="text-sm font-semibold">PaDi UMKM</div>
            <div className="flex divide-x-[1px] divide-paletteText-inactive justify-center xl:justify-start">
              <div className="flex items-center space-x-1 text-sm">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-paletteText-inactive text-lg"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
                </svg>
                <div className="text-sm">cs@padiumkm.id</div>
              </div>
            </div>
          </div>
          <div className="text-paletteText-inactive space-y-2">
            <div className="text-sm font-semibold">
              Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
              Kementerian Perdagangan RI
            </div>
            <div className="flex divide-x-[1px] divide-paletteText-inactive justify-center xl:justify-start">
              <div className="flex items-center pr-4 text-sm">
                <img
                  alt="Whatsapp icon"
                  loading="lazy"
                  width="20"
                  height="20"
                  src="/svgs/whatsapp-logo.svg"
                  style={{ color: "transparent" }}
                />
                <div className="pl-1">+62 853 1111 1010</div>
              </div>
              <div className="flex items-center pl-4 space-x-1 text-sm">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-paletteText-inactive text-lg"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
                </svg>
                <div className="text-sm">contact.us@kemendag.go.id</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-layout">
        <div className="md:border-2 p-5">
          <div className="text-xl font-bold mb-6 text-center lg:text-start">
            Metode Pembayaran
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4 items-center">
            <div className="cursor-pointer flex-none w-fit items-center">
              <img
                alt="Mandiri Virtual Account"
                loading="lazy"
                width="70"
                height="70"
                src="/svgs/mandiri-logo.svg"
                className="!w-[70px] h-[22px]"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="cursor-pointer flex-none w-fit items-center">
              <img
                alt="BNI Virtual Account"
                loading="lazy"
                width="70"
                height="70"
                src="/svgs/bni-logo.svg"
                className="!w-[70px] h-[22px]"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="cursor-pointer flex-none w-fit items-center">
              <img
                alt="Bank Syariah Indonesia Virtual Account"
                loading="lazy"
                width="70"
                height="70"
                src="/svgs/bsi-logo.svg"
                className="!w-[70px] h-[22px]"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="cursor-pointer flex-none w-fit items-center">
              <img
                alt="BRI Virtual Account"
                loading="lazy"
                width="70"
                height="70"
                src="/svgs/bri-logo.svg"
                className="!w-[70px] h-[22px]"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="cursor-pointer flex-none w-fit items-center">
              <img
                alt="BTN"
                loading="lazy"
                width="70"
                height="70"
                src="/svgs/btn-logo.svg"
                className="!w-[70px] h-[22px]"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="cursor-pointer flex-none w-fit items-center">
              <img
                alt="BJB Virtual Account"
                loading="lazy"
                width="70"
                height="70"
                src="/svgs/bjb-logo.svg"
                className="!w-[70px] h-[22px]"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="cursor-pointer flex-none w-fit items-center">
              <img
                alt="Pembayaran QR"
                loading="lazy"
                width="70"
                height="70"
                src="/svgs/qris-logo.svg"
                className="!w-[70px] h-[22px]"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="cursor-pointer flex-none w-fit items-center">
              <img
                alt="DANA"
                loading="lazy"
                width="70"
                height="70"
                src="/svgs/dana-logo.svg"
                className="!w-[70px] h-[22px]"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="cursor-pointer flex-none w-fit items-center">
              <img
                alt="Link Aja WCO"
                loading="lazy"
                width="70"
                height="70"
                src="/svgs/linkaja-logo.svg"
                className="!w-[70px] h-[22px]"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="cursor-pointer flex-none w-fit items-center">
              <img
                alt="OVO"
                loading="lazy"
                width="70"
                height="70"
                src="/svgs/ovo-logo.svg"
                className="!w-[70px] h-[22px]"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="cursor-pointer flex-none w-fit items-center">
              <img
                alt="Credit Card"
                loading="lazy"
                width="70"
                height="70"
                src="/svgs/card-logo.svg"
                className="!w-[70px] h-[22px]"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="cursor-pointer flex-none w-fit items-center">
              <img
                alt="KKI"
                loading="lazy"
                width="70"
                height="70"
                src="/svgs/kki-logo.svg"
                className="!w-[70px] h-[22px]"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-layout pb-6 text-center">
        <div className="text-paletteText-inactive text-base">
          ©2022-2025 Pasar Digital UMKM Indonesia
        </div>
      </div>
    </footer>
  );
};

export default Footer;
