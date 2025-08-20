import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // cek menu aktif
  const isActive = (path) => location.pathname === path;

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
          {[
            { name: "Home", path: "/" },
            { name: "Service", path: "/service-24-jam" },
            { name: "Towing", path: "/jasa-towing" },
            { name: "Inspeksi", path: "/inspeksi-mobil" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                relative pb-1
                before:absolute before:left-0 before:bottom-0 before:h-[2px]
                before:w-0 before:bg-white before:transition-all before:duration-300
                hover:before:w-[25%]
                ${isActive(item.path) ? "before:w-[55%] font-semibold" : ""}
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Tombol Contact Desktop */}
        <button className="hidden lg:block bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
          Contact Us
        </button>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative w-8 h-8 flex items-center justify-center"
        >
          {/* Icon Menu */}
          <Menu
            size={28}
            className={`absolute transition-all duration-300 ${
              isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
            }`}
          />
          {/* Icon X */}
          <X
            size={28}
            className={`absolute transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
            }`}
          />
        </button>
      </div>

      {/* Dropdown Mobile */}
      <div
        className={`container mx-auto lg:hidden bg-primary text-white px-6 py-4 space-y-4 shadow-lg transition-all duration-500 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {[
          { name: "Home", path: "/" },
          { name: "Service", path: "/service-24-jam" },
          { name: "Towing", path: "/jasa-towing" },
          { name: "Inspeksi", path: "/inspeksi-mobil" },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={`
              block relative pb-1
              before:absolute before:left-0 before:bottom-0 before:h-[2px]
              before:w-0 before:bg-white before:transition-all before:duration-300
              hover:before:w-[5%]
              ${isActive(item.path) ? "before:w-[5%] font-semibold" : ""}
            `}
          >
            {item.name}
          </Link>
        ))}

        <button className="w-full bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
          Contact Us
        </button>
      </div>
    </nav>
  );
}