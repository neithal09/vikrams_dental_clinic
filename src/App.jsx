import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AboutDoctorPage from "./pages/AboutDoctorPage";
import ServicesPage from "./pages/ServicesPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import Footer from "./components/Footer/Footer";
import SideButtons from "./components/SideButtons/SideButtons";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-doctor" element={<AboutDoctorPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
        </Routes>
        <Footer />
        <SideButtons />
      </div>
    </Router>
  );
}

export default App;
