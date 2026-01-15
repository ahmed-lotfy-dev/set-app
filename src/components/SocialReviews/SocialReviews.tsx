import facebook from "../../assets/icons/social-fb-icon.svg"
import twitter from "../../assets/icons/social-twitter-icon.svg"
import instagram from "../../assets/icons/social-instagram-icon.svg"
import youtube from "../../assets/icons/social-youtube-icon.svg"
import twitterSm from "../../assets/icons/twitter-icon-sm-social.svg"
import instagramSm from "../../assets/icons/instagram-icon-sm-social .svg"
import facebookSm from "../../assets/icons/facebook-icon-sm-social.svg"
import carouselArrowLeft from "../../assets/icons/carousel-arrow-left-black.svg"
import carouselArrowRight from "../../assets/icons/carousel-arrow-right-black.svg"

import ReviewCard from "./ReviewCard"

type Props = {}

const reviews = [
  {
    text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    author: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    socialIcon: twitterSm,
    bgColor: "#7289A1"
  },
  {
    text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    author: "Mauricio Sanchez",
    handle: "@m741s",
    socialIcon: instagramSm,
    bgColor: "#D7B38D"
  },
  {
    text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    author: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    socialIcon: facebookSm,
    bgColor: "#765070"
  }
];

export default function SocialReviews({ }: Props) {
  return (
    <section className="w-full bg-[#FEFEFE] text-[#26262B] py-[88px]">
      <div className="max-w-[1260px] m-auto px-6 relative">
        {/* Social Heading Area */}
        <div className="flex justify-between items-center gap-[180px] mb-[25px]">
          <h2 className="text-[48px] font-semibold leading-[58px] tracking-tight max-w-[500px]">
            Setapp in your words.
          </h2>

          <div className="flex items-center gap-10 flex-1">
            <p className="text-[18px] font-normal leading-[32px] text-[#26262B]/60 max-w-[300px]">
              What you say about how Setapp powers you up.
            </p>

            <div className="flex justify-center items-center gap-[10px] ml-auto">
              <a href="#" target="_blank" className="hover:opacity-70 transition-opacity">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#" target="_blank" className="hover:opacity-70 transition-opacity">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="#" target="_blank" className="hover:opacity-70 transition-opacity">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="#" target="_blank" className="hover:opacity-70 transition-opacity">
                <img src={youtube} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Absolute Positioned */}
        <div className="flex justify-end items-center gap-[30px] z-10 mt-[25px] mb-[20px]">
          <button className="cursor-pointer hover:opacity-50 transition-opacity">
            <img src={carouselArrowLeft} alt="Previous" className="w-[14px] h-[24px]" />
          </button>
          <button className="cursor-pointer hover:opacity-50 transition-opacity">
            <img src={carouselArrowRight} alt="Next" className="w-[14px] h-[24px]" />
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[25px]">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-[25px] px-[23px] mt-[24px] mb-[25px]">
          <span className="w-3 h-3 rounded-full bg-[#1D1D22]" />
          <span className="w-3 h-3 rounded-full bg-[#D5D4D4]" />
          <span className="w-3 h-3 rounded-full bg-[#D5D4D4]" />
          <span className="w-3 h-3 rounded-full bg-[#D5D4D4]" />
          <span className="w-3 h-3 rounded-full bg-[#D5D4D4]" />
          <span className="w-3 h-3 rounded-full bg-[#D5D4D4]" />
        </div>
      </div>
      <div className="border-b"></div>
    </section>
)
}