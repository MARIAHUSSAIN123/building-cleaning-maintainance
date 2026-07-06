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
import { useLanguage } from "../../context/LanguageContext";

const ServicesList = () => {
  const { t } = useLanguage();

  const services = [
    { icon: <Building2 size={40} />, title: t("servicesList.s1Title"), desc: t("servicesList.s1Desc") },
    { icon: <Home size={40} />, title: t("servicesList.s2Title"), desc: t("servicesList.s2Desc") },
    { icon: <Sparkles size={40} />, title: t("servicesList.s3Title"), desc: t("servicesList.s3Desc") },
    { icon: <BrushCleaning size={40} />, title: t("servicesList.s4Title"), desc: t("servicesList.s4Desc") },
    { icon: <ShowerHead size={40} />, title: t("servicesList.s5Title"), desc: t("servicesList.s5Desc") },
    { icon: <Warehouse size={40} />, title: t("servicesList.s6Title"), desc: t("servicesList.s6Desc") },
    { icon: <Hammer size={40} />, title: t("servicesList.s7Title"), desc: t("servicesList.s7Desc") },
    { icon: <Waves size={40} />, title: t("servicesList.s8Title"), desc: t("servicesList.s8Desc") },
    { icon: <ShieldCheck size={40} />, title: t("servicesList.s9Title"), desc: t("servicesList.s9Desc") },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            {t("servicesList.tag")}
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            {t("servicesList.heading")}
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            {t("servicesList.desc")}
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
                {t("servicesList.learnMoreLink")} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;