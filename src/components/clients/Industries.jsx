import { motion } from "framer-motion";
import {
  Building2,
  Hospital,
  GraduationCap,
  ShoppingBag,
  Hotel,
  Warehouse,
} from "lucide-react";

const industries = [
  {
    icon: <Building2 size={42} />,
    title: "Corporate Offices",
    text: "Professional cleaning services for office buildings and corporate spaces.",
  },
  {
    icon: <Hospital size={42} />,
    title: "Healthcare",
    text: "Maintaining hygienic environments for hospitals and healthcare facilities.",
  },
  {
    icon: <GraduationCap size={42} />,
    title: "Education",
    text: "Reliable cleaning solutions for schools, colleges, and universities.",
  },
  {
    icon: <ShoppingBag size={42} />,
    title: "Retail",
    text: "Creating clean and welcoming shopping environments for customers.",
  },
  {
    icon: <Hotel size={42} />,
    title: "Hospitality",
    text: "Premium housekeeping and maintenance for hotels and resorts.",
  },
  {
    icon: <Warehouse size={42} />,
    title: "Industrial",
    text: "Comprehensive cleaning services for warehouses and industrial facilities.",
  },
];

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-green-600 font-semibold uppercase tracking-widest">
            Industries We Serve
          </p>

          <h2 className="text-4xl font-bold text-[#0E2A47] mt-3">
            Trusted Across Multiple Industries
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
            Hills Atcham provides reliable cleaning and building maintenance
            services for organizations of every size across Canada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {industries.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .12,
                duration: .6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 text-center"
            >

              <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#0E2A47] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}