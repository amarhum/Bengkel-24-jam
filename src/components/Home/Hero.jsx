import heroImg from "../../assets/hero.png";
import logoWa from "../../assets/logoWa.png";
import bawah from "../../assets/Ellipse2.svg";

const Hero = () => {
  return (
    <section className="bg-primary xl:h-[1090px] w-full pt-[149px] pb-20 relative">
      <div className="container mx-auto md:flex-row justify-between lg:py-4 lg:px-6 py-3 px-4">
        <div data-aos="fade-right" className="text-left xl:w-[657px] lg:w-[550px]">
            <div>
                <p className="underline underline-offset-8 text-[24px] leading-[34px] text-white mb-[64px]">Home</p>
                <h1 className="text-5xl font-extrabold text-white mb-[64px]">Mecha Auto Plan</h1>
                <p className="text-lg text-gray-200 leading-relaxed mb-[64px]">
                    Selamat datang di Mecha Auto Plan. Daftar atau masuk untuk booking servis,
                    melacak pengerjaan, dan melihat seluruh riwayat perawatan mobil
                    Anda dalam satu genggaman.
                </p>
            </div>
          <div className="flex items-center gap-3">
            <img src={logoWa} alt="WhatsApp" className="w-7 h-7" />
            <p className="text-lg text-white font-medium">+62 815-4677-3342</p>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img
            data-aos="fade-left"
            src={heroImg}
            alt="Hero"
            className="lg:block hidden xl:w-[550px] lg:w-[350px] md:w-[200px] sm:w-[250px] absolute lg:right-0 lg:top-[10%] right-[50%] "
          />
        </div>
      </div>
      <img src={bawah} alt="bawah" className="absolute bottom-[-5px] w-full" />
    </section>
  );
};

export default Hero;
