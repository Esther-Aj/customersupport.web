import React from "react";

import { Routes, Route } from "react-router-dom";
import Dummy from "./components/Dummy";
import About from "./components/About";


function App() {
  return (
    
    <Routes>
      <About/>
      <Route path="/" element={<Dummy />} />

    </Routes>
  );
}

export default App;
