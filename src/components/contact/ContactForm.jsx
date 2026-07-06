import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  Send,
} from "lucide-react";

export default function ContactForm() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="uppercase tracking-[5px] text-green font-semibold">
            Send Us A Message
          </span>

          <h2 className="text-5xl font-black text-navy mt-4">
            We'd Love To Hear From You
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
            Fill out the form below and our team will get back to you as
            soon as possible.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[35px] shadow-2xl overflow-hidden grid lg:grid-cols-5"
        >

          {/* LEFT SIDE */}

          <div className="lg:col-span-2 bg-navy text-white p-12 relative overflow-hidden">

            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-green/20 blur-[120px]" />

            <h3 className="text-3xl font-bold">
              Why Contact Hills Atcham?
            </h3>

            <p className="text-white/70 leading-8 mt-6">
              Whether you need commercial cleaning, residential cleaning,
              or complete building maintenance, we're here to provide
              reliable solutions tailored to your business.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green flex items-center justify-center">
                  ✓
                </div>

                <p>Free Consultation & Estimate</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green flex items-center justify-center">
                  ✓
                </div>

                <p>Professional & Experienced Team</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green flex items-center justify-center">
                  ✓
                </div>

                <p>Reliable & On-Time Service</p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="lg:col-span-3 p-12">

            <form className="space-y-7">

              <div className="grid md:grid-cols-2 gap-6">

                <div className="relative">

                  <User className="absolute left-5 top-5 text-gray-400" size={20}/>

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 focus:border-green outline-none transition"
                  />

                </div>

                <div className="relative">

                  <Mail className="absolute left-5 top-5 text-gray-400" size={20}/>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 focus:border-green outline-none transition"
                  />

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="relative">

                  <Phone className="absolute left-5 top-5 text-gray-400" size={20}/>

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 focus:border-green outline-none transition"
                  />

                </div>

                <div className="relative">

                  <Building2 className="absolute left-5 top-5 text-gray-400" size={20}/>

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 focus:border-green outline-none transition"
                  />

                </div>

              </div>

              <div className="relative">

                <MessageSquare
                  className="absolute left-5 top-5 text-gray-400"
                  size={20}
                />

                <textarea
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 focus:border-green outline-none resize-none transition"
                />

              </div>

              <button
                type="submit"
                className="group bg-green hover:bg-green-light text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Send Message

                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

            </form>

          </div>

        </motion.div>

      </div>

    </section>
  );
}