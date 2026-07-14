import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { QuoteModalProvider } from "./context/QuoteModalContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ClientsPartners from "./pages/ClientsPartners";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <QuoteModalProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<ClientsPartners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
          <QuoteModal />
        </BrowserRouter>
      </LanguageProvider>
    </QuoteModalProvider>
  );
}