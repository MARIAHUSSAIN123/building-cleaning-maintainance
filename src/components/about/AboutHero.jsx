import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutHero from "../../assets/clean3.jpg";
import { useLanguage } from "../../context/LanguageContext";

export default function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen overflow-hidden flex items-center">

      {/* Background Image */}

      <img
        src={aboutHero}
        alt="About Hills Atcham"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#081E31]/95 via-[#081E31]/75 to-[#081E31]/35"></div>

      {/* Blur Effect */}

      <div className="absolute -left-24 top-20 w-[400px] h-[400px] bg-green/20 rounded-full blur-[120px]"></div>

      <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-gold/10 rounded-full blur-[120px]"></div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* Small Tag */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8"
        >
          <span className="w-3 h-3 rounded-full bg-green animate-pulse"></span>

          <span className="uppercase tracking-[4px] text-white text-sm">
            {t("about.badge")}
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl lg:text-8xl font-black leading-none text-white max-w-5xl"
        >
          {t("about.heroLine1")}

          <span className="block text-gold mt-3">
            {t("about.heroLine2")}
          </span>

          {t("about.heroLine3")}
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          className="mt-8 max-w-2xl text-xl leading-9 text-white/80"
        >
          {t("about.heroDesc")}
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5 }}
          className="flex flex-wrap gap-5 mt-10"
        >

          <Link
            to="/contact"
            className="bg-green hover:bg-green-light text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            {t("home.getFreeQuote")}
          </Link>

          <Link
            to="/services"
            className="group border border-white/30 backdrop-blur-xl px-8 py-4 rounded-full text-white hover:bg-white hover:text-navy transition-all duration-300 flex items-center gap-2"
          >
            {t("about.ourServicesBtn")}

            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 duration-300"
            />

          </Link>

        </motion.div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>

    </section>
  );
}
