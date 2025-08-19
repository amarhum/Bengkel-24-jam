const EmergencyContact = () => {
  // nomor darurat WA admin (pakai 62 di depan)
  const whatsappNumber = "6281546773342"; 
  const message = "Halo Admin, saya butuh bantuan darurat dari ACELERA.";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-white py-20 px-6 text-center">
      {/* Judul */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        Jangan Ragu Menghubungi Kami Kapan Saja
      </h2>

      {/* Deskripsi */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
        Simpan nomor darurat kami atau gunakan tombol di bawah ini untuk respons tercepat. <br />
        Tim ACELERA selalu siap menjadi andalan Anda di jalan.
      </p>

      {/* Tombol Hubungi Darurat */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#4A00E0] hover:bg-purple-800 text-white font-semibold px-10 py-3 rounded-full transition duration-300"
      >
        HUBUNGI DARURAT
      </a>
    </section>
  );
};

export default EmergencyContact;