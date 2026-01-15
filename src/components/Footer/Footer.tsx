import { useState } from "react";
import LogoImage from "../../assets/logo.svg";
import EnglisSvg from "../../assets/icons/en.svg"
import ArrowDown from "../../assets/icons/arrow-down.svg"

// Social media icons - extract these SVGs from the design
import facebookIcon from "../../assets/icons/footer-social-facebook.svg"
import twitterIcon from "../../assets/icons/footer-social-twitter.svg"
import youtubeIcon from "../../assets/icons/footer-social-youtube.svg"
import instagramIcon from "../../assets/icons/footer-social-instagram.svg"

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
  };

  return (
    <footer className="w-full bg-app-bg text-white max-w-[1380px] mx-auto pt-[60px] pb-[40px]">
      {/* Footer Content */}
      <div className="max-w-[1380px] mx-auto px-[30px] py-[40px]">
        <div className="flex justify-between gap-[230px] w-full shrink-0">
          {/* Left section logo and subscription */}
          <div className="flex flex-col w-full gap-8 px-[10px] max-w-[460px]">
            <div className="flex justify-start items-center gap-3 mb-[78px]">
              <div className="flex justify-center items-center">
                <img src={LogoImage} alt="Setapp Logo" className="w-[20px] h-[32px]" />
              </div>
              <span className="font-avenir font-semibold text-xl tracking-wide">SETAPP</span>
            </div>

            <p className="text-white/80 text-base font-avenir leading-7">
              Updates from our team, written with love 🧡
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-[#3A3A3F] text-white  border-none placeholder:text-white/40 px-5 py-3.5 rounded-tl-lg rounded-bl-lg font-avenir text-base outline-none focus:ring-2 focus:ring-white/20 transition-all"
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-3.5 outline-none border-none rounded-tr-lg rounded-br-lg -translate-x-2 font-avenir font-medium text-base hover:bg-white/90 transition-colors flex items-center justify-center"
              >
                →
              </button>
            </form>
          </div>

          {/* maptree links of the site */}
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-4 max-w-[230px]">
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Home
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                How It Works
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                All Apps
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Pricing
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Setapp for Teams
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Blog
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Podcast
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Download
              </a>
            </div>

            <div className="flex flex-col gap-4 max-w-[230px]">
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                About
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Support
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Education Discount
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Family Plan
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                For Developers
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Gift Cards
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Redeem Card or Code
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Setapp Reviews
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Affiliate Program
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Mac Developer Survey 2023
              </a>
            </div>

            <div className="flex flex-col gap-4 max-w-[230px]">
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Getting started with Setapp
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Remote access to other Mac
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Fix macOS Ventura problems
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Best productivity apps
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Best YouTube downloaders
              </a>
              <a href="#" className="text-white/90 hover:text-white font-avenir text-base transition-colors">
                Uninstall apps
              </a>
            </div>
          </div>
        </div>

        {/* dmca protected and language switcher */}
        <div className="flex justify-between my-[40px] px-[15px] ">
          <div className="flex items-center w-[125px] h-[23px]">
            <div className="bg-white/30 px-3 py-1.5 rounded-social text-xs font-avenir font-semibold tracking-wide">
              DMCA
            </div>
            <span className="text-xs font-avenir text-white bg-[#404547] px-3 py-1.5">PROTECTED</span>
          </div>
          <div className="flex justify-center items-center gap-[9px]">
            <img src={EnglisSvg} alt="flag icon svg" />
            <span className="text-md font-avenir font-normal">English</span>
            <img
              src={ArrowDown}
              alt="language switch arrow button"
              className="w-[10px] h-[10px]"
            />
          </div>
        </div>

        {/* footer text & social links */}
        <div className="px-[15px]">
          <div className="border-t border-white pt-8 px-[15px]"></div>
          <div className="flex justify-between items-center">
            {/* Left side */}
            <div className="flex flex-col gap-[12px]">
              <p className="text-white text-xs font-avenir font-normal leading-[21.36px] pb-[5px]">
                © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36Y414, Ireland. Reg. 584165. VAT ID: IE3425901BH
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-[12px]">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <img src={youtubeIcon} alt="YouTube" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Terms of use and privacy policy */}
        <div className="flex gap-[16px] py-[20px] px-[15px]">
          <a href="#" className="text-white/50 leading-[21.36px] font-normal text-xs font-avenir transition-colors">
            Terms of Use
          </a>
          <a href="#" className="text-white/50 leading-[21.36px] font-normal text-xs font-avenir transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
