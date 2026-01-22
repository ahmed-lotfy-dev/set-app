import LogoImage from "../../assets/logo.svg"
import appleStore from "../../assets/icons/apple.svg"
import googlePlay from "../../assets/icons/google.svg"
import { motion, type Variants } from "motion/react"
import LeftShapes from "./LeftShapes"
import RightShapes from "./RightShapes"

type Props = {
  isReady: boolean
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
      when: "beforeChildren",
    },
  },
}

const centerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
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

export default function Hero({ }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="@container w-full h-svh flex-1 flex flex-col justify-start items-center relative -mt-12 md:mt-0"
    >
      <LeftShapes />
      <RightShapes />

      {/* Middle Content Wrapper */}
      <motion.div variants={centerVariants} className="flex flex-col items-center z-20">
        {/* logo centered content */}
        <div className="bg-black w-size-logo-w h-size-logo-h flex justify-center items-center squircle-soft mb-9.75">
          <img src={LogoImage} alt="Header Logo" className="w-size-logo-w h-size-logo-h px-8.5 py-4.5" />
        </div>
        {/* app catch phrase */}
        <h2 className="font-bold text-heading-xl leading-heading-xl text-center max-w-2xl px-14">
          Dozens of apps.
          <br />
          One subscription.
          <br />
          $9.99
        </h2>

        {/* action buttons */}
        <div className="flex flex-col sm:flex-row items-center sm:gap-5 gap-3 mt-12 mb-6.75">
          {/* Main button */}
          <a
            href="#"
            className="bg-white text-black font-normal rounded-btn flex items-center justify-center px-spacing-btn-x h-spacing-btn-y text-btn cursor-pointer transition-transform hover:scale-105"
          >
            Try free for 7 days
          </a>

          {/* Store icons */}
          <div className="flex items-center gap-spacing-gap mt-3 sm:mt-0">
            <a
              href="#"
              className="bg-white rounded-btn flex justify-center items-center shadow-lg w-size-btn-icon h-size-btn-icon transition-transform hover:scale-105 cursor-pointer"
            >
              <img
                src={appleStore}
                alt="Apple Store"
                className="w-spacing-icon h-spacing-icon object-contain"
              />
            </a>
            <a
              href="#"
              className="bg-white rounded-btn flex justify-center items-center shadow-lg w-size-btn-icon h-size-btn-icon transition-transform hover:scale-105 cursor-pointer"
            >
              <img
                src={googlePlay}
                alt="Google Play Store"
                className="w-spacing-icon h-spacing-icon object-contain"
              />
            </a>
          </div>
        </div>


        <p className="text-white font-normal text-lg text-center max-w-80 leading-8">
          Power up your workflow with Setapp, a<br />
          smart way to get apps.
        </p>
      </motion.div>
    </motion.div>
  );
}

