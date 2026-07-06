import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import clean5 from "../../assets/clean5.jpg";

const ServicesHero = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={clean5}
        alt="Professional Cleaning Services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold mb-6">
          Professional Cleaning Solutions
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Reliable Cleaning
          <br />
          Services You Can Trust
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          We provide professional commercial and residential cleaning services
          using eco-friendly products, trained staff, and modern equipment to
          keep your property spotless.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <Link
            to="/contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg transition flex items-center justify-center gap-2"
          >
            Get Free Quote
            <ArrowRight size={20} />
          </Link>

          <Link
            to="/about"
            className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg transition font-semibold"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;