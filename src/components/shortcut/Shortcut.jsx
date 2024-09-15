import Category from "../category/Category";
import GlidLogistic from "../glidlogistic/GlidLogistic";
import TenderKilat from "../tenderkilat/TenderKilat";
import { useState } from "react";

const Shortcut = () => {
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
        <div
          className="bg-white px-4 pt-4 pb-0 rounded-b-2xl rounded-tr-none border-[1px] border-t-0"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.1) 0px 0px 7px 0px",
            background:
              "url('/images/rfq-bg-ellipse-left.png') left bottom / 11% no-repeat, url('/images/rfq-bg-ellipse-right.png') right bottom / 12% no-repeat, url('/images/rfq-bg-ellipse-mini-right.png') right 30% / 1.5% no-repeat, url('/images/rfq-bg-ellipse-bottom.png') 94% bottom / 10% no-repeat",
          }}
        >
          {selectedMenu === "Tender Kilat" && <TenderKilat />}
          {selectedMenu === "GLID Logistic" && <GlidLogistic />}
          {selectedMenu === "Kategori" && <Category />}
        </div>
      </div>
    </div>
  );
};

export default Shortcut;
