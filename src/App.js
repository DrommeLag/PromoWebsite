import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
