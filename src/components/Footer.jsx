import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import bawah from "../assets/ellipse2.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1b0088] text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10 mt-[122px]">
        
        {/* Brand */}
        <div className="w-full lg:w-[278px]">
          <h3 className="font-bold text-lg mb-2">MECHA AUTO PLAN</h3>
          <p className="text-[#747B8B] text-sm md:text-[16px] font-semibold leading-relaxed">
            Solusi otomotif lengkap, cepat, dan terpercaya untuk semua kebutuhan kendaraan Anda.
          </p>
        </div>

        {/* Kontak & Alamat */}
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-[24px] w-full lg:w-auto">
          
          {/* Alamat */}
          <div className="w-full sm:w-[224px]">
            <h4 className="font-semibold mb-2">Alamat :</h4>
            <p className="text-[#747B8B] text-sm leading-relaxed">
              Jl. Otomotif Raya No. 123, Jakarta Selatan, 12345
            </p>
          </div>

          {/* Kontak */}
          <div className="w-full sm:w-[197px]">
            <h4 className="font-semibold mb-2">Kontak:</h4>
            <p className="text-[#747B8B] text-sm">P: (021) 123-4567</p>
            <p className="text-[#747B8B] text-sm">WA: +62 815-4677-3342</p>
            <p className="text-[#747B8B] text-sm">E: admin@mecha.co.id</p>
            
            {/* Sosial Media */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-gray-400">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTiktok size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Wave */}
      <img 
        src={bawah} 
        alt="bawah" 
        className="absolute top-[-5px] w-full rotate-180 pointer-events-none select-none"
      />
    </footer>
  );
};

export default Footer;