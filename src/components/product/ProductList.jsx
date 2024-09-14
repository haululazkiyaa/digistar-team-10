import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = [
    {
      title: "Stapler Besar BANTEX Warna White",
      price: "Rp141.900",
      imageUrl:
        "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/products/15192/532667/934307.1643004884.jpg&amp;w=3840&amp;q=15",
      link: "/product/stapler-besar-bantex-warna-white/631dc771459015fcda75753c?utm_source=onsite&utm_medium=collection_carrousel&utm_campaign=koleksi-produk-semarak-alat-tulis-kantor",
    },
    {
      title: "Ordner BANTEX Lever Arch File PVC A4 7cm Cobalt Blue",
      price: "Rp41.900",
      imageUrl:
        "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/products/15192/532169/1450v11.1642986083.jpg&amp;w=3840&amp;q=15",
      link: "/product/ordner-bantex-lever-arch-file-pvc-a4-7cm-cobalt-blue/631dc771459015fcda757370?utm_source=onsite&utm_medium=collection_carrousel&utm_campaign=koleksi-produk-semarak-alat-tulis-kantor",
    },
    {
      title: "Post It Sign Here Posi - 3M 1 Box (Isi 12 Pcs)",
      price: "Rp285.000",
      imageUrl:
        "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/products/29514/373377/sign-here.16315.1631594058.jpg&amp;w=3840&amp;q=15",
      link: "/product/post-it-sign-here-posi---3m-1-box-isi-12-pcs/631b012fcdc00cf233dac269?utm_source=onsite&utm_medium=collection_carrousel&utm_campaign=koleksi-produk-semarak-alat-tulis-kantor",
    },
    {
      title: "Pensil Faber Castle 2B",
      price: "Rp12.000",
      imageUrl:
        "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/products/33144/518863/05d39e58b95feb4.1642053101.png&amp;w=3840&amp;q=15",
      link: "/product/pensil-faber-castle-2b/631cde99ed3e9aed40d3db8c?utm_source=onsite&utm_medium=collection_carrousel&utm_campaign=koleksi-produk-semarak-alat-tulis-kantor",
    },
    {
      title: "Yoyo Id Card/Yoyo bening polos",
      price: "Rp1.696",
      imageUrl:
        "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/product/image/27022024/631a507b5b9755003d24fc34/63552936dd4cf6e277a084d2/60c5fa23abc5bafea0b1950bffc0e2.jpeg&amp;w=3840&amp;q=15",
      link: "/product/yoyo-id-cardyoyo-bening-polos/63552936dd4cf6e277a084d2?utm_source=onsite&utm_medium=collection_carrousel&utm_campaign=koleksi-produk-semarak-alat-tulis-kantor",
    },
    {
      title: "Pulpen Kenko K-1 (Hitam) /Pack",
      price: "Rp54.000",
      imageUrl:
        "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/product/image/28072024/631a53e47255a77e0e6f927c/631d5b36e68bbb0b8d664ba7/f1d1484c3f37a67f92da28806b22cd.png&amp;w=3840&amp;q=15",
      link: "/product/pulpen-kenko-k-1-hitam-pack/631d5b36e68bbb0b8d664ba7?utm_source=onsite&utm_medium=collection_carrousel&utm_campaign=koleksi-produk-semarak-alat-tulis-kantor",
    },
    {
      title: "Tinta Printer Epson 003 V399 Magenta",
      price: "Rp80.000",
      imageUrl:
        "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/product/image/11092023/631a57c07255a77e0e709ca5/64fee551e0086c7c81b6a190/6a0ec6caefb1e42c00d72ce004255f.jpg&amp;w=3840&amp;q=15",
      link: "/product/tinta-printer-epson-003-v399-magenta/64fee551e0086c7c81b6a190?utm_source=onsite&utm_medium=collection_carrousel&utm_campaign=koleksi-produk-semarak-alat-tulis-kantor",
    },
    {
      title: "Gunting Joyko SC-838 /Pcs",
      price: "Rp9.600",
      imageUrl:
        "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/product/image/28072024/631a53e47255a77e0e6f927c/631d5b39e68bbb0b8d6657db/a742864152a6eedd0551b8b411bee5.png&amp;w=3840&amp;q=15",
      link: "/product/gunting-joyko-sc-838-pcs/631d5b39e68bbb0b8d6657db?utm_source=onsite&utm_medium=collection_carrousel&utm_campaign=koleksi-produk-semarak-alat-tulis-kantor",
    },
    {
      title: "Isi Staples Joyko No.10",
      price: "Rp38.000",
      imageUrl:
        "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/product/image/08112023/631a53e47255a77e0e6f91fb/654b3e7719f88b446601270d/062468c5f420d58f7f4f536b340223.jpg&amp;w=3840&amp;q=15",
      link: "/product/isi-staples-joyko-no10--/654b3e7719f88b446601270d?utm_source=onsite&utm_medium=collection_carrousel&utm_campaign=koleksi-produk-semarak-alat-tulis-kantor",
    },
    {
      title: "LABEL BARCODE WARNA",
      price: "Rp240.000",
      imageUrl:
        "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/products/28903/278547/label-barcode-w.1625539623.png&amp;w=3840&amp;q=15",
      link: "/product/label-barcode-warna/631b2545dcfc479373b03ae3?utm_source=onsite&utm_medium=collection_carrousel&utm_campaign=koleksi-produk-semarak-alat-tulis-kantor",
    },
    {
      title: "Box Arsip Branding",
      price: "Rp25.000",
      imageUrl:
        "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/product/image/11072023/631a599b5b9755003d2882ce/64accd81429db77bab4a471b/65c038f496dbb6ab1574f0baaae134.jpg&amp;w=3840&amp;q=15",
      link: "/product/box-arsip-branding/64accd81429db77bab4a471b?utm_source=onsite&utm_medium=collection_carrousel&utm_campaign=koleksi-produk-semarak-alat-tulis-kantor",
    },
    {
      title: "PERFORATOR COMBO 30 XL",
      price: "Rp12.000",
      imageUrl:
        "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/product/image/13102022/631a5d8f8755a8a989608fdf/63478d85df8dc3cd49d0ffad/f03a0c329b1fc6c5ef9982bc6290ca.jpg&amp;w=3840&amp;q=15",
      link: "/product/perforator-combo-30-xl/63478d85df8dc3cd49d0ffad?utm_source=onsite&utm_medium=collection_carrousel&utm_campaign=koleksi-produk-semarak-alat-tulis-kantor",
    },
    {
      title: "Deli one hole punch 0114 / 205189847",
      price: "Rp29.280",
      imageUrl:
        "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/product/image/07102023/631a5da58755a8a989609e0b/6520fa4b9430349fec14c8c3/8a02b550a8dc84c66b8d2ed46e6eee.jpg&amp;w=3840&amp;q=15",
      link: "/product/deli-one-hole-punch-0114--205189847/6520fa4b9430349fec14c8c3?utm_source=onsite&utm_medium=collection_carrousel&utm_campaign=koleksi-produk-semarak-alat-tulis-kantor",
    },
  ];

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="container-layout lg:border lg:border-t lg:border-b-0 lg:border-x-0">
        <div className="flex justify-between pb-3 lg:py-4">
          <div className="text-lg lg:text-[22px] font-bold">
            Koleksi Produk SEMARAK Alat Tulis Kantor
          </div>
          <a href="/collection/koleksi-produk-semarak-alat-tulis-kantor">
            <span className="text-sm lg:text-[16px] font-bold text-secondary-70">
              Lihat Semua
            </span>
          </a>
        </div>
        <div className="relative hidden md:flex flex-row w-full h-full">
          <a
            className=" py-[2px] pb-[3px] flex-none w-[179px] h-[366px] relative mr-2 border border-[#DEE3ED] shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)] rounded-lg overflow-hidden cursor-pointer"
            href="/collection/koleksi-produk-semarak-alat-tulis-kantor"
            style={{ backgroundColor: "rgb(245, 240, 219)" }}
          >
            <img
              alt="Image section banner"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              sizes="100vw"
              src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fproduct-collection%2Fimage_section_banner%2F27082024%2Fkoleksi-produk-semarak-alat-tulis-kantor%2F184cd3feb448160c4006e091892e56.png&amp;w=3840&amp;q=50"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                objectFit: "contain",
                color: "transparent",
              }}
            />
          </a>
          <div className="flex flex-row w-full h-full">
            {products.map((product, index) => (
              <ProductItem key={index + product.title} item={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
