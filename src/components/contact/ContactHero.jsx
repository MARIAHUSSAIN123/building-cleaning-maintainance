import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import hero from "../../assets/clean5.jpg";

export default function ContactHero() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">

      {/* Background */}
      <img
        src={hero}
        alt="Contact Hills Atcham"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071D31]/95 via-[#071D31]/80 to-[#071D31]/45" />

      {/* Decorative Blur */}
      <div className="absolute -left-32 top-10 w-[420px] h-[420px] bg-green/20 rounded-full blur-[140px]" />
      <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-gold/20 rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="flex items-center gap-3 text-white/70 mb-8"
        >
          <Link to="/" className="hover:text-gold duration-300">
            Home
          </Link>

          <span>/</span>

          <span className="text-gold">
            Contact
          </span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8"
        >
          <PhoneCall size={18} className="text-green" />

          <span className="uppercase tracking-[4px] text-sm text-white">
            Available 24/7
          </span>

        </motion.div>

        {/* Title */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="font-display text-6xl lg:text-8xl font-black text-white leading-none max-w-5xl"
        >
          Let's Build
          <span className="block text-gold mt-2">
            Something Great
          </span>
          Together
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-8 max-w-2xl text-xl leading-9 text-white/75"
        >
          Whether you need commercial cleaning, building maintenance,
          or customized facility solutions, our team is ready to help.
        </motion.p>

        {/* Buttons */}

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
            Get Free Quote
          </Link>

          <Link
            to="/services"
            className="group border border-white/30 backdrop-blur-xl px-8 py-4 rounded-full text-white hover:bg-white hover:text-navy transition-all duration-500 flex items-center gap-2"
          >
            Explore Services

            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 duration-300"
            />

          </Link>

        </motion.div>

      </div>

    </section>
  );
}