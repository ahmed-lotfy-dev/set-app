import heroImage from "../../assets/images/testimonia-person-image.png"
import carouselArrowLeft from "../../assets/icons/carousel-arrow-left.svg"
import carouselArrowRight from "../../assets/icons/carousel-arrow-right.svg"
import TestimonialCard from "./TestimonialCard"

type Props = {}

export default function Testimonials({ }: Props) {
  const data = {
    testimonial: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    person: "Jason Staczek",
    image: heroImage,
  }

  return (
    <section className="w-full px-6 pt-[70px]">
      <div className="max-w-[1355px] m-auto">
        <div className="flex items-center justify-between relative">
          {/* Testimonial Card */}
          <button className="absolute top-[64px] right-[106px] z-10 cursor-pointer hover:opacity-70 transition-opacity">
            <img src={carouselArrowLeft} alt="" className="w-3.5 h-6" />
          </button>
          <button className="absolute top-[64px] right-[46px] z-10 cursor-pointer hover:opacity-70 transition-opacity">
            <img src={carouselArrowRight} alt="" className="w-3.5 h-6" />
          </button>
          <TestimonialCard testimonial={data} />
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
