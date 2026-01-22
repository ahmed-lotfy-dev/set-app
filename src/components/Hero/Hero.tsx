import LogoImage from "../../assets/logo.svg";
import appleStore from "../../assets/icons/apple.svg";
import googlePlay from "../../assets/icons/google.svg";
import { motion, type Variants } from "motion/react";
import LeftShapes from "./LeftShapes";
import RightShapes from "./RightShapes";

type Props = {
  isReady: boolean;
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
};

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
};

export default function Hero({}: Props) {
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
      <motion.div
        variants={centerVariants}
        className="flex flex-col items-center z-20"
      >
        {/* logo centered content */}
        <div className="bg-black w-size-logo-w h-size-logo-h flex justify-center items-center squircle-soft mb-9.75">
          <img
            src={LogoImage}
            alt="Header Logo"
            className="w-size-logo-w h-size-logo-h px-8.5 py-4.5"
          />
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
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6 mt-20 mb-16 px-6 md:px-10 w-full flex-wrap ">
          {/* Main button */}
          <a
            href="#"
            className="bg-white text-black font-semibold rounded-lg flex items-center justify-center px-6 sm:px-8 md:px-10 py- sm:py-3 md:py-5 text-sm sm:text-base md:text-lg cursor-pointer transition-transform hover:scale-105 whitespace-nowrap"
          >
            Try free for 7 days
          </a>

          {/* Store icons */}
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
            <a
              href="#"
              className="bg-white rounded-lg flex justify-center items-center shadow-lg px-3 sm:px-4 md:px-5 py-3 sm:py-3 md:py-4 transition-transform hover:scale-105 cursor-pointer"
            >
              <img
                src={appleStore}
                alt="Apple Store"
                className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 object-contain"
              />
            </a>
            <a
              href="#"
              className="bg-white rounded-lg flex justify-center items-center shadow-lg px-3 sm:px-4 md:px-5 py-3 sm:py-3 md:py-4 transition-transform hover:scale-105 cursor-pointer"
            >
              <img
                src={googlePlay}
                alt="Google Play Store"
                className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 object-contain"
              />
            </a>
          </div>
        </div>

        <p className="text-white font-normal text-base md:text-lg text-center max-w-2xl leading-8 px-6 md:px-10">
          Power up your workflow with Setapp, a<br />
          smart way to get apps.
        </p>
      </motion.div>
    </motion.div>
  );
}
