import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Favorites from "./components/favorites/Favorites";
import Synopsis from "./synopsis/Synopsis";
import Henry_m2 from "./components/henry_m2/Henry_m2";
import Tecnologies from "./components/tecnologies/Tecnologies";
import About from "./components/about/About";
import Error404 from "./components/error404/Error404";
import Login from "./components/login/Login";
import Signup from "./components/login/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/synopsis" element={<Synopsis />} />
        <Route path="/henry_m2" element={<Henry_m2 />} />
        <Route path="/tecnologies" element={<Tecnologies />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
