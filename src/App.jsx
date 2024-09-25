import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Placeholder from "./pages/Placeholder";

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
    // <Router>
    //   <Routes>
    //     <Route />
    //   </Routes>
    // </Router>
  );
}

export default App;
