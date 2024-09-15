const ProductDetail = () => {
  return (
    <div className="mt-3 w-full px-4 md:px-0">
      <div className="border-b border-borderCard-divider w-full px-0">
        <ul className="flex flex-wrap -mb-px space-x-6 font-ubuntu">
          <li>
            <div
              className="inline-block pb-4 text-center cursor-pointer text-secondary-70 rounded-t-lg border-b-4 border-secondary-70 active font-bold"
              aria-current="page"
            >
              Deskripsi Produk
            </div>
          </li>
          <li>
            <div className="inline-block pb-4 text-center cursor-pointer text-paletteText-inactive border-b-2 border-transparent hover:border-gray-300' hover:text-gray-600 hover:border-gray-300">
              Review
            </div>
          </li>
        </ul>
      </div>
      <div className="py-4">
        <div className="space-y-3 px-0 text-paletteText-primary font-ubuntu">
          <div className="w-full">
            <p className="break-words whitespace-pre-line w-full">
              Harga per 1 pcs warna hitam/ biru{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
