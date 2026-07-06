import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Clock,
} from "lucide-react";

import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#071D31] text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-24 left-0 w-72 h-72 bg-green/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 right-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <img
              src={logo}
              alt="Hills Atcham"
              className="w-44 mb-6"
            />

            <p className="text-white/70 leading-8">
              Hills Atcham provides dependable cleaning and building
              maintenance services with professionalism, reliability,
              and excellence across Calgary and surrounding areas.
            </p>

            {/* Business Hours */}

            <div className="mt-8">

              <div className="flex items-center gap-2 mb-4">

                <Clock className="text-green" size={20} />

                <h4 className="text-lg font-semibold">
                  Business Hours
                </h4>

              </div>

              <div className="space-y-2 text-white/70">

                <p>Monday – Friday</p>
                <p>8:00 AM – 6:00 PM</p>

                <p className="pt-2">Saturday</p>
                <p>9:00 AM – 2:00 PM</p>

                <p className="pt-2">Sunday</p>
                <p>Closed</p>

              </div>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">

              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Clients & Partners", "/clients"],
                ["Contact", "/contact"],
              ].map(([name, path]) => (

                <Link
                  key={name}
                  to={path}
                  className="flex items-center gap-2 text-white/70 hover:text-gold transition group"
                >
                  {name}

                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  />

                </Link>

              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Our Services
            </h3>

            <div className="space-y-4 text-white/70">

              <p>Commercial Cleaning</p>

              <p>Residential Cleaning</p>

              <p>Building Maintenance</p>

              <p>Janitorial Services</p>

              <p>Deep Cleaning</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Phone className="text-green mt-1" size={20} />

                <div>

                  <p className="font-medium">
                    Phone
                  </p>

                  <p className="text-white/70">
                    +1 (403) 458-0219
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Mail className="text-green mt-1" size={20} />

                <div>

                  <p className="font-medium">
                    Email
                  </p>

                  <p className="text-white/70 break-all">
                    ernestine.bissou@hillsatcham.com
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <MapPin className="text-green mt-1" size={20} />

                <div>

                  <p className="font-medium">
                    Address
                  </p>

                  <p className="text-white/70">
                    Panorama Hills Heights NW
                    <br />
                    Calgary, Alberta
                    <br />
                    Canada
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-white/60 text-sm text-center md:text-left">
              © 2026 Hills Atcham. All Rights Reserved.
            </p>

            <p className="text-white/50 text-sm">
              Designed with professionalism & care.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}