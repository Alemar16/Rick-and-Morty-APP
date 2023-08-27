import React from 'react'
import About from "./components/about/About";
import { Navigate, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Favorites from "./components/favorites/Favorites";
import Synopsis from "./synopsis/Synopsis";
import Henry_m2 from "./components/henry_m2/Henry_m2";
import Tecnologies from "./components/tecnologies/Tecnologies";


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
}

export default PrivateRoutes