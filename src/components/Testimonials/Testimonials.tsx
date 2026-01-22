import { useState } from "react";
import heroImage from "../../assets/images/testimonia-person-image.png";
import carouselArrowLeft from "../../assets/icons/carousel-arrow-left.svg";
import carouselArrowRight from "../../assets/icons/carousel-arrow-right.svg";
import TestimonialCard from "./TestimonialCard";

type Props = {};

export default function Testimonials({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      testimonial:
        "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",

      person: "Jason Staczek",

      image: heroImage,
    },
    {
      id: 2,
      testimonial:
        "Designers like Sarah rely on the curated toolkit to streamline assets, turning chaos into a clean canvas.",
      person: "Sarah Jenkins",
      image: null,
    },
    {
      id: 3,
      testimonial:
        "Developers like Chen find the right utilities instantly, automating the mundane to focus on shipping clean code.",
      person: "Chen Wei",
      image: null,
    },
    {
      id: 4,
      testimonial:
        "Writers like Elena use the distraction-free environments to keep the flow state alive and deadlines at bay.",
      person: "Elena Rodriguez",
      image: null,
    },
    {
      id: 5,
      testimonial:
        "Entrepreneurs like Marcus juggle finances and project management effortlessly, gaining clarity in the startup haze.",
      person: "Marcus Thorne",
      image: null,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full px-6 pt-10 md:pt-17.5">
      <div className="max-w-338.75 m-auto">
        <div className="flex items-center justify-between relative">
          {/* Navigation Arrows */}
          <button
            className="absolute top-7 right-16 md:right-14 p-3 z-10 cursor-pointer hover:opacity-70 transition-opacity"
            onClick={prevSlide}
          >
            <img src={carouselArrowLeft} alt="" className="w-3.5 h-6" />
          </button>
          <button
            className="absolute top-7 right-4 md:right-3 p-3 z-10 cursor-pointer hover:opacity-70 transition-opacity"
            onClick={nextSlide}
          >
            <img src={carouselArrowRight} alt="" className="w-3.5 h-6" />
          </button>
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Pagination Dots - Below the card */}
        <div className="flex justify-center items-center gap-3 my-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-active-dot" : "bg-inactive-dot"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
