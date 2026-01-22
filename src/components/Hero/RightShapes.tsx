import firstRightShape from "../../assets/shapes/right-1.svg"
import secondtRightShape from "../../assets/shapes/right-2.svg"
import thirdRightShape from "../../assets/shapes/right-3.svg"
import fourthRightShape from "../../assets/shapes/right-4.svg"
import fifthRightShape from "../../assets/shapes/right-5.svg"
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

export default function RightShapes() {
  return (
    <div className="absolute top-0 right-0 inset-0 pointer-events-none overflow-hidden">
      {/* First Shape */}
      <motion.div variants={shapeVariants} className="absolute top-[3%] md:top-[6%] lg:top-[5%] right-[3%] md:right-[3%] lg:right-[2%]">
        <div className="relative flex justify-center items-center w-[clamp(5rem,20vw,12.5rem)] h-[clamp(3.25rem,10vw,7.875rem)]">
          <img
            className="absolute inset-0 w-full h-full object-contain"
            src={firstRightShape}
            alt="Floating Shape"
          />
          <span className="text-[#A54E34] w-full text-[clamp(0.875rem,2.2vw,1.5rem)] font-bold text-center leading-none rotate-18 uppercase">
            fix wifi
          </span>
        </div>
      </motion.div>

      {/* Second Shape */}
      <motion.div variants={shapeVariants} className="absolute top-[15%] md:top-[16%] lg:top-[20%] right-[7%] md:right-[8%] lg:right-[5%]">
        <div className="relative flex justify-center items-center w-[clamp(6rem,14vw,11rem)] h-[clamp(6rem,14vw,11rem)]">
          <img
            className="absolute inset-0 w-full h-full object-contain"
            src={secondtRightShape}
            alt="Floating Shape"
          />
          <span className="text-[#384C75] w-full text-[clamp(0.875rem,2.2vw,1.5rem)] font-bold text-center leading-none -rotate-20 uppercase">
            plan<br />
            your<br />
            day
          </span>
        </div>
      </motion.div>

      {/* Third Shape */}
      <motion.div variants={shapeVariants} className="absolute top-[30%] md:top-[33%] lg:top-[40%] right-[2%] md:right-[5%] lg:right-[0%] z-10">
        <div className="relative flex justify-center items-center w-[clamp(5rem,15vw,9.6875rem)] h-[clamp(5rem,15vw,9.5625rem)]">
          <img className="inset-0 w-full h-full object-contain" src={thirdRightShape} alt="Floating Shape" />
        </div>
      </motion.div>

      {/* Fourth Shape */}
      <motion.div variants={shapeVariants} className="absolute top-[50%] md:top-[52%] lg:top-[60%] right-[2%] md:right-[2%] lg:right-[5%]">
        <div className="relative flex justify-center items-center w-[clamp(10rem,20vw,14.375rem)] h-[clamp(5.5rem,12vw,8rem)]">
          <img className="inset-0 w-full h-full object-contain" src={fourthRightShape} alt="Floating Shape" />
          <span className="absolute text-[#844461] w-full text-[clamp(0.875rem,2.2vw,1.5rem)] font-bold text-center leading-none rotate-9 uppercase">
            manage<br />
            your mac
          </span>
        </div>
      </motion.div>

      {/* Fifth Shape */}
      <motion.div variants={shapeVariants} className="absolute top-[60%] md:top-[63%] lg:top-[77%] right-[3%] md:right-[5%] lg:right-[8%]">
        <div className="relative flex justify-center items-center w-[clamp(6rem,18vw,9.4375rem)] h-[clamp(6rem,18vw,9.5rem)]">
          <img className="inset-0 w-full h-full object-contain" src={fifthRightShape} alt="Floating Shape" />
          <span className="absolute text-[#A54E34] w-full text-[clamp(0.875rem,2.2vw,1.5rem)] font-bold text-center leading-none -rotate-5 uppercase">
            code easier
          </span>
        </div>
      </motion.div>
    </div>
  )
}
