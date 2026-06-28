"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/public/Images/synergist.png";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useClickOutside } from "@/hooks/useClickOut";
import { motion, AnimatePresence } from "framer-motion"

const Header: React.FC = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  
  const menuRef = useClickOutside(() => setShowMenu(false))

  

useEffect(() => {
  document.body.style.overflow = showMenu ? "hidden" : "unset";
  return () => {
    document.body.style.overflow = "unset";
  };
}, [showMenu]);

  return (
    <nav className="w-full h-24 top-0 sticky z-20 bg-main flex justify-between items-center px-5 py-8 border-b border-gray-200 text-primary" ref={menuRef}>
      <Link href="/" className="flex shrink-0 items-center z-20">
        <Image src={Logo} className="w-16 h-16 object-contain" alt="Brand-Logo" />
        <h2 className="hidden sm:block text-2xl font-bold font-syne">
          The Synergist
        </h2>
      </Link>

      <Button
        variant="outline"
        size="lg"
        className="flex items-center gap-1 cursor-pointer z-50"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        {showMenu ? (
          <X size={18} strokeWidth={2} />
        ) : (
          <Menu size={18} strokeWidth={2} />
        )}
        <p className="text-sm md:text-xl pl-2">MENU</p>
      </Button>

      {/* MENU BAACKDROP */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-full md:w-1/2 h-screen bg-main flex flex-col items-center text-center justify-center"
          >
            <div className="absolute flex justify-center items-center">
              <Image
                src={Logo}
                className="w-72 h-72 opacity-10"
                alt="Brand-Logo"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
              className="flex flex-col gap-8 z-50"
            >
              {NavLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setShowMenu(false)}
                    className={`text-4xl font-bold transition-colors duration-200 ${
                      isActive
                        ? "text-soft font-semibold border-l-4 border-primary"
                        : "text-soft/60 hover:text-soft"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;

const NavLinks = [
  { label: "About", href: "/about" },
  { label: "Books", href: "/books" },
  { label: "Contact", href: "/contact" },
];
