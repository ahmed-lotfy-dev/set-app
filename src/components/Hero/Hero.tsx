import LogoImage from "../../assets/logo.svg"
import firstLeftShape from "../../assets/shapes/left-1.svg"
import secondLeftShape from "../../assets/shapes/left-2.svg"
import thirdLeftShape from "../../assets/shapes/left-3.svg"
import fourthLeftShape from "../../assets/shapes/left-4.svg"
import fifthLeftShape from "../../assets/shapes/left-5.svg"

import firstRightShape from "../../assets/shapes/right-1.svg"
import secondtRightShape from "../../assets/shapes/right-2.svg"
import thirdRightShape from "../../assets/shapes/right-3.svg"
import fourthRightShape from "../../assets/shapes/right-4.svg"
import fifthRightShape from "../../assets/shapes/right-5.svg"

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
        <a href="#" className="bg-white text-black font-normal px-7.5 h-[60px] rounded-btn flex items-center text-lg  cursor-pointer">
          Try free for 7 days
        </a>
        <div className="flex items-center gap-3">
          <a href="#" className="w-[60px] h-[60px] bg-white rounded-btn flex justify-center items-center shadow-lg transition-colors cursor-pointer">
            <img src={appleStore} alt="Apple Store" className="w-10 h-10 object-contain" />
          </a>

          <a href="#" className="w-[60px] h-[60px] bg-white rounded-btn flex justify-center items-center shadow-lg transition-colors cursor-pointer">
            <img src={googlePlay} alt="Google Play Store" className="w-10 h-10 object-contain" />
          </a>
        </div>
      </div>

      <p className="text-white font-normal text-lg text-center max-w-80 leading-[32px]">
        Power up your workflow with Setapp, a<br />
        smart way to get apps.
      </p>

      {/* first left shape */}
      <div className="absolute top-[46px] left-[116px]">
        <div className="relative flex justify-center items-center w-44 h-44">
          <img className="absolute inset-0 w-full h-full object-contain" src={firstLeftShape} alt="Floating Shape" />
          <span className="text-[#A54E34] w-20 text-2xl font-bold text-center leading-none rotate-[-22deg]  uppercase">
            work with pics
          </span>
        </div>
      </div>
      {/* second left shape */}
      <div className="absolute top-[177px] left-[115px]">
        <img className="inset-0  w-full h-full object-contain" src={secondLeftShape} alt="Floating Shape" />
      </div>
      {/* third left shape */}
      <div className="absolute top-[170px] left-[220px]">
        <img className="inset-0  w-full h-full object-contain" src={thirdLeftShape} alt="Floating Shape" />
      </div>
      {/* fourth left shape */}
      <div className="absolute top-[338.5px] left-[111px]">
        <div className="relative flex justify-center items-center w-[227px] h-[114px]">

          <img className="inset-0  w-full h-full object-contain" src={fourthLeftShape} alt="Floating Shape" />
          <span className="absolute text-[#556265] w-full text-2xl font-bold text-center leading-none -rotate-[5deg]  uppercase">
            boost teamwork
          </span>
        </div>
      </div>
      {/* fifth left shape */}
      <div className="absolute top-[418px] left-[110px]">
        <div className="relative flex justify-center items-center w-[175px] h-[176px]">
          <img className="inset-0  w-full h-full object-contain" src={fifthLeftShape} alt="Floating Shape" />
          <span className="absolute text-[#384C75] w-full text-2xl font-bold text-center leading-none rotate-[-22deg]  uppercase">
            stay<br />secure
          </span>
        </div>
      </div>

      {/* first right shape */}
      <div className="absolute top-[63px] right-[69px]">
        <div className="relative flex justify-center items-center w-[200px] h-[126px]">
          <img className="absolute inset-0  w-full h-full object-contain" src={firstRightShape} alt="Floating Shape" />
          <span className="text-[#A54E34] w-full text-2xl font-bold text-center leading-none rotate-18  uppercase">
            fix wifi
          </span>
        </div>
      </div>
      {/* second right shape */}
      <div className="absolute top-[124px] right-[194px]">
        <div className="relative flex justify-center items-center w-44 h-44">
          <img className="absolute inset-0 w-full h-full object-contain" src={secondtRightShape} alt="Floating Shape" />
          <span className="text-[#384C75] w-full text-2xl font-bold text-center leading-none -rotate-20 uppercase">
            plan<br />your<br />day
          </span>
        </div>
      </div>
      {/* third right shape */}
      <div className="absolute top-[235px] right-[56px] z-10">
        <div className="relative flex justify-center items-center">
          <img className="inset-0 w-full h-full object-contain" src={thirdRightShape} alt="Floating Shape" />
        </div>
      </div>
      {/* fourth right shape */}
      <div className="absolute top-[336px] right-[114px]">
        <div className="relative flex justify-center items-center w-[230px] h-[128px]">
          <img className="inset-0 w-full h-full object-contain" src={fourthRightShape} alt="Floating Shape" />
          <span className="absolute text-[#844461] w-full text-2xl font-bold text-center leading-none rotate-9  uppercase">
            manage<br />your mac
          </span>
        </div>
      </div>
      {/* fifth right shape */}
      <div className="absolute top-[440px] right-[133px]">
        <div className="relative flex justify-center items-center w-[151px] h-[152px]">
          <img className="inset-0 w-full h-full object-contain" src={fifthRightShape} alt="Floating Shape" />
          <span className="absolute text-[#A54E34] w-full text-2xl font-bold text-center leading-none -rotate-5  uppercase">
            code easier
          </span>
        </div>
      </div>
    </div>
  );
}
