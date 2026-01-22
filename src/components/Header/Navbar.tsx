import LogoImage from '../../assets/logo.svg'
import EnglisSvg from "../../assets/icons/en.svg"
import MobileMenu from "../../assets/icons/menu.svg"
import CloseMenu from "../../assets/icons/close.svg"
import { motion, type Variants, AnimatePresence } from "motion/react"
import { useState } from 'react'

type Props = {
  onComplete: () => void
}
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default function Navbar({ onComplete }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { type: 'link', label: "How it works", href: "/process" },
    { type: 'link', label: "All apps", href: "/apps" },
    { type: 'link', label: "Pricing", href: "/pricing" },
    { type: 'link', label: "For Teams", href: "/teams" },
    { type: 'link', label: "Blog", href: "/blog" },
    { type: 'link', label: "Podcast", href: "/podcast" },
    { type: 'separator' },
    { type: 'lang', icon: EnglisSvg },
    { type: 'link', label: "Sign In", href: "/login" },
    { type: 'action', label: "Try free", href: "/signup" }
  ];

  const mobileNavHandler = () => {
    console.log("Mobile menu clicked");
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.nav
      className='w-full h-full flex justify-between items-center mt-3 gap-6.5 relative'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => onComplete?.()}
    >
      <motion.img
        variants={itemVariants}
        src={LogoImage}
        alt="Setapp Logo"
      />

      {/* Mobile Menu Trigger - Positioned here to avoid stagger delay, visible only on small screens */}
      <motion.div
        variants={itemVariants}
        className="flex ml-auto md:hidden cursor-pointer"
        onClick={mobileNavHandler}
      >
        <img src={MobileMenu} alt="mobile-menu-button" />
      </motion.div>

      {/* Desktop Navigation - Hidden on mobile, flex on desktop */}
      <ul className="hidden md:flex justify-end items-center gap-2 md:gap-5 md:w-full lg:gap-6.5">
        {navItems.map((item, index) => {
          if (item.type === 'link') {
            return (
              <motion.li variants={itemVariants} key={item.label}>
                <a href={item.href} className="text-sm font-medium text-gray-300 hover:text-white">
                  {item.label}
                </a>
              </motion.li>
            );
          }
          if (item.type === 'separator') {
            return (
              <motion.div
                variants={itemVariants}
                key={`sep-${index}`}
                className="h-4 w-px bg-white/20"
                aria-hidden="true"
              />
            );
          }
          if (item.type === 'lang') {
            return (
              <motion.img
                variants={itemVariants}
                key={`lang-${index}`}
                src={item.icon}
                alt="Language switcher"
                className="w-6.5 cursor-pointer hover:opacity-80 transition-opacity"
              />
            );
          }
          if (item.type === 'action') {
            return (
              <motion.a
                whileHover={{
                  scale: 1.03, translateY: -1
                }}
                variants={itemVariants}
                key={item.label}
                href={item.href}
                className="rounded-btn border border-white/20 px-[23px] py-1.5 text-sm font-light leading-5 hover:bg-white/5 transition-all text-center"
              >
                {item.label}
              </motion.a>
            );
          }
          return null;
        })}
      </ul>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="fixed top-0 left-0 w-full h-svh bg-app-bg z-50 flex flex-col items-center justify-center gap-8"
          >
            {/* Close Button */}
            <div className="absolute top-8 right-10 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              <img src={CloseMenu} alt="close-menu-button" />
            </div>
            {navItems.map((item, index) => {
              if (item.type === 'link') {
                return (
                  <motion.li variants={itemVariants} key={item.label}>
                    <a href={item.href} className="text-2xl font-medium text-gray-300 hover:text-white">
                      {item.label}
                    </a>
                  </motion.li>
                );
              }
              if (item.type === 'separator') {
                return null;
              }
              if (item.type === 'lang') {
                return (
                  <motion.img
                    variants={itemVariants}
                    key={`lang-${index}`}
                    src={item.icon}
                    alt="Language switcher"
                    className="w-8 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                );
              }
              if (item.type === 'action') {
                return (
                  <motion.a
                    whileHover={{
                      scale: 1.03, translateY: -1
                    }}
                    variants={itemVariants}
                    key={item.label}
                    href={item.href}
                    className="rounded-btn border border-white/20 px-8 py-3 text-xl font-light leading-5 hover:bg-white/5 transition-all text-center"
                  >
                    {item.label}
                  </motion.a>
                );
              }
              return null;
            })}
          </motion.ul>
        )}
      </AnimatePresence>

    </motion.nav>
  )
}
