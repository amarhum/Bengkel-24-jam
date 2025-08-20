import heroImg from "../../assets/inpeksi.png";
import bawah from "../../assets/bawah5.svg";

const Hero = () => {
  return (
    <section className="bg-primary xl:h-[1090px] w-full pt-[149px] pb-20 relative">
      <div className="container mx-auto md:flex-row justify-between lg:py-4 lg:px-6 py-3 px-4">
        <div data-aos="fade-right" className="text-left xl:w-[657px] md:w-full lg:w-[550px]">
            <div>
                <p className="underline underline-offset-8 text-[24px] leading-[34px] text-white mb-[24px] md:mb-[48px] lg:mb-[64px]">inspeksi</p>
                <h1 className="lg:text-5xl xl:text-[96px] md:text-[70px] text-[32px] md:leading-[90px] font-extrabold text-white mb-[24px] md:mb-[48px] lg:mb-[64px]">Kembalikan Performa Mobil Anda Lebih Cepat </h1>
                <p className="text-lg text-gray-200 leading-relaxed mb-[24px] md:mb-[48px] lg:mb-[64px]">
                    Jaga kondisi prima dan garansi mobil Anda sesuai standar pabrikan tanpa perlu menunggu lama.
                </p>
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