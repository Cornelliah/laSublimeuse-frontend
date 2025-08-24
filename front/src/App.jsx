import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./sections/Home/Home";
import Portfolio from "./sections/Portfolio/Portfolio";
import Services from "./sections/Services/Services";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
