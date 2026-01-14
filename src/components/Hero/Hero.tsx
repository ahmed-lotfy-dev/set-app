import LogoImage from "../../assets/logo.svg"
import firstLeftShape from "../../assets/shapes/left-1.svg"
import secondLeftShape from "../../assets/shapes/left-2.svg"
import thirdLeftShape from "../../assets/shapes/left-3.svg"
import fourthLeftShape from "../../assets/shapes/left-4.svg"
import fifthLeftShape from "../../assets/shapes/left-5.svg"

import appleStore from "../../assets/icons/apple.svg"
import googlePlay from "../../assets/icons/google.svg"

type Props = {};

export default function Hero({ }: Props) {
  return (
    <div className="w-full flex-1 flex flex-col justify-start items-center relative">
      {/* logo centered content */}
      <div className="bg-black w-40 h-40 flex justify-center items-center squircle-soft mb-9.75"
      >
        <img src={LogoImage} alt="Header Logo" className="w-40 h-40 px-8.5 py-4.5" />
      </div>
      {/* app catch phrase */}
      <h2 className="font-bold text-[64px] text-center max-w-2xl px-14 leading-17">Dozens of apps.
        One subscription.
        $9.99</h2>

      {/* action buttons */}
      <div className="flex items-center gap-5 mt-12 mb-6.75">
        <a href="#" className="bg-white text-black font-normal px-7.5 h-[60px] flex items-center rounded-xl text-lg  cursor-pointer">
          Try free for 7 days
        </a>
        <div className="flex items-center gap-3">
          <a href="#" className="w-[60px] h-[60px] bg-white rounded-xl flex justify-center items-center shadow-lg transition-colors cursor-pointer">
            <img src={appleStore} alt="Apple Store" className="w-10 h-10 object-contain" />
          </a>

          <a href="#" className="w-[60px] h-[60px] bg-white rounded-xl flex justify-center items-center shadow-lg transition-colors cursor-pointer">
            <img src={googlePlay} alt="Google Play Store" className="w-10 h-10 object-contain" />
          </a>
        </div>
      </div>

      <p className="text-white font-normal text-lg text-center max-w-80 leading-[32px]">
        Power up your workflow with Setapp, a<br />
        smart way to get apps.
      </p>

      {/* first left shape */}
      <div className="absolute top-11.5 left-36">
        <div className="relative flex justify-center items-center w-44 h-44">
          <img className="absolute inset-0 -z-10 w-full h-full object-contain" src={firstLeftShape} alt="Floating Shape" />
          <span className="text-[#A54E34] w-20 text-2xl font-bold text-center leading-none rotate-[-22deg] max-w-[120px] uppercase">
            work with pics
          </span>
        </div>
      </div>
      {/* second left shape */}
      <div className="absolute top-44 left-36">
        <img className="inset-0  w-full h-full object-contain" src={secondLeftShape} alt="Floating Shape" />
      </div>
      {/* third left shape */}
      <div className="absolute top-42 left-60">
        <img className="inset-0  w-full h-full object-contain" src={thirdLeftShape} alt="Floating Shape" />
      </div>
      {/* fourth left shape */}
      <div className="absolute top-80 left-32">
        <div className="relative flex justify-center items-center w-[227px] h-[114px]">

          <img className="inset-0  w-full h-full object-contain" src={fourthLeftShape} alt="Floating Shape" />
          <span className="absolute text-[#556265] w-20 text-2xl font-bold text-center leading-none rotate-[-22deg] max-w-[120px] uppercase">
            boost teamwork
          </span>
        </div>
      </div>
      {/* fifth left shape */}
      <div className="absolute top-120 left-32">
        <div className="relative flex justify-center items-center w-[175px] h-[176px]">
          <img className="inset-0  w-full h-full object-contain" src={fifthLeftShape} alt="Floating Shape" />
          <span className="absolute text-[#384C75] w-20 text-2xl font-bold text-center leading-none rotate-[-22deg] max-w-[120px] uppercase">
            stay secure
          </span>
        </div>
      </div>
    </div>
  );
}
