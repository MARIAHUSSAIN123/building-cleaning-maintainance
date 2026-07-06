import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import TopBar from "./TopBar";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopBar />

      <motion.header
        animate={{
          height: scrolled ? 80 : 100,
        }}
        transition={{ duration: 0.35 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          <Link to="/">
            <motion.img
              animate={{
                height: scrolled ? 60 : 80,
              }}
              transition={{ duration: 0.35 }}
              src={logo}
              alt="Hills Atcham"
              className="w-auto"
            />
          </Link>

          <DesktopNav />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            closeMenu={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}