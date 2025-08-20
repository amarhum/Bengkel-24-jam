import person from "../../assets/person-service.png";

const ListLayanan = () => {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      {/* Bagian Pertama: Judul */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Daftar Layanan
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Setiap masalah kendaraan membutuhkan penanganan yang spesifik. Didukung oleh tim ahli dan
          peralatan diagnostik modern, kami siap mengatasi berbagai tantangan teknis pada mobil Anda
          dengan presisi tinggi.
        </p>
      </div>

      {/* Bagian Kedua: Menu + Gambar */}
      <div className="flex flex-col lg:flex-row w-full lg:pr-16 px-r">
        {/* Kolom Kiri - Menu Layanan */}
        <div className="w-full lg:w-1/2 flex md:px-[50px] lg:px-0 px-[30px]">
          <div className="bg-[#2A00A2] text-white w-full rounded-2xl lg:rounded-r-3xl flex flex-col justify-center py-8 md:py-12 lg:py-16 px-6 md:px-10 space-y-3 md:space-y-4">
            {[
              "Servis Berkala & Ganti Oli",
              "Tune Up Mesin",
              "Servis Rem",
              "Kaki-kaki & Suspensi",
              "Sistem Kelistrikan & Aki",
              "Transmisi (Matic & Manual)",
              "Scanning & Diagnostik Komputer",
            ].map((item, i) => (
              <p
                key={i}
                className="font-bold text-lg md:text-xl lg:text-[22px] leading-[30px] cursor-pointer hover:pl-[10px] transition-all duration-500"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Kolom Kanan - Gambar & Teks */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center relative mt-10 lg:mt-0">
          {/* Teks di belakang */}
          <h1 className="absolute text-[60px] md:text-[80px] lg:text-[100px] xg:text-[140px] font-extrabold text-[#2A00A2] opacity-20 select-none text-center lg:text-right -top-6 md:-top-10 lg:-top-16">
            MECHA
          </h1>
          {/* Gambar teknisi */}
          <img
            src={person}
            alt="Service Person"
            className="relative z-10 bottom-[-90px] md:max-w-[250px] lg:max-w-[350px] xl:max-w-[400px]"
          />
        </div>
      </div>

      {/* Strip bawah ungu */}
      <div className="absolute bottom-0 w-full bg-[#2A00A2] h-[60px] md:h-[80px] lg:h-[100px]" />
    </section>
  );
};

export default ListLayanan;