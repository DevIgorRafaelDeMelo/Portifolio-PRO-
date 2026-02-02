import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
