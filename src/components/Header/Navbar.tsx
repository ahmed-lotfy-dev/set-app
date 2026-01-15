import EnglisSvg from "../../assets/icons/en.svg"

type Props = {}

export default function Navbar({ }: Props) {
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
    <nav className="flex items-center gap-6.5">
      {navItems.map((item, index) => {
        if (item.type === 'link') {
          return (
            <a key={item.label} href={item.href} className="text-sm font-medium text-gray-300 hover:text-white">
              {item.label}
            </a>
          );
        }
        if (item.type === 'separator') {
          return (
            <div key={`sep-${index}`} className="h-4 w-px bg-white/20" aria-hidden="true" />
          );
        }
        if (item.type === 'lang') {
          return (
            <img key={`lang-${item.type}-${index}`} src={item.icon} alt="Language" className="w-6.5 cursor-pointer hover:opacity-80 transition-opacity" />
          );
        }
        if (item.type === 'action') {
          return (
            <a
              key={item.label}
              href={item.href}
              className="rounded-btn border border-white/20 px-[23px] py-1.5 text-sm font-light leading-5 hover:bg-white/5 transition-all text-center"
            >
              {item.label}
            </a>
          );
        }
        return null;
      })}
    </nav>
  )
}