import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsxs";
import React from "react";
import Header from "./Conponetes/Header.jsx";
import Footer from "./Conponetes/Footer.jsx";
import WhatsAppButton from "./Conponetes/Whats.jsx";

function App() {
  return (
    <div>
      <Header />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
