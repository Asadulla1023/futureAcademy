import React from "react";
import Navigation from "./components/Navigation/Navigation";

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="routers">
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
