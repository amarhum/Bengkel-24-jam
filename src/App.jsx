import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import JasaTowing from "./pages/towing";
import InspeksiMobil from "./pages/Inspeksi";
import Service24Jam from "./pages/Service";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jasa-towing" element={<JasaTowing />} />
          <Route path="/inspeksi-mobil" element={<InspeksiMobil />} />
          <Route path="/service-24-jam" element={<Service24Jam />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}