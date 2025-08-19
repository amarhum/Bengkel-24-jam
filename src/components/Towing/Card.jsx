const Card = () => {
  const data = [
    {
      title: "Respons Cepat 24/7",
      desc: "Tim kami siaga non-stop, termasuk hari libur, untuk memastikan tidak ada panggilan darurat yang terlewatkan.",
    },
    {
      title: "Armada Modern & Aman",
      desc: "Kami menggunakan truk derek tipe flatbed (gendong) modern untuk menjamin kendaraan Anda diangkut tanpa risiko lecet atau kerusakan tambahan.",
    },
    {
      title: "Tim Profesional & Terlatih",
      desc: "Pengemudi kami tidak hanya ahli di jalan, tetapi juga dilatih untuk menangani situasi darurat dengan tenang dan profesional.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Judul */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Mengapa Memilih Towing Mecha Auto plan?
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Di situasi darurat, kami bukan sekadar mengangkut mobil Anda. Mecha Auto Plan adalah partner andalan yang hadir cepat dengan penanganan profesional untuk rasa aman Anda.
      </p>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#4A00E0] text-white rounded-lg p-6 flex flex-col items-center text-center"
          >
            {/* Title dengan garis bawah */}
            <h3 className="text-lg md:text-xl font-semibold pb-2 border-b border-white/50 w-full">
              {item.title}
            </h3>
            {/* Deskripsi */}
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;