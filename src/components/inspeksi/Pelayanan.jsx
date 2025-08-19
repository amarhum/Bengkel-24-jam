const Pelayanan = () => {
  // nomor darurat WA admin (pakai 62 di depan)
  const whatsappNumber = "6281546773342"; 
 const message = "Halo Admin, saya ingin booking servis di ACELERA.";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-white py-20 px-6 text-center">
      {/* Judul */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        Jangan Pertaruhkan Investasi Anda
      </h2>

      {/* Deskripsi */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
        Satu sesi inspeksi dapat menghindarkan Anda dari kerugian jutaan hingga puluhan juta rupiah di masa depan. Buat keputusan pembelian yang cerdas dan aman bersama ACELERA
      </p>

      {/* Tombol Hubungi Darurat */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#4A00E0] hover:bg-purple-800 text-white font-semibold px-10 py-3 rounded-full transition duration-300"
      >
        Pesan Layanan Inspeksi Sekarang
      </a>
    </section>
  );
};

export default Pelayanan;