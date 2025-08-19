const Booking = () => {
  // ganti dengan nomor WA admin kamu (format: 62 untuk Indonesia)
  const whatsappNumber = "6281546773342"; 
  const message = "Halo Admin, saya ingin booking servis di ACELERA.";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-white py-20 px-6 text-center">
      {/* Judul */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        Rasakan Bedanya Servis di ACELERA
      </h2>

      {/* Deskripsi */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
        Tinggalkan cara lama servis mobil. Nikmati pengalaman perawatan yang cepat, 
        transparan, dan profesional. Jadwalkan servis Anda hari ini!
      </p>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#3500CC] hover:bg-purple-800 text-white font-medium px-8 py-3 rounded-full transition duration-300"
      >
        Booking Servis Sekarang
      </a>
    </section>
  );
};

export default Booking;