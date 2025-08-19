// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // pakai icon dari lucide-react

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-primary w-full fixed top-0 z-50">
//       <div className="container mx-auto flex text-white justify-between items-center lg:py-4 lg:px-6 py-3 px-4">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold">ACELERA</h1>

//         {/* Menu Desktop */}
//         <div className="hidden lg:flex space-x-6 text-sm font-medium">
//           <Link to="/" className="hover:text-gray-200">Home</Link>
//           <Link to="/service-24-jam" className="hover:text-gray-200">Service</Link>
//           <Link to="/jasa-towing" className="hover:text-gray-200">Towing</Link>
//           <Link to="/inspeksi-mobil" className="hover:text-gray-200">Inspeksi</Link>
//         </div>

//         {/* Button Desktop */}
//         <button className="hidden lg:block bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
//           Contact Us
//         </button>

//         {/* Hamburger Mobile */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden focus:outline-none"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Dropdown Mobile */}
//       {isOpen && (
//         <div className="container mx-auto lg:hidden bg-primary text-white px-6 py-4 space-y-4 shadow-lg">
//           <Link to="/" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link to="/service-24-jam" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Service</Link>
//           <Link to="/jasa-towing" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Towing</Link>
//           <Link to="/inspeksi-mobil" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Inspeksi</Link>

//           <button className="w-full bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
//             Contact Us
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scroll ke bawah → sembunyikan navbar
      } else {
        setShowNavbar(true); // Scroll ke atas → tampilkan navbar
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-primary w-full fixed top-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex text-white justify-between items-center lg:py-4 lg:px-6 py-3 px-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MECHA AUTO PLAN</h1>

        {/* Menu Desktop */}
        <div className="hidden lg:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/service-24-jam" className="hover:text-gray-200">Service</Link>
          <Link to="/jasa-towing" className="hover:text-gray-200">Towing</Link>
          <Link to="/inspeksi-mobil" className="hover:text-gray-200">Inspeksi</Link>
        </div>

        {/* Button Desktop */}
        <button className="hidden lg:block bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
          Contact Us
        </button>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div className="container mx-auto lg:hidden bg-primary text-white px-6 py-4 space-y-4 shadow-lg">
          <Link to="/" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/service-24-jam" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Service</Link>
          <Link to="/jasa-towing" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Towing</Link>
          <Link to="/inspeksi-mobil" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Inspeksi</Link>

          <button className="w-full bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
