import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Home from "./pages/Home";
import About from "./pages/About";
import ClientsPartners from "./pages/ClientsPartners";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function Placeholder({ title }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 min-h-[50vh]">
      <h1 className="font-display text-3xl text-navy">{title}</h1>
      <p className="text-ink/60 mt-3">
        This page content coming soon.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

         <Route path="/services" element={<Services />} />
         <Route path="/contact" element={<Contact />} />

         <Route
  path="/clients"
  element={<ClientsPartners />}
/>

          <Route
            path="/contact"
            element={<Placeholder title="Contact" />}
          />

        </Routes>
        <Footer />

      </BrowserRouter>
    </LanguageProvider>
    
  );
}