import React from "react";

import { Routes, Route } from "react-router-dom";
import Dummy from "./components/Dummy";
import About from "./pages/About";


function App() {
  return (
    
    <Routes>
    
      <Route path="/" element={<Dummy />} />
      <Route path="about" element={<About />} />

    </Routes>
  );
}

export default App;
