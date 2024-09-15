import PropTypes from "prop-types";

const ReviewItem = ({ item, handleDetail, handleReview }) => {
  return (
    <div className="border-t p-4 w-full text-paletteText-primary">
      <div className="w-full">
        <div className="flex w-full">
          <div className="w-full space-y-4">
            <div className="grid grid-cols-4 w-full">
              <div className="font-[600]">Nomor PO</div>
              <div className="col-span-3">{item.po_number}</div>
            </div>
            <div className="grid grid-cols-4 w-full">
              <div className="font-[600]">Penjual</div>
              <div className="col-span-3">{item.store}</div>
            </div>
            <div className="grid grid-cols-4 w-full">
              <div className="font-[600]">Nama Barang</div>
              <a href="/product/anpaman-cookies/6511503e5392f600bb0e9e4b">
                <div className="flex items-center col-span-3 space-x-4 w-[296px] cursor-pointer">
                  <div>
                    <div className="relative w-24 h-24 overflow-hidden text-sm bg-gray-400 rounded-lg">
                      <img
                        alt="Anpaman cookies"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        sizes="100vw"
                        src={item.product_image}
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          objectFit: "cover",
                          color: "transparent",
                        }}
                      />
                    </div>
                  </div>
                  <span className="w-">{item.product_title}</span>
                </div>
              </a>
            </div>
            <div className="grid grid-cols-4 w-full">
              <div className="font-[600]">Waktu Pemesanan</div>
              <div className="col-span-3">{item.payment_time}</div>
            </div>
          </div>
          <span
            className="whitespace-nowrap cursor-pointer h-full font-[700] text-secondary-70"
            onClick={handleDetail}
          >
            Lihat Detail
          </span>
        </div>
        <div className="flex justify-end pt-10">
          <button
            className="border border-secondary-70 bg-secondary-70 rounded-lg h-10 px-2 text-base font-[700] text-white"
            onClick={handleReview}
          >
            Beri Ulasan
          </button>
        </div>
      </div>
    </div>
  );
};

ReviewItem.propTypes = {
  item: PropTypes.object,
  handleDetail: PropTypes.func,
  handleReview: PropTypes.func,
};

export default ReviewItem;
