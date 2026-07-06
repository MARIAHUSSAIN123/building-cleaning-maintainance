import clean4 from "../../assets/clean4.jpg";

const ServicesIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          <span className="text-yellow-500 uppercase font-semibold tracking-widest">
            Our Services
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Professional Cleaning &
            <br />
            Building Maintenance
          </h2>

          <p className="text-gray-600 mt-8 text-lg leading-8">
            At Hills Atcham, we provide reliable commercial and residential
            cleaning solutions tailored to your needs. Our experienced team
            uses modern equipment and eco-friendly products to ensure every
            space is clean, safe, and welcoming.
          </p>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Whether you need office cleaning, post-construction cleanup,
            carpet care, or routine maintenance, our professionals deliver
            consistent quality with attention to every detail.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="bg-yellow-50 p-5 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-yellow-500">
                10+
              </h3>
              <p className="text-gray-700 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-yellow-500">
                500+
              </h3>
              <p className="text-gray-700 mt-2">
                Happy Clients
              </p>
            </div>

          </div>
        </div>

        {/* Right Image */}

        <div className="relative">

          <img
            src={clean4}
            alt="Cleaning Services"
            className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
          />

          <div className="absolute bottom-8 left-8 bg-yellow-400 text-black px-6 py-5 rounded-2xl shadow-xl">

            <h3 className="text-3xl font-bold">
              100%
            </h3>

            <p className="font-semibold">
              Satisfaction
              <br />
              Guaranteed
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesIntro;