// import person from "../../assets/person-service.png";

// const ListLayanan = () => {
//   return (
//     <section className="bg-white py-16 relative">
//       <div className="text-center max-w-2xl mx-auto mb-12">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//           Daftar Layanan
//         </h2>
//         <p className="text-gray-600 leading-relaxed">
//           Setiap masalah kendaraan membutuhkan penanganan yang spesifik. Didukung oleh tim ahli dan peralatan diagnostik modern, kami siap mengatasi berbagai tantangan teknis pada mobil Anda dengan presisi tinggi.
//         </p>
//       </div>
//       <div className="flex items-center justify-between w-full pr-[114px]">
//         <div className="bg-[#2A00A2] text-white w-[636px] h-[564px] p-8 md:p-12 rounded-r-3xl flex flex-col justify-center space-y-4 z-10">
//           <p className="font-bold text-[24px] leading-[34px] cursor-pointer hover:pl-[10px] ease-in-out transition-all duration-500">Servis Berkala & Ganti Oli</p>
//           <p className="font-bold text-[24px] leading-[34px] cursor-pointer hover:pl-[10px] ease-in-out transition-all duration-500">Tune Up Mesin</p>
//           <p className="font-bold text-[24px] leading-[34px] cursor-pointer hover:pl-[10px] ease-in-out transition-all duration-500">Servis Rem</p>
//           <p className="font-bold text-[24px] leading-[34px] cursor-pointer hover:pl-[10px] ease-in-out transition-all duration-500">Kaki-kaki & Suspensi</p>
//           <p className="font-bold text-[24px] leading-[34px] cursor-pointer hover:pl-[10px] ease-in-out transition-all duration-500">Sistem Kelistrikan & Aki</p>
//           <p className="font-bold text-[24px] leading-[34px] cursor-pointer hover:pl-[10px] ease-in-out transition-all duration-500">Transmisi (Matic & Manual)</p>
//           <p className="font-bold text-[24px] leading-[34px] cursor-pointer hover:pl-[10px] ease-in-out transition-all duration-500">Scanning & Diagnostik Komputer</p>
//         </div>
//         <div className="relative flex w-[669px] justify-center mb-[-88px] items-center mt-8 md:mt-0">
//           <h1 className="absolute text-[80px] md:text-[120px] font-extrabold text-[#2A00A2] opacity-80 -top-6 right-6 select-none">
//             ACELERA
//           </h1>
//           <img
//             src={person}
//             alt="Service Person"
//             className="relative bottom-0 z-10 max-w-sm md:max-w-md"
//           />
//         </div>
//       </div>
//       <div className="absolute bottom-0 w-full bg-[#2A00A2] h-[100px]"></div>
//     </section>
//   );
// };

// export default ListLayanan;

import person from "../../assets/person-service.png";

const ListLayanan = () => {
  return (
    <section className="bg-white py-16 relative">
      {/* Judul */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Daftar Layanan
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Setiap masalah kendaraan membutuhkan penanganan yang spesifik. Didukung oleh tim ahli dan peralatan diagnostik modern, kami siap mengatasi berbagai tantangan teknis pada mobil Anda dengan presisi tinggi.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:pr-[114px] pr-[80px] px-4 lg:px-0">
        {/* List Layanan */}
        <div className="bg-[#2A00A2] text-white 
          w-full lg:w-[636px] 
          h-auto lg:h-[564px] 
          p-6 md:p-8 lg:p-12 
          rounded-2xl lg:rounded-r-3xl 
          flex flex-col justify-center space-y-3 md:space-y-4 z-10 mb-8 lg:mb-0">
          <p className="font-bold text-lg md:text-xl lg:text-[24px] leading-[28px] md:leading-[32px] lg:leading-[34px] cursor-pointer hover:pl-[10px] transition-all duration-500">Servis Berkala & Ganti Oli</p>
          <p className="font-bold text-lg md:text-xl lg:text-[24px] leading-[28px] md:leading-[32px] lg:leading-[34px] cursor-pointer hover:pl-[10px] transition-all duration-500">Tune Up Mesin</p>
          <p className="font-bold text-lg md:text-xl lg:text-[24px] leading-[28px] md:leading-[32px] lg:leading-[34px] cursor-pointer hover:pl-[10px] transition-all duration-500">Servis Rem</p>
          <p className="font-bold text-lg md:text-xl lg:text-[24px] leading-[28px] md:leading-[32px] lg:leading-[34px] cursor-pointer hover:pl-[10px] transition-all duration-500">Kaki-kaki & Suspensi</p>
          <p className="font-bold text-lg md:text-xl lg:text-[24px] leading-[28px] md:leading-[32px] lg:leading-[34px] cursor-pointer hover:pl-[10px] transition-all duration-500">Sistem Kelistrikan & Aki</p>
          <p className="font-bold text-lg md:text-xl lg:text-[24px] leading-[28px] md:leading-[32px] lg:leading-[34px] cursor-pointer hover:pl-[10px] transition-all duration-500">Transmisi (Matic & Manual)</p>
          <p className="font-bold text-lg md:text-xl lg:text-[24px] leading-[28px] md:leading-[32px] lg:leading-[34px] cursor-pointer hover:pl-[10px] transition-all duration-500">Scanning & Diagnostik Komputer</p>
        </div>

        <div className="relative flex w-full lg:w-[669px] justify-center items-center mt-4 md:mt-6 lg:mt-0 lg:mb-[-88px]">
          <h1 className="absolute text-[60px] md:text-[80px] lg:text-[120px] font-extrabold text-[#2A00A2] opacity-80 -top-6 right-6 select-none">
            ACELERA
          </h1>
          <img
            src={person}
            alt="Service Person"
            className="relative bottom-0 z-10 max-w-[200px] md:max-w-sm lg:max-w-md md:w-[500px]"
          />
        </div>
      </div>

      {/* Background Bawah */}
      <div className="absolute bottom-0 w-full bg-[#2A00A2] h-[60px] md:h-[80px] lg:h-[100px]"></div>
    </section>
  );
};

export default ListLayanan;