import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import React from "react";
import Header from "./Conponetes/Header";
import Footer from "./Conponetes/Footer";
import WhatsAppButton from "./Conponetes/Whats";

function App() {
  return (
    <div>
      <Header />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
