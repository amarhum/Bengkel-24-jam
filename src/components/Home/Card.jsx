import obeng from "../../assets/obeng.svg";
import truk from "../../assets/truk.svg";
import kartu from "../../assets/kartu.svg";

const Card = () => {
  const data = [
    {
      title: "Service 24 jam",
      desc: "Perawatan ahli dengan teknologi modern untuk mengembalikan performa maksimal mobil Anda lebih cepat.",
      img: obeng,
    },
    {
      title: "Towing 24 jam",
      desc: "Tim siaga 24/7 siap menjangkau Anda dengan cepat dan aman di segala situasi darurat di jalan.",
      img: truk,
    },
    {
      title: "Inspeksi",
      desc: "Pemeriksaan detail 300+ titik. Dapatkan laporan digital akurat untuk membeli mobil bekas dengan percaya diri.",
      img: kartu,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Bagian Layanan Unggulan
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Layanan Terpadu untuk Setiap Kebutuhan Kendaraan Anda
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-[#3500CC] hover:shadow-lg transition"
          >
            <div className="flex flex-col items-left mb-4">
              <img src={item.img} alt={item.title} className="w-10 h-10 mr-3" />
              <h3 className="text-lg font-semibold mt-[14px]">{item.title}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;