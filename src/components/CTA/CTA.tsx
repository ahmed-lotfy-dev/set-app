import LogoImage from "../../assets/logo.svg";

export default function CTA() {
  return (
    <section className="w-full px-6 pt-[41px] pb-[20px]">
      <div className="max-w-[1330px] mx-auto">
<<<<<<< HEAD
        <div className="bg-card-bg rounded-card px-[75px] pt-[124px] mb-[21px] flex flex-col items-start">
=======
        <div className="bg-[#F5F5F5] rounded-card px-6 md:px-18.75 pt-16 md:pt-31 pb-12 md:pb-0 mb-[21px] flex flex-col items-center md:items-start text-center md:text-left">
>>>>>>> 67d7ec0 (Add responsive to all component beside desktop that was only present in figma taking descieion based on my knowledge about ui/ux,up to my knowledge other screens wasn't present in the figma and migrate some fixed px to tailwind numbers to it be dynamic calculated i guess and add md:,ld: for resposnive)
          {/* Logo */}
          <div className="mb-8 md:mb-10">
            <div className="w-[50px] md:w-19 h-20 md:h-30 flex justify-center items-center">
              <img src={LogoImage} alt="Setapp Logo" className="w-full h-full opacity-40" />
            </div>
          </div>

          {/* Heading */}
<<<<<<< HEAD
          <h2 className="font-avenir font-medium text-[46px] leading-[59px] text-text-dark mb-[60px]">
            Superpowers starting $9.99/month.<br />
=======
          <h2 className="font-avenir font-medium text-[clamp(28px,6vw,46px)] leading-[clamp(36px,7vw,59px)] text-[#26262B] mb-10 md:mb-[60px]">
            Superpowers starting $9.99/month.<br className="hidden md:block" />
>>>>>>> 67d7ec0 (Add responsive to all component beside desktop that was only present in figma taking descieion based on my knowledge about ui/ux,up to my knowledge other screens wasn't present in the figma and migrate some fixed px to tailwind numbers to it be dynamic calculated i guess and add md:,ld: for resposnive)
            Free for 7 days.
          </h2>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 mb-16 md:mb-[92px] w-full md:w-auto">
            <a
              href="#"
<<<<<<< HEAD
              className="bg-text-dark text-white font-avenir font-normal text-base w-[193px] h-[50px] flex items-center justify-center rounded-btn cursor-pointer"
=======
              className="bg-[#26262B] text-white font-avenir font-normal text-base md:w-[193px] h-[50px] flex items-center justify-center rounded-btn cursor-pointer"
>>>>>>> 67d7ec0 (Add responsive to all component beside desktop that was only present in figma taking descieion based on my knowledge about ui/ux,up to my knowledge other screens wasn't present in the figma and migrate some fixed px to tailwind numbers to it be dynamic calculated i guess and add md:,ld: for resposnive)
            >
              Get started now
            </a>
            <a
              href="#"
<<<<<<< HEAD
              className="bg-transparent text-text-dark font-avenir font-normal text-base w-[220px] h-[50px] flex items-center justify-center rounded-btn border-2 border-text-dark cursor-pointer"
=======
              className="bg-transparent text-[#26262B] font-avenir font-normal text-base md:w-[220px] h-[50px] flex items-center justify-center rounded-btn border-2 border-[#26262B] cursor-pointer"
>>>>>>> 67d7ec0 (Add responsive to all component beside desktop that was only present in figma taking descieion based on my knowledge about ui/ux,up to my knowledge other screens wasn't present in the figma and migrate some fixed px to tailwind numbers to it be dynamic calculated i guess and add md:,ld: for resposnive)
            >
              More about Setapp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
