import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import About from "./screens/About.jsx";
import Projects from "./screens/Projects";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/projects"
          element={<Projects />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
