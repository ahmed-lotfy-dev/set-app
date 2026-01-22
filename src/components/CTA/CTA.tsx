import LogoImage from "../../assets/logo.svg";

export default function CTA() {
  return (
    <section className="w-full px-6 pt-10.25 pb-5">
      <div className="max-w-332.5 mx-auto">
        <div className="bg-card-bg rounded-card px-18.75 pt-31 mb-5.25 flex flex-col items-start">
          {/* Logo */}
          <div className="mb-8 md:mb-10">
            <div className="w-12.5 md:w-19 h-20 md:h-30 flex justify-center items-center">
              <img src={LogoImage} alt="Setapp Logo" className="w-full h-full opacity-40" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-avenir font-medium text-[46px] leading-14.75 text-text-dark mb-15">
            Superpowers starting $9.99/month.<br />
            Free for 7 days.
          </h2>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 mb-16 md:mb-23 w-full md:w-auto">
            <a
              href="#"
              className="bg-text-dark text-white font-avenir font-normal text-base w-48.25 h-12.5 flex items-center justify-center rounded-btn cursor-pointer"
            >
              Get started now
            </a>
            <a
              href="#"
              className="bg-transparent text-text-dark font-avenir font-normal text-base w-55 h-12.5 flex items-center justify-center rounded-btn border-2 border-text-dark cursor-pointer"
            >
              More about Setapp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
