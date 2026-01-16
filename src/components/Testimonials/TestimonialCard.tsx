import playBtn from "../../assets/icons/play-btn.svg"
import pauseBtn from "../../assets/icons/pause-btn.svg"
import { useSpeech } from "../../hooks/useSpeech"

type Testimonial = {
  id: number
  testimonial: string
  person: string
  image: string | null
}

type Props = {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: Props) {
  const { speak, pause, resume, isSpeaking, isPaused } = useSpeech();

  const handlePlayClick = () => {
    if (isSpeaking && !isPaused) {
      pause();
    } else if (isSpeaking && isPaused) {
      resume();
    } else {
      speak(`${testimonial.testimonial} by ${testimonial.person}`);
    }
  };

  const showPauseIcon = isSpeaking && !isPaused;

  return (
    <div className="bg-[#765070] rounded-card overflow-hidden min-h-full w-full flex mb-[10px] relative">
      <div className="flex-1 flex flex-col justify-center px-24 py-16">
        <article>
          {/* Testimonial Content */}
          <p className="font-avenir font-medium text-[26px] leading-[40px] text-white mb-5 max-w-[580px]">
            {testimonial.testimonial}
          </p>
          <footer className="font-avenir text-[16px] text-white/60">
            {testimonial.person}
          </footer>
        </article>

        {/* Play/Pause Button */}
        <button
          className="w-[74px] h-[74px] mt-[131px] rounded-full bg-white flex items-center justify-center border-none outline-none cursor-pointer hover:scale-105 active:scale-95 transition-transform"
          aria-label={showPauseIcon ? "Pause testimonial" : "Play testimonial"}
          onClick={handlePlayClick}
        >
          <img src={showPauseIcon ? pauseBtn : playBtn} alt={showPauseIcon ? "pause button" : "play button"} />
        </button>
      </div>

      {/* Person Image */}
      {testimonial.image && (
        <figure className="w-[670px] min-h-full shrink-0 overflow-hidden mt-[29px] mr-[66px]">
          <img
            src={testimonial.image}
            alt={`${testimonial.person} in his studio`}
            className="w-full h-full object-cover"
          />
        </figure>
      )}
    </div>
  )
}