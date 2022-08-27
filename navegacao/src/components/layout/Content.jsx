import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
 
import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
 
const Content = props => (
  <main className="Content">
    {/* Toda essa parte está diferente da do professor, analisem as diferenças */}
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
    {/* --------------------------------------------------- */}
  </main>
);
 
export default Content;