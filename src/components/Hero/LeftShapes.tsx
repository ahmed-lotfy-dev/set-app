import firstLeftShape from "../../assets/shapes/left-1.svg"
import secondLeftShape from "../../assets/shapes/left-2.svg"
import thirdLeftShape from "../../assets/shapes/left-3.svg"
import fourthLeftShape from "../../assets/shapes/left-4.svg"
import fifthLeftShape from "../../assets/shapes/left-5.svg"
import { motion, type Variants } from "motion/react"

const shapeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
}

export default function LeftShapes() {
  return (
    <div className="absolute top-0 left-0 inset-0 pointer-events-none overflow-hidden">
      {/* First Shape */}
      <motion.div variants={shapeVariants} className="absolute top-[2%] md:top-[4%] lg:top-[5%] left-[2%] md:left-[5%]">
        <div className="relative flex justify-center items-center w-[clamp(6rem,14vw,11rem)] h-[clamp(6rem,14vw,11rem)]">
          <img
            className="absolute inset-0 w-full h-full object-contain"
            src={firstLeftShape}
            alt="Floating Shape"
          />
          <span className="text-[#A54E34] w-20 text-[clamp(0.875rem,2.2vw,1.5rem)] font-bold text-center leading-none rotate-[-22deg] uppercase">
            work with pics
          </span>
        </div>
      </motion.div>

      {/* Second Shape */}
      <motion.div variants={shapeVariants} className="absolute top-[16%] md:top-[18%] lg:top-[24%] left-[8%] md:left-[5%]">
        <div className="relative w-[clamp(2rem,5vw,3.625rem)] h-[clamp(2rem,5vw,3.625rem)] flex justify-center items-center">
          <img
            className="w-full h-full object-contain"
            src={secondLeftShape}
            alt="Floating Shape"
          />
        </div>
      </motion.div>

      {/* Third Shape */}
      <motion.div variants={shapeVariants} className="absolute top-[25%] md:top-[25%] lg:top-[30%] left-[10%] md:left-[12%] lg:left-[13%] shadow-2xl">
        <div className="relative w-[clamp(4rem,12vw,8.875rem)] h-[clamp(4rem,12vw,8.875rem)] flex justify-center items-center">
          <img
            className="w-full h-full object-contain"
            src={thirdLeftShape}
            alt="Floating Shape"
          />
        </div>
      </motion.div>

      {/* Fourth Shape */}
      <motion.div variants={shapeVariants} className="absolute top-[45%] md:top-[43%] lg:top-[55%] left-[2%] md:left-[3%]">
        <div className="relative flex justify-center items-center w-[clamp(7rem,20vw,14.1875rem)] h-[clamp(4rem,10vw,7.125rem)]">
          <img className="inset-0 w-full h-full object-contain" src={fourthLeftShape} alt="Floating Shape" />
          <span className="absolute text-[#556265] w-full text-[clamp(0.875rem,2.2vw,1.5rem)] font-bold text-center leading-none -rotate-[5deg] uppercase">
            boost teamwork
          </span>
        </div>
      </motion.div>

      {/* Fifth Shape */}
      <motion.div variants={shapeVariants} className="absolute top-[60%] md:top-[55%] lg:top-[75%] left-[6%] md:left-[6%]">
        <div className="relative flex justify-center items-center w-[clamp(5rem,14vw,11rem)] h-[clamp(5rem,14vw,11rem)]">
          <img className="inset-0 w-full h-full object-contain" src={fifthLeftShape} alt="Floating Shape" />
          <span className="absolute text-[#384C75] w-full text-[clamp(0.875rem,2.2vw,1.5rem)] font-bold text-center leading-none rotate-[-22deg] uppercase">
            stay<br />
            secure
          </span>
        </div>
      </motion.div>
    </div>
  )
}
