import truk from "../../assets/truk.svg";

const Card = () => {
    const data = [
        {
            title: "Eksterior & Bodi",
            desc: "truk kondisi cat, dempul, karat, bekas tabrakan, dan kualitas setiap panel bodi.",
            img: truk,
        },
        {
            title: "Interior & Fitur",
            desc: "Pemeriksaan detail pada jok, dashboard, sistem audio, fungsi AC, dan semua fitur elektronik di dalam kabin.",
            img: truk,
        },
        {
            title: "Mesin & Ruang Mesin",
            desc: "Inspeksi mendalam pada kondisi mesin, potensi kebocoran oli, sistem pendingin, aki, dan komponen vital lainnya.",
            img: truk,
        },
        {
            title: "Transmisi (Matic & Manual)",
            desc: "Pengujian performa transmisi, kehalusan perpindahan gigi, dan deteksi suara atau getaran abnormal.",
            img: truk,
        },
        {
            title: "Kaki-kaki & Pengereman",
            desc: "Pengecekan kondisi suspensi, ban, velg, serta performa dan keamanan sistem pengereman.",
            img: truk,
        },
        {
            title: "Sistem Elektronik",
            desc: "Scanning komputer (OBD-II) untuk mendeteksi/klasifikasi kesalahan tersembunyi pada ECU dan sensor penting.",
            img: truk,
        },
    ];

    return (
        <section className="container mx-auto px-4 py-16">
            {/* Judul */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Apa Saja yang Kami Periksa?
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                Tim ahli kami memeriksa 300+ titik vital secara sistematis untuk memastikan tidak ada yang terlewat. Semua ketidakpastian Anda akan kami jawab.
            </p>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white flex flex-col items-center text-center"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-10 h-10 mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2 text-indigo-700">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Card;