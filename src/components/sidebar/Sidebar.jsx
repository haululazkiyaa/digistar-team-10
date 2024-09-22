const Sidebar = () => {
  return (
    <div className="rounded-xl lg:rounded-none xl:rounded-none shadow-[0_1px_5px_0px_rgba(0,0,0,0.12)] top-0 lg:top-[120px] xl:top-[120px] bg-white border-b m-8 lg:m-0 xl:m-0 pb-8 md:pb-8 lg:pb-0 xl:pb-0 lg:flex md:flex-shrink-0 lg:sticky xl:sticky  max-h-[650px]  lg:w-64 xl:w-64 transition duration-500 ease-in-out translate-x-0 no-scrollbar">
      <div className="flex-grow overflow-y-auto no-scrollbar ">
        <div className="flex flex-col pt-3 last:pb-3">
          <div className="flex items-center justify-between ">
            <div className="flex p-1 items-center">
              <span className="font-bold text-sm ml-2">Pengaturan</span>
            </div>
          </div>
          <div className="text-paletteText-primary space-y-2 text-xs whitespace-wrap font-[400] ">
            <a href="#">
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex gap-2">
                  <span className="w-1 false"></span>
                  <div className="flex p-1 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M18.3334 6.50817V13.4915C18.3334 15.8332 17.2584 17.4415 15.3668 18.0498C14.8168 18.2415 14.1834 18.3332 13.4918 18.3332H6.50841C5.81675 18.3332 5.18341 18.2415 4.63341 18.0498C2.74175 17.4415 1.66675 15.8332 1.66675 13.4915V6.50817C1.66675 3.47484 3.47508 1.6665 6.50841 1.6665H13.4918C16.5251 1.6665 18.3334 3.47484 18.3334 6.50817Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M15.3666 18.0499C14.8166 18.2416 14.1833 18.3333 13.4916 18.3333H6.5083C5.81663 18.3333 5.1833 18.2416 4.6333 18.0499C4.92497 15.8499 7.22497 14.1416 9.99997 14.1416C12.775 14.1416 15.075 15.8499 15.3666 18.0499Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M12.9833 9.64985C12.9833 11.2999 11.6499 12.6415 9.99994 12.6415C8.34994 12.6415 7.0166 11.2999 7.0166 9.64985C7.0166 7.99985 8.34994 6.6665 9.99994 6.6665C11.6499 6.6665 12.9833 7.99985 12.9833 9.64985Z"
                        fill="#686E76"
                      ></path>
                    </svg>
                    <span className="false text-xs  ml-2">Profil</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-3">
                  <div className="hidden">
                    <img
                      src="/svgs/ic-profile.svg"
                      className="fill-current flex-end"
                      alt="info"
                      width="20"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex gap-2">
                  <span className="w-1 false"></span>
                  <div className="flex p-1 items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M15.5666 16.4499C14.775 17.0333 13.7333 17.3333 12.4916 17.3333H5.50829C5.30829 17.3333 5.10829 17.3249 4.91663 17.2999L10.6666 11.5499L15.5666 16.4499Z"
                        fill="#686E76"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M17.3333 5.50829V12.4916C17.3333 13.7333 17.0333 14.775 16.4499 15.5666L11.5499 10.6666L17.2999 4.91663C17.3249 5.10829 17.3333 5.30829 17.3333 5.50829Z"
                        fill="#686E76"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M11.55 10.6666L16.45 15.5666C16.2083 15.9166 15.9166 16.2083 15.5666 16.45L10.6666 11.55L4.91663 17.3C4.3833 17.2666 3.89996 17.1583 3.4583 16.9916C1.67496 16.3416 0.666626 14.7583 0.666626 12.4916V5.50829C0.666626 2.47496 2.47496 0.666626 5.50829 0.666626H12.4916C14.7583 0.666626 16.3416 1.67496 16.9916 3.45829C17.1583 3.89996 17.2666 4.38329 17.3 4.91663L11.55 10.6666Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M11.5499 10.6666L16.4499 15.5666C16.2083 15.9166 15.9166 16.2083 15.5666 16.4499L10.6666 11.5499L4.91659 17.2999C4.38325 17.2666 3.89992 17.1582 3.45825 16.9916L3.78324 16.6666L16.9916 3.45825C17.1582 3.89992 17.2666 4.38325 17.2999 4.91659L11.5499 10.6666Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M9.19996 5.60828C8.88329 4.23328 7.66663 3.61661 6.59996 3.60828C5.5333 3.60828 4.31663 4.22494 3.99997 5.59994C3.64997 7.12494 4.58329 8.39994 5.42496 9.19994C5.75829 9.51661 6.17496 9.66661 6.59996 9.66661C7.02496 9.66661 7.44163 9.50828 7.77496 9.19994C8.61663 8.39994 9.54996 7.12494 9.19996 5.60828ZM6.62496 6.90828C6.16663 6.90828 5.79163 6.53328 5.79163 6.07494C5.79163 5.61661 6.15829 5.24161 6.62496 5.24161H6.6333C7.09164 5.24161 7.46664 5.61661 7.46664 6.07494C7.46664 6.53328 7.08329 6.90828 6.62496 6.90828Z"
                        fill="#686E76"
                      ></path>
                    </svg>
                    <span className="false text-xs  ml-2">
                      Alamat Pengiriman
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-3">
                  <div className="hidden">
                    <img
                      src="/svgs/ic-map.svg"
                      className="fill-current flex-end"
                      alt="info"
                      width="20"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex gap-2">
                  <span className="w-1 false"></span>
                  <div className="flex p-1 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M18.3333 7.5V13.7167C18.3333 15.625 16.7833 17.1667 14.875 17.1667H5.12496C3.21663 17.1667 1.66663 15.625 1.66663 13.7167V7.5H18.3333Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M18.3333 6.28337V7.50004H1.66663V6.28337C1.66663 4.37504 3.21663 2.83337 5.12496 2.83337H14.875C16.7833 2.83337 18.3333 4.37504 18.3333 6.28337Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M6.66667 14.375H5C4.65833 14.375 4.375 14.0917 4.375 13.75C4.375 13.4083 4.65833 13.125 5 13.125H6.66667C7.00833 13.125 7.29167 13.4083 7.29167 13.75C7.29167 14.0917 7.00833 14.375 6.66667 14.375Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M12.0833 14.375H8.75C8.40833 14.375 8.125 14.0917 8.125 13.75C8.125 13.4083 8.40833 13.125 8.75 13.125H12.0833C12.425 13.125 12.7083 13.4083 12.7083 13.75C12.7083 14.0917 12.425 14.375 12.0833 14.375Z"
                        fill="#686E76"
                      ></path>
                    </svg>
                    <span className="false text-xs  ml-2">Nomor Rekening</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-3">
                  <div className="hidden">
                    <img
                      src="/svgs/ic-card.svg"
                      className="fill-current flex-end"
                      alt="info"
                      width="20"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col pt-3 last:pb-3">
          <div className="flex items-center justify-between ">
            <div className="flex p-1 items-center">
              <span className="font-bold text-sm ml-2">Transaksi</span>
            </div>
          </div>
          <div className="text-paletteText-primary space-y-2 text-xs whitespace-wrap font-[400] ">
            <a href="#">
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex gap-2">
                  <span className="w-1 false"></span>
                  <div className="flex p-1 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.6667 5.86669V14.1334C16.6667 15.4 16.55 16.3 16.25 16.9417C16.25 16.95 16.2416 16.9667 16.2333 16.975C16.05 17.2084 15.8083 17.325 15.525 17.325C15.0833 17.325 14.55 17.0334 13.975 16.4167C13.2917 15.6834 12.2416 15.7417 11.6416 16.5417L10.8 17.6584C10.4667 18.1084 10.025 18.3334 9.58333 18.3334C9.14167 18.3334 8.69998 18.1084 8.36665 17.6584L7.51668 16.5334C6.92502 15.7417 5.88333 15.6834 5.19999 16.4084L5.19165 16.4167C4.24998 17.425 3.41668 17.575 2.93335 16.975C2.92502 16.9667 2.91667 16.95 2.91667 16.9417C2.61667 16.3 2.5 15.4 2.5 14.1334V5.86669C2.5 4.60002 2.61667 3.70002 2.91667 3.05835C2.91667 3.05002 2.91668 3.04169 2.93335 3.03335C3.40835 2.42502 4.24998 2.57502 5.19165 3.58335L5.19999 3.59169C5.88333 4.31669 6.92502 4.25835 7.51668 3.46669L8.36665 2.34169C8.69998 1.89169 9.14167 1.66669 9.58333 1.66669C10.025 1.66669 10.4667 1.89169 10.8 2.34169L11.6416 3.45835C12.2416 4.25835 13.2917 4.31669 13.975 3.58335C14.55 2.96669 15.0833 2.67502 15.525 2.67502C15.8083 2.67502 16.05 2.80002 16.2333 3.03335C16.25 3.04169 16.25 3.05002 16.25 3.05835C16.55 3.70002 16.6667 4.60002 16.6667 5.86669Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M13.3333 9.16669H6.66666C6.32499 9.16669 6.04166 8.88335 6.04166 8.54169C6.04166 8.20002 6.32499 7.91669 6.66666 7.91669H13.3333C13.675 7.91669 13.9583 8.20002 13.9583 8.54169C13.9583 8.88335 13.675 9.16669 13.3333 9.16669Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M11.6667 12.0833H6.66666C6.32499 12.0833 6.04166 11.8 6.04166 11.4583C6.04166 11.1166 6.32499 10.8333 6.66666 10.8333H11.6667C12.0083 10.8333 12.2917 11.1166 12.2917 11.4583C12.2917 11.8 12.0083 12.0833 11.6667 12.0833Z"
                        fill="#686E76"
                      ></path>
                    </svg>
                    <span className="false text-xs  ml-2">Pembayaran</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-3">
                  <div className="hidden">
                    <img
                      src="/svgs/ic-document.svg"
                      className="fill-current flex-end"
                      alt="info"
                      width="20"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex gap-2">
                  <span className="w-1 false"></span>
                  <div className="flex p-1 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3334 5.00002V7.01669C18.3334 8.33335 17.5 9.16669 16.1834 9.16669H13.3334V3.34169C13.3334 2.41669 14.0917 1.66669 15.0167 1.66669C15.925 1.67502 16.7584 2.04169 17.3584 2.64169C17.9584 3.25002 18.3334 4.08335 18.3334 5.00002Z"
                        fill="#686E76"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M1.66663 5.83335V17.5C1.66663 18.1917 2.44996 18.5834 2.99996 18.1667L4.42496 17.1C4.75829 16.85 5.22496 16.8834 5.52496 17.1834L6.90829 18.575C7.23329 18.9 7.76663 18.9 8.09163 18.575L9.49163 17.175C9.78329 16.8834 10.25 16.85 10.575 17.1L12 18.1667C12.55 18.575 13.3333 18.1834 13.3333 17.5V3.33335C13.3333 2.41669 14.0833 1.66669 15 1.66669H5.83329H4.99996C2.49996 1.66669 1.66663 3.15835 1.66663 5.00002V5.83335Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M10 8.125H5C4.65833 8.125 4.375 7.84167 4.375 7.5C4.375 7.15833 4.65833 6.875 5 6.875H10C10.3417 6.875 10.625 7.15833 10.625 7.5C10.625 7.84167 10.3417 8.125 10 8.125Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M9.375 11.4583H5.625C5.28333 11.4583 5 11.175 5 10.8333C5 10.4916 5.28333 10.2083 5.625 10.2083H9.375C9.71667 10.2083 10 10.4916 10 10.8333C10 11.175 9.71667 11.4583 9.375 11.4583Z"
                        fill="#686E76"
                      ></path>
                    </svg>
                    <span className="false text-xs  ml-2">
                      Daftar Transaksi
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-3">
                  <div className="hidden">
                    <img
                      src="/svgs/ic-history.svg"
                      className="fill-current flex-end"
                      alt="info"
                      width="20"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="reorder-walkthrough">
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex gap-2">
                  <span className="w-1 false"></span>
                  <div className="flex p-1 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M13.4917 1.6665H6.51669C3.47503 1.6665 1.66669 3.47484 1.66669 6.50817V13.4832C1.66669 16.5165 3.47502 18.3248 6.50835 18.3248H13.4833C16.5167 18.3248 18.325 16.5165 18.325 13.4832V6.50817C18.3334 3.47484 16.525 1.6665 13.4917 1.6665Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M10 5.42491C9.88334 5.42491 9.75835 5.44158 9.64168 5.44991L9.87501 5.18325C10.1 4.92491 10.075 4.52491 9.81667 4.29991C9.55834 4.07491 9.15834 4.09991 8.93334 4.35825L7.54168 5.94991C7.53334 5.95825 7.53334 5.96658 7.52501 5.97491C7.51667 5.98325 7.50834 5.98325 7.50834 5.99158C7.49167 6.01658 7.48335 6.04991 7.46668 6.08325C7.45001 6.12491 7.425 6.15825 7.41667 6.19991C7.40834 6.24158 7.40834 6.27491 7.40001 6.31658C7.40001 6.35825 7.39167 6.39158 7.39167 6.43325C7.39167 6.47491 7.40834 6.50825 7.42501 6.54991C7.43334 6.59158 7.45001 6.62491 7.46668 6.65825C7.48335 6.69158 7.51668 6.72491 7.54168 6.75825C7.56668 6.78325 7.575 6.81658 7.6 6.83325C7.60834 6.84158 7.61667 6.84158 7.625 6.84991C7.63334 6.85825 7.63334 6.86658 7.64167 6.86658L9.25834 8.04991C9.36667 8.13325 9.50001 8.16658 9.62501 8.16658C9.81668 8.16658 10.0083 8.07491 10.1333 7.90825C10.3333 7.63325 10.275 7.24158 10 7.03325L9.53334 6.69158C9.68334 6.67491 9.84167 6.65825 10 6.65825C11.95 6.65825 13.5417 8.24991 13.5417 10.1999C13.5417 12.1499 11.95 13.7416 10 13.7416C8.05001 13.7416 6.45834 12.1499 6.45834 10.1999C6.45834 9.49158 6.66668 8.81658 7.05001 8.23325C7.24168 7.94991 7.16667 7.55825 6.87501 7.36658C6.59167 7.17491 6.20001 7.24991 6.00835 7.54158C5.48335 8.33325 5.20001 9.24991 5.20001 10.1999C5.20001 12.8416 7.35001 14.9916 9.99168 14.9916C12.6333 14.9916 14.7833 12.8416 14.7833 10.1999C14.7833 7.55825 12.6417 5.42491 10 5.42491Z"
                        fill="#686E76"
                      ></path>
                    </svg>
                    <span className="false text-xs  ml-2">Beli Lagi</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-3">
                  <div className="hidden">
                    <img
                      src="/svgs/ic-rollback.svg"
                      className="fill-current flex-end"
                      alt="info"
                      width="20"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex gap-2">
                  <span className="w-1  bg-secondary-60 rounded-r-lg"></span>
                  <div className="flex p-1 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M13.4917 1.66663H6.51671C3.48338 1.66663 1.67505 3.47496 1.67505 6.50829V13.4833C1.67505 16.5166 3.48338 18.325 6.51671 18.325H13.4917C16.525 18.325 18.3334 16.5166 18.3334 13.4833V6.50829C18.3334 3.47496 16.525 1.66663 13.4917 1.66663Z"
                        fill="#009EA9"
                      ></path>
                      <path
                        d="M10.1666 14.4833C9.5833 14.4833 8.99163 14.2583 8.54997 13.8166C8.11663 13.3833 7.87497 12.8083 7.87497 12.2C7.87497 11.5917 8.11663 11.0083 8.54997 10.5833L9.72495 9.40832C9.96661 9.16665 10.3666 9.16665 10.6083 9.40832C10.8499 9.64999 10.8499 10.05 10.6083 10.2917L9.4333 11.4667C9.2333 11.6667 9.12497 11.925 9.12497 12.2C9.12497 12.475 9.2333 12.7416 9.4333 12.9333C9.84163 13.3416 10.5 13.3416 10.9083 12.9333L12.7583 11.0833C13.8166 10.025 13.8166 8.30832 12.7583 7.24999C11.7 6.19166 9.98331 6.19166 8.92498 7.24999L6.90827 9.26664C6.48327 9.69164 6.24996 10.25 6.24996 10.8417C6.24996 11.4333 6.48327 12 6.90827 12.4166C7.14994 12.6583 7.14994 13.0583 6.90827 13.3C6.66661 13.5416 6.26661 13.5416 6.02494 13.3C5.36661 12.6416 5.0083 11.7666 5.0083 10.8333C5.0083 9.89998 5.36661 9.02499 6.02494 8.36665L8.04165 6.34998C9.58331 4.80831 12.1 4.80831 13.6416 6.34998C15.1833 7.89164 15.1833 10.4083 13.6416 11.95L11.7916 13.8C11.3416 14.2583 10.7583 14.4833 10.1666 14.4833Z"
                        fill="#009EA9"
                      ></path>
                    </svg>
                    <span className="text-secondary-70 font-bold text-xs  ml-2">
                      Ulasan
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-3">
                  <div className="hidden">
                    <img
                      src="/svgs/ic-attachment.svg"
                      className="fill-current flex-end"
                      alt="info"
                      width="20"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col pt-3 last:pb-3">
          <div className="flex items-center justify-between ">
            <div className="flex p-1 items-center">
              <span className="font-bold text-sm ml-2">Chat</span>
            </div>
          </div>
          <div className="text-paletteText-primary space-y-2 text-xs whitespace-wrap font-[400] ">
            <a href="#">
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex gap-2">
                  <span className="w-1 false"></span>
                  <div className="flex p-1 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M14.9833 8.99167V12.325C14.9833 12.5417 14.975 12.75 14.95 12.95C14.7583 15.2 13.4333 16.3167 10.9916 16.3167H10.6583C10.45 16.3167 10.25 16.4167 10.125 16.5833L9.12497 17.9167C8.6833 18.5083 7.96662 18.5083 7.52496 17.9167L6.52495 16.5833C6.41661 16.4417 6.17496 16.3167 5.99163 16.3167H5.6583C2.99997 16.3167 1.66663 15.6583 1.66663 12.325V8.99167C1.66663 6.55001 2.79163 5.22501 5.0333 5.03334C5.2333 5.00834 5.44163 5 5.6583 5H10.9916C13.65 5 14.9833 6.33334 14.9833 8.99167Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M8.32503 11.6667C7.85837 11.6667 7.4917 11.2917 7.4917 10.8333C7.4917 10.375 7.8667 10 8.32503 10C8.78337 10 9.15837 10.375 9.15837 10.8333C9.15837 11.2917 8.7917 11.6667 8.32503 11.6667Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M11.2417 11.6667C10.775 11.6667 10.4083 11.2917 10.4083 10.8333C10.4083 10.375 10.7833 10 11.2417 10C11.7 10 12.075 10.375 12.075 10.8333C12.075 11.2917 11.7 11.6667 11.2417 11.6667Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M5.41671 11.6667C4.95004 11.6667 4.58337 11.2917 4.58337 10.8333C4.58337 10.375 4.95837 10 5.41671 10C5.87504 10 6.25004 10.375 6.25004 10.8333C6.25004 11.2917 5.87504 11.6667 5.41671 11.6667Z"
                        fill="#686E76"
                      ></path>
                      <path
                        d="M18.3167 5.6583V8.99163C18.3167 11.4416 17.1917 12.7583 14.95 12.95C14.975 12.75 14.9833 12.5416 14.9833 12.325V8.99163C14.9833 6.3333 13.65 4.99996 10.9917 4.99996H5.65833C5.44166 4.99996 5.23333 5.0083 5.03333 5.0333C5.22499 2.79163 6.54999 1.66663 8.99166 1.66663H14.325C16.9833 1.66663 18.3167 2.99997 18.3167 5.6583Z"
                        fill="#686E76"
                      ></path>
                    </svg>
                    <span className="false text-xs  ml-2">Kotak Pesan</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-3">
                  <div className="hidden">
                    <img
                      src="/svgs/ic-chat.svg"
                      className="fill-current flex-end"
                      alt="info"
                      width="20"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
