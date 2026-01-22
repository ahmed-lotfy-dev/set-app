import { useState, useMemo } from "react"
import { useMediaQuery } from "../../hooks/useMediaQuery"
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
  },
  {
    text: "Setapp has completely transformed how I discover apps. The curated selection is simply unmatched in the ecosystem.",
    author: "David Chen",
    handle: "@davidchen_tech",
    socialIcon: twitterSm,
    bgColor: "#7289A1"
  },
  {
    text: "I can't imagine my workflow without Setapp. It pays for itself ten times over with just a few of the pro tools.",
    author: "Sarah Miller",
    handle: "@miller_design",
    socialIcon: instagramSm,
    bgColor: "#D7B38D"
  },
  {
    text: "Best subscription service I pay for. The quality of apps is consistently high and the platform keeps getting better.",
    author: "James Wilson",
    handle: "@jwilson_dev",
    socialIcon: facebookSm,
    bgColor: "#765070"
  },
  {
    text: "Finally a subscription that actually provides value. No bloat, just premium apps that I actually use daily.",
    author: "Emily Zhang",
    handle: "@emily_z",
    socialIcon: twitterSm,
    bgColor: "#7289A1"
  },
  {
    text: "The sheer variety of tools available is mind-blowing. From productivity to creativity, it covers everything.",
    author: "Michael Ross",
    handle: "@mross_creative",
    socialIcon: instagramSm,
    bgColor: "#D7B38D"
  },
  {
    text: "Setapp is the secret weapon for any Mac power user. It's the first thing I install on a new machine.",
    author: "Lisa Park",
    handle: "@lisa_park_cloud",
    socialIcon: facebookSm,
    bgColor: "#765070"
  }
];

export default function SocialReviews({ }: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const chunkSize = isDesktop ? 3 : 1;

  const chunks = useMemo(() => {
    return Array.from({ length: Math.ceil(reviews.length / chunkSize) }, (_, i) =>
      reviews.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
  }, [chunkSize]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index if it goes out of bounds on resize
  if (currentIndex >= chunks.length && chunks.length > 0) {
    setCurrentIndex(chunks.length - 1);
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === chunks.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? chunks.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
<<<<<<< HEAD
    <section className="w-full bg-section-bg text-text-dark py-[88px]">
      <div className="max-w-[1260px] m-auto px-6 relative">
=======
    <section className="w-full bg-[#FEFEFE] text-[#26262B] pt-10 pb-20">
      <div className="max-w-[1440px] m-auto px-6 relative">
>>>>>>> 67d7ec0 (Add responsive to all component beside desktop that was only present in figma taking descieion based on my knowledge about ui/ux,up to my knowledge other screens wasn't present in the figma and migrate some fixed px to tailwind numbers to it be dynamic calculated i guess and add md:,ld: for resposnive)
        {/* Social Heading Area */}
        <div className="flex justify-between flex-1 flex-col md:flex-row items-center text-center md:text-start mt-24.75 pb-10 md:px-2.75">
          <h2 className="text-[48px] font-semibold leading-[58px] tracking-tight max-w-[500px]">
            Setapp in your words.
          </h2>

<<<<<<< HEAD
          <div className="flex items-center gap-10 flex-1">
            <p className="text-[18px] font-normal leading-[32px] text-text-dark/60 max-w-[300px]">
=======
          <div className="flex items-center flex-col md:flex-row gap-10">
            <p className="text-[18px] font-normal leading-[32px] text-[#26262B]/60 max-w-[300px] flex-1">
>>>>>>> 67d7ec0 (Add responsive to all component beside desktop that was only present in figma taking descieion based on my knowledge about ui/ux,up to my knowledge other screens wasn't present in the figma and migrate some fixed px to tailwind numbers to it be dynamic calculated i guess and add md:,ld: for resposnive)
              What you say about how Setapp powers you up.
            </p>

            <div className="flex justify-center items-center gap-2.5 md:ml-auto">
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
          <button
            className="cursor-pointer hover:opacity-50 transition-opacity"
            onClick={prevSlide}
          >
            <img src={carouselArrowLeft} alt="Previous" className="w-[14px] h-[24px]" />
          </button>
          <button
            className="cursor-pointer hover:opacity-50 transition-opacity"
            onClick={nextSlide}
          >
            <img src={carouselArrowRight} alt="Next" className="w-[14px] h-[24px]" />
          </button>
        </div>

        <div className="overflow-hidden w-full mt-[25px]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {chunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className={`min-w-full grid gap-6 ${isDesktop ? "grid-cols-3" : "grid-cols-1"}`}>
                {chunk.map((review, idx) => (
                  <ReviewCard key={idx} {...review} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-[25px] px-[23px] mt-[24px] mb-[25px]">
          {chunks.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-active-dot" : "bg-inactive-dot"}`}
            />
          ))}
        </div>
      </div>
      <div className="border-b"></div>
    </section>
  )
}