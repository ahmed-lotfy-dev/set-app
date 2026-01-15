import heroImage from "../../assets/images/testimonia-person-image.png"
import playBtn from "../../assets/icons/play-btn.svg"
import carouselArrowLeft from "../../assets/icons/carousel-arrow-left.svg"
import carouselArrowRight from "../../assets/icons/carousel-arrow-right.svg"

type Props = {}

export default function Testimonials({ }: Props) {
  return (
    <section className="w-full px-6 pt-[70px]">
      <div className="max-w-[1355px] m-auto">
        <div className="flex items-center justify-between">
          {/* Testimonial Card */}
          <div className="bg-[#765070] rounded-card overflow-hidden min-h-[500px] flex mb-[10px] relative">
            {/* Carousel Arrows */}
            <button className="absolute top-[64px] right-[106px] z-10 cursor-pointer hover:opacity-70 transition-opacity">
              <img src={carouselArrowLeft} alt="" className="w-3.5 h-6" />
            </button>
            <button className="absolute top-[64px] right-[46px] z-10 cursor-pointer hover:opacity-70 transition-opacity">
              <img src={carouselArrowRight} alt="" className="w-3.5 h-6" />
            </button>
            <div className="flex-1 flex flex-col justify-center px-24 py-16">
              {/* Testimonial Content */}
              <p className="font-avenir font-medium text-[26px] leading-[40px] text-white mb-5 max-w-[580px]">
                Musicians like Jason use Setapp to push the
                limits of their creativity, dancing through tasks
                for more time to play.
              </p>
              <p className="font-avenir text-[16px] text-white/60">
                Jason Staczek
              </p>
              {/* Play Button */}
              <button
                className="w-[74px] h-[74px] mt-[131px] rounded-full bg-white flex items-center justify-center border-none outline-none cursor-pointer"
                aria-label="Play testimonial"
              >
                <img src={playBtn} alt="testimonial play button" />
              </button>
            </div>

            {/* Person Image */}
            <figure className="w-[670px] h-[690px] shrink-0 overflow-hidden mt-[29px]">
              <img
                src={heroImage}
                alt="Jason Staczek in his studio"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>
        {/* Pagination Dots - Below the card */}
        <div className="flex justify-center items-center gap-3 my-[24px]">
          {/* Active Dot */}
          <span className="w-3 h-3 rounded-full bg-[#1D1D22]" />
          {/* Inactive Dots */}
          <span className="w-3 h-3 rounded-full bg-[#D5D4D4]" />
          <span className="w-3 h-3 rounded-full bg-[#D5D4D4]" />
          <span className="w-3 h-3 rounded-full bg-[#D5D4D4]" />
        </div>
      </div>
    </section>
  )
} 