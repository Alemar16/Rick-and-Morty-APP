import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Favorites from "./pages/Favorites";
import Synopsis from "./pages/Synopsis";
import Henry_m2 from "./pages/Henry_m2";
import Tecnologies from "./pages/Tecnologies";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes";
import Login from "./components/login/Login";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
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
