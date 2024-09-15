const categories = [
  {
    url: "/promo",
    alt: "Promo",
    imageSrc:
      "https://stg.berasumkm.id/_next/static/media/promo-category.6cbd3ddf.svg",
    label: "Promo",
  },
  {
    url: "/c/makanan-and-minuman",
    alt: "Makanan & Minuman",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/e3deda0f94d08c412e8e20f80d7d92.png&w=3840&q=25",
    label: "Makanan & Minuman",
  },
  {
    url: "/c/fashion-pria",
    alt: "Fashion Pria",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com/category/903e32aa89ce7bbc6b502fd65f68a4.png&w=3840&q=25",
    label: "Fashion Pria",
  },
  {
    url: "/c/barang-lainnya",
    alt: "Barang Lainnya",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com/category/5d9fad00a17a0d6472581df7f0c77e.png&w=3840&q=25",
    label: "Barang Lainnya",
  },
  {
    url: "/c/office-and-stationery",
    alt: "Office & Stationery",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/797aa9abe890dbd1966bed68b086f8.png&w=3840&q=25",
    label: "Office & Stationery",
  },
  {
    url: "/c/elektronik",
    alt: "Elektronik",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/cd2ed590b89270e402f2d24964432b.png&w=3840&q=25",
    label: "Elektronik",
  },
  {
    url: "/c/souvenir-and-merchandise",
    alt: "Souvenir & Merchandise",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/f0adb8329a3a94cdd0a841d305daf8.png&w=3840&q=25",
    label: "Souvenir & Merchandise",
  },
  {
    url: "/c/dapur",
    alt: "Dapur",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/0a17ff8cdc7e0b481e36018f006e64.png&w=3840&q=25",
    label: "Dapur",
  },
  {
    url: "/c/kesehatan",
    alt: "Kesehatan",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/a8ad9ebc60b1b5af06594a8bff53b6.png&w=3840&q=25",
    label: "Kesehatan",
  },
  {
    url: "/c/fashion-wanita",
    alt: "Fashion Wanita",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/f890a3a8e70769e5e69b4869749d03.png&w=3840&q=25",
    label: "Fashion Wanita",
  },
  {
    url: "/c/pertanian-and-peternakan",
    alt: "Pertanian & Peternakan",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/8fcba391bbe890e8fd198b44c8cd5c.png&w=3840&q=25",
    label: "Pertanian & Peternakan",
  },
  {
    url: "/c/komputer-and-laptop",
    alt: "Komputer & Laptop",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/c13bf5832b5a74f982d89dc0305933.png&w=3840&q=25",
    label: "Komputer & Laptop",
  },
  {
    url: "/c/kecantikan",
    alt: "Kecantikan",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/1e86587a11eaba2d93e70312f434f7.png&w=3840&q=25",
    label: "Kecantikan",
  },
  {
    url: "/c/rumah-tangga",
    alt: "Rumah Tangga",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com/category/1dd12f247dc60e57cffbd5e925ae91.png&w=3840&q=25",
    label: "Rumah Tangga",
  },
  {
    url: "/c/fashion",
    alt: "Fashion",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/431be8981f75550994ef6adb10e858.png&w=3840&q=25",
    label: "Fashion",
  },
  {
    url: "/c/perawatan-tubuh",
    alt: "Perawatan Tubuh",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/7e570d6ce59f60dcbc3ab2b2866e2b.png&w=3840&q=25",
    label: "Perawatan Tubuh",
  },
  {
    url: "/c/fashion-anak-and-bayi",
    alt: "Fashion Anak & Bayi",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/b8e8ccc59587c3b57d15eb72f94039.png&w=3840&q=25",
    label: "Fashion Anak & Bayi",
  },
  {
    url: "/c/pertukangan",
    alt: "Pertukangan",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/ca45e6ffe7681979e0ae061ce1c6f0.png&w=3840&q=25",
    label: "Pertukangan",
  },
  {
    url: "/c/buku",
    alt: "Buku",
    imageSrc:
      "https://stg.berasumkm.id/_next/image?url=https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/category/17efe1871cca316baee42fedc88294.png&w=3840&q=25",
    label: "Buku",
  },
  {
    url: "/c",
    alt: "Lihat Semua",
    imageSrc:
      "https://stg.berasumkm.id/_next/static/media/all-category.b04c678f.svg",
    label: "Lihat Semua",
  },
];

export default categories;
