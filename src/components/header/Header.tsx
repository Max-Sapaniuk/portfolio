import { AnimatedLogo } from "@/shared/ui";
import { Turn as Hamburger } from "hamburger-react";

import { Sun, Globe } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navigation = [
  {
    label: "Home",
    value: "home",
    href: "#home",
  },
  {
    label: "About",
    value: "about",
    href: "#about",
  },
  {
    label: "Portfolio",
    value: "portfolio",
    href: "#portfolio",
  },
  {
    label: "Contact",
    value: "contact",
    href: "#contact",
  },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="font-plus-jakarta-sans bg-header sticky top-0 left-0 flex w-full items-center justify-center text-xl font-semibold shadow-[0px_0px_22px_-3px_rgba(0,0,0,0.1)]">
      <div className="container flex w-full items-center justify-between px-4 py-5">
        <AnimatedLogo />

        <div className="flex items-center gap-20">
          <nav className="hidden items-center gap-10 md:flex">
            {navigation.map((item) => (
              <div className="group relative transition-all duration-300 hover:opacity-90">
                <a
                  key={item.value}
                  href={item.href}
                  className="transition-colors"
                >
                  {item.label}
                </a>
                <div className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </nav>
          <div className="flex h-full items-stretch gap-4">
            <button className="flex cursor-pointer items-center gap-2 rounded-full px-4 transition-all duration-300 hover:bg-white/10">
              <Globe className="h-5 w-5" />
              EN
            </button>
            <button className="flex cursor-pointer items-center gap-2 rounded-full p-2 transition-all duration-300 hover:bg-white/10">
              <Sun className="h-5 w-5" />
              {/* <Moon className="h-5 w-5" /> */}
            </button>
            <div className="md:hidden">
              <Hamburger
                size={20}
                direction="right"
                toggled={mobileMenuOpen}
                toggle={setMobileMenuOpen}
                rounded
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-header absolute top-full left-0 flex w-full flex-col items-center justify-center gap-4 py-6 shadow-md md:hidden"
          >
            {navigation.map((item) => (
              <div
                key={item.value}
                className="group relative w-fit transition-all duration-300 hover:opacity-90"
              >
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="transition-colors"
                >
                  {item.label}
                </a>
                <div className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
