import LogoImage from "../../assets/logo.svg";

export default function CTA() {
  return (
    <section className="w-full px-6 pt-[41px] pb-[20px]">
      <div className="max-w-[1330px] mx-auto">
        <div className="bg-card-bg rounded-card px-[75px] pt-[124px] mb-[21px] flex flex-col items-start">
          {/* Logo */}
          <div className="mb-10">
            <div className="w-[76px] h-[120px] flex justify-center items-center">
              <img src={LogoImage} alt="Setapp Logo" className="w-[76px] h-[120px] opacity-40" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-avenir font-medium text-[46px] leading-[59px] text-text-dark mb-[60px]">
            Superpowers starting $9.99/month.<br />
            Free for 7 days.
          </h2>

          {/* Buttons */}
          <div className="flex items-center gap-6 mb-[92px]">
            <a
              href="#"
              className="bg-text-dark text-white font-avenir font-normal text-base w-[193px] h-[50px] flex items-center justify-center rounded-btn cursor-pointer"
            >
              Get started now
            </a>
            <a
              href="#"
              className="bg-transparent text-text-dark font-avenir font-normal text-base w-[220px] h-[50px] flex items-center justify-center rounded-btn border-2 border-text-dark cursor-pointer"
            >
              More about Setapp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
