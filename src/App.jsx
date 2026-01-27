import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import MainNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Brands from "./pages/Brands";
import Regions from "./pages/Regions";
import Contact from "./pages/Contact";

/* ================= SCROLL TO TOP ================= */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [exitLoader, setExitLoader] = useState(false);

  /* ================= LOADER TIMING ================= */
  useEffect(() => {
    const travelTimer = setTimeout(() => {
      setExitLoader(true); // trigger logo travel animation
    }, 2200);

    const removeLoader = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(travelTimer);
      clearTimeout(removeLoader);
    };
  }, []);

  /* ================= SHOW LOADER ================= */
  if (loading) {
    return <Loader exit={exitLoader} />;
  }

  /* ================= APP ================= */
  return (
    <>
      <MainNavbar />

      {/* Ensures every route scrolls to top */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
