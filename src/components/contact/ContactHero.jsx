import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import hero from "../../assets/clean5.jpg";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactHero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">

      <img
        src={hero}
        alt="Contact Hills Atcham"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071D31]/95 via-[#071D31]/80 to-[#071D31]/45" />

      <div className="absolute -left-32 top-10 w-[420px] h-[420px] bg-green/20 rounded-full blur-[140px]" />
      <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-gold/20 rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="flex items-center gap-3 text-white/70 mb-8"
        >
          <Link to="/" className="hover:text-gold duration-300">
            {t("nav.home")}
          </Link>
          <span>/</span>
          <span className="text-gold">{t("nav.contact")}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8"
        >
          <PhoneCall size={18} className="text-green" />
          <span className="uppercase tracking-[4px] text-sm text-white">
            {t("contactHero.badge")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="font-display text-6xl lg:text-6xl font-black text-white leading-none max-w-5xl"
        >
          {t("contactHero.heading1")}
          <span className="block text-gold mt-2">
            {t("contactHero.heading2")}
          </span>
          {t("contactHero.heading3")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-8 max-w-2xl text-xl leading-9 text-white/75"
        >
          {t("contactHero.desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .4 }}
          className="flex flex-wrap gap-5 mt-12"
        >

          <Link
            to="/contact"
            className="bg-green hover:bg-green-light text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-500 hover:scale-105"
          >
            {t("home.getFreeQuote")}
          </Link>

          <Link
            to="/services"
            className="group border border-white/30 backdrop-blur-xl px-8 py-4 rounded-full text-white hover:bg-white hover:text-navy transition-all duration-500 flex items-center gap-2"
          >
            {t("home.exploreServices")}
            <ArrowRight size={18} className="group-hover:translate-x-2 duration-300" />
          </Link>

        </motion.div>

      </div>

    </section>
  );
}