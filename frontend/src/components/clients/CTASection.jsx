import { useLanguage } from "../../context/LanguageContext";

function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#0D2A47] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          {t("cta.heading")}
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          {t("cta.desc")}
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-[#0D2A47] px-8 py-3 rounded-full font-semibold transition duration-300">
          {t("cta.contactBtn")}
        </button>
      </div>
    </section>
  );
}

export default CTASection;