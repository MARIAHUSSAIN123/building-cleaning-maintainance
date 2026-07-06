import {
  Building2,
  Home,
  Sparkles,
  BrushCleaning,
  ShowerHead,
  Warehouse,
  Hammer,
  Waves,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: <Building2 size={40} />,
    title: "Commercial Cleaning",
    desc: "Professional cleaning solutions for offices, buildings and businesses.",
  },
  {
    icon: <Home size={40} />,
    title: "Residential Cleaning",
    desc: "Complete home cleaning services for a healthier living environment.",
  },
  {
    icon: <Sparkles size={40} />,
    title: "Office Cleaning",
    desc: "Daily and scheduled office cleaning with attention to detail.",
  },
  {
    icon: <BrushCleaning size={40} />,
    title: "Carpet Cleaning",
    desc: "Deep carpet cleaning to remove dirt, stains and allergens.",
  },
  {
    icon: <ShowerHead size={40} />,
    title: "Window Cleaning",
    desc: "Crystal-clear interior and exterior window cleaning services.",
  },
  {
    icon: <Warehouse size={40} />,
    title: "Industrial Cleaning",
    desc: "Reliable warehouse and industrial facility cleaning solutions.",
  },
  {
    icon: <Hammer size={40} />,
    title: "Post Construction",
    desc: "Complete cleanup after renovation and construction projects.",
  },
  {
    icon: <Waves size={40} />,
    title: "Pressure Washing",
    desc: "Power washing for sidewalks, driveways and exterior surfaces.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Sanitization",
    desc: "Safe and effective disinfection services for every environment.",
  },
];

const ServicesList = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            What We Offer
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Our Cleaning Services
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            We provide professional cleaning and maintenance solutions
            tailored to commercial, residential and industrial properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-white transition">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.desc}
              </p>

              <button className="mt-6 text-yellow-500 font-semibold hover:text-black transition">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;