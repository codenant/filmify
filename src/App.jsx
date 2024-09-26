import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FilmDetails from "./pages/FilmDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:imdbID" element={<FilmDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
