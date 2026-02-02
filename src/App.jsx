import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Conponetes/Header.jsx";
import Footer from "./Conponetes/Footer.jsx";
import WhatsAppButton from "./Conponetes/Whats.jsx";
import Home from "./Pages/Home.jsx";
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
