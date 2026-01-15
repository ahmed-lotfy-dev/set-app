import { useState } from "react";
import LogoImage from "../../assets/logo.svg";

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
    <footer className="w-full bg-app-bg text-white px-7.5">
      {/* Footer Content */}
      <div className="max-w-[1380px] mx-auto px-5 pt-[40px] pb-10">
        <div className="flex flex-col gap-8 max-w-[460px] w-full shrink-0">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center">
                <img src={LogoImage} alt="Setapp Logo" className="w-5 h-8" />
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
                className="flex-1 bg-[#3A3A3F] text-white placeholder:text-white/40 px-5 py-3.5 rounded-lg font-avenir text-base outline-none focus:ring-2 focus:ring-white/20 transition-all"
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-3.5 rounded-lg font-avenir font-medium text-base hover:bg-white/90 transition-colors flex items-center justify-center"
              >
                →
              </button>
            </form>

            <div className="flex items-center gap-3 mt-4">
              <div className="bg-[#3A3A3F] px-3 py-1.5 rounded-social text-xs font-avenir font-semibold tracking-wide">
                DMCA
              </div>
              <span className="text-xs font-avenir text-white/60">PROTECTED</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
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

            <div className="flex flex-col gap-4">
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

            <div className="flex flex-col gap-4">
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

        <div className="border-t border-white/10 pt-8">
          <div className="flex justify-between items-center">
            {/* Left side */}
            <div className="flex flex-col gap-[12px]">
              <p className="text-white/50 text-xs font-avenir leading-[18px]">
                © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36Y414, Ireland. Reg. 584165. VAT ID: IE3425901BH
              </p>
              <div className="flex gap-[16px]">
                <a href="#" className="text-white/50 hover:text-white/80 text-xs font-avenir transition-colors">
                  Terms of Use
                </a>
                <a href="#" className="text-white/50 hover:text-white/80 text-xs font-avenir transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-[24px]">
              <button className="flex items-center gap-[8px] text-white/70 hover:text-white text-sm font-avenir transition-colors">
                <span className="text-base">🇺🇸</span>
                <span>English</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

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
        </div>
      </div>
    </footer>
  );
}
