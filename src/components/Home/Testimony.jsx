import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import person1 from "../../assets/person1.svg";
import person2 from "../../assets/person2.svg";
import person3 from "../../assets/person3.svg";
import star from "../../assets/star.svg";

const data = [
  {
    name: "Budi Santoso",
    desc: "Proses inspeksinya sangat detail, laporannya mudah dibaca. Saya jadi yakin beli mobilnya. Terima kasih Mecha Auto Plan!",
    img: person1,
  },
  {
    name: "Siti Aminah",
    desc: "Pelayanannya sangat ramah dan cepat. Mobil saya langsung bisa digunakan kembali tanpa kendala. Recommended banget!",
    img: person2,
  },
  {
    name: "Joko Widodo",
    desc: "Saya merasa sangat terbantu dengan towing 24 jam. Respon cepat dan aman sampai tujuan. Terima kasih banyak!",
    img: person3,
  },
  {
    name: "Andi Pratama",
    desc: "Layanan inspeksinya luar biasa detail. Saya lebih percaya diri beli mobil bekas setelah dapat laporan lengkap.",
    img: person1,
  },
  {
    name: "Maulana",
    desc: "Pengalaman servis yang sangat memuaskan. Teknisi berpengalaman dan komunikatif. Mobil jadi lebih nyaman.",
    img: person2,
  },
];

const Testimony = () => {


  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Testimoni
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Apa Kata Mereka Tentang Mecha Auto Plan?
      </p>

      <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="pb-16" // kasih space lebih buat pagination
>
  {data.map((item, index) => (
    <SwiperSlide key={index}>
      <div className=" bg-gradient-to-b from-purple-100 to-white border border-purple-300 rounded-xl pt-20 pb-6 px-6 shadow-md flex flex-col items-center text-center min-h-[320px]">
        
        {/* Foto keluar di atas */}
        <div className=" z-10">
          <img
            src={item.img}
            alt={item.name}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg z-10"
          />
        </div>

        {/* Nama */}
        <h3 className="font-semibold mt-2">{item.name}</h3>

        <div className="flex justify-center mt-2 mb-4">
          {[...Array(1)].map((_, i) => (
            <img key={i} src={star} alt="star" className="" />
          ))}
        </div>

        {/* Deskripsi */}
        <p className="text-gray-700 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
  );
};

export default Testimony;