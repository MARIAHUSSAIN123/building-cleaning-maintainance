import { motion } from "framer-motion";
import {
  Building2,
  HeartPulse,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Hotel,
} from "lucide-react";

const partners = [
  {
    name: "Commercial Buildings",
    icon: Building2,
    desc: "Delivering exceptional cleaning solutions with reliability, professionalism, and long-term partnerships.",
  },
  {
    name: "Healthcare Facilities",
    icon: HeartPulse,
    desc: "Maintaining the highest hygiene standards for clinics, care homes, and medical spaces.",
  },
  {
    name: "Corporate Offices",
    icon: Briefcase,
    desc: "Keeping workplaces spotless and professional for teams and clients alike.",
  },
  {
    name: "Educational Institutions",
    icon: GraduationCap,
    desc: "Safe, clean learning environments for students and staff throughout the year.",
  },
  {
    name: "Retail Stores",
    icon: ShoppingBag,
    desc: "Presentable, welcoming spaces that leave a lasting impression on customers.",
  },
  {
    name: "Hospitality Industry",
    icon: Hotel,
    desc: "Consistent, detail-oriented service for hotels, venues, and guest spaces.",
  },
];

export default function FeaturedPartners() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-green-600 font-semibold uppercase tracking-widest">
            Trusted Across Canada
          </p>
          <h2 className="text-4xl font-bold text-[#0E2A47] mt-3">
            Featured Clients & Partners
          </h2>
          <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
            We proudly serve businesses from multiple industries with
            professional cleaning and building maintenance services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              >
                <div className="h-72 bg-gradient-to-br from-navy to-green flex items-center justify-center relative overflow-hidden">
                  <div className="absolute -inset-10 bg-white/5 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                  <Icon size={72} className="text-white relative" strokeWidth={1.5} />
                </div>

                <div className="p-7 text-center">
                  <h3 className="text-2xl font-semibold text-[#0E2A47]">
                    {partner.name}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-7">
                    {partner.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
