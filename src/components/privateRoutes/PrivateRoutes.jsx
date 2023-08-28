//import React from 'react'

import About from "../../pages/About";
import { Navigate, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites";
import Synopsis from "../../pages/Synopsis";
import Henry_m2 from "../../pages/Henry_m2";
import Tecnologies from "../../pages/Tecnologies";

const PrivateRoutes = () => {
  return (
    <div>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/synopsis" element={<Synopsis />} />
      <Route path="/henry_m2" element={<Henry_m2 />} />
      <Route path="/tecnologies" element={<Tecnologies />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </div>
  );
};

export default PrivateRoutes;
