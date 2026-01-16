import LogoImage from '../../assets/logo.svg'
import EnglisSvg from "../../assets/icons/en.svg"
import { motion, type Variants } from "motion/react"

type Props = {
  onComplete: () => void
}
const containerVariants: Variants = {
  hidden: { opacity: 0 },
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

  return (
    <motion.nav
      className='w-full flex justify-between items-center gap-6.5'
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

      <ul className="flex items-center gap-6.5">
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
    </motion.nav>
  )
}
