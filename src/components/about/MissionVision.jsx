import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To provide exceptional cleaning and building maintenance services that create healthier, safer, and more productive environments for every client.",
    color: "from-green to-green-light",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To become Canada's most trusted cleaning and facility maintenance company through innovation, consistency, and customer satisfaction.",
    color: "from-gold to-yellow-500",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    desc: "Integrity, professionalism, teamwork, and excellence are the foundation of everything we do.",
    color: "from-navy to-slate-700",
  },
];

export default function MissionVision() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[5px] text-green font-semibold">
            Our Purpose
          </span>

          <h2 className="font-display text-5xl font-black text-navy mt-5">
            Mission, Vision &
            <span className="text-gold"> Values</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            Everything we do is driven by our commitment to quality,
            trust and long-term partnerships with our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="relative overflow-hidden rounded-[30px] bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >

                {/* Top Gradient */}
                <div
                  className={`h-2 bg-gradient-to-r ${card.color}`}
                />

                <div className="p-10">

                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg mb-8 group-hover:rotate-6 duration-300`}
                  >
                    <Icon className="text-white" size={38} />
                  </div>

                  <h3 className="text-3xl font-bold text-navy mb-5">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 leading-8">
                    {card.desc}
                  </p>

                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green/5 to-gold/5 opacity-0 group-hover:opacity-100 transition duration-500" />

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}