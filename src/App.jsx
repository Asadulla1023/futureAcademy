import React from "react";
import Navigation from "./components/Navigation/Navigation";

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components";

import './styles/global.css'

function App() {
  return (
    <div className="App">
        <Navigation />
      <div className="routers">
        <div className="container">
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
