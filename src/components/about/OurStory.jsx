import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import story1 from "../../assets/clean1.jpg";
import story2 from "../../assets/clean2.jpg";

const points = [
  "Professional Cleaning Experts",
  "Eco-Friendly Cleaning Solutions",
  "Commercial & Residential Services",
  "Reliable Building Maintenance",
];

export default function OurStory() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGES */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <img
              src={story1}
              alt=""
              className="rounded-[30px] shadow-2xl w-[90%] h-[620px] object-cover"
            />

            <img
              src={story2}
              alt=""
              className="absolute -bottom-12 right-0 w-[55%] rounded-[25px] border-8 border-white shadow-2xl"
            />

            {/* Floating Card */}

            <div className="absolute top-10 -right-10 bg-white rounded-3xl shadow-2xl px-8 py-6">

              <h2 className="text-5xl font-black text-green">
                15+
              </h2>

              <p className="mt-2 font-semibold text-navy">
                Years Experience
              </p>

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <span className="uppercase tracking-[5px] text-green font-semibold">
              Our Story
            </span>

            <h2 className="font-display text-5xl lg:text-6xl font-black text-navy mt-5 leading-tight">

              Building Cleaner
              <span className="block text-gold">
                Spaces Since Day One
              </span>

            </h2>

            <p className="mt-8 text-gray-600 leading-9">

              Hills Atcham was founded with one clear mission —
              to provide dependable cleaning and building maintenance
              services that businesses and homeowners can trust.

              We believe every clean environment creates healthier,
              happier and more productive spaces for everyone.

            </p>

            <p className="mt-6 text-gray-600 leading-9">

              Our experienced team combines modern equipment,
              eco-friendly practices and attention to detail to
              deliver exceptional cleaning results every single time.

            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {points.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={22}
                    className="text-green"
                  />

                  <span className="font-medium text-navy">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Button */}

            <button className="mt-12 bg-green hover:bg-green-light text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl">

              Learn More

            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}