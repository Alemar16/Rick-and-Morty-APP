import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
// pages
import Navbar from "../components/navbar/Navbar";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Synopsis from "../pages/Synopsis";
import Henry_m2 from "../pages/Henry_m2";
import Tecnologies from "../pages/Tecnologies";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import { UserAuth } from "../context/AuthContext";
import Login2 from "../pages/Login2";

export const MyRoutes = () => {
  const { user } = UserAuth();
  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };
  return (
    <>
      {user ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login2 />} /> 

        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoutes>
              <Favorites />
            </PrivateRoutes>
          }
        />
        <Route
          path="/synopsis"
          element={
            <PrivateRoutes>
              <Synopsis />
            </PrivateRoutes>
          }
        />
        <Route
          path="/henry_m2"
          element={
            <PrivateRoutes>
              <Henry_m2 />
            </PrivateRoutes>
          }
        />
        <Route
          path="/tecnologies"
          element={
            <PrivateRoutes>
              <Tecnologies />
            </PrivateRoutes>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoutes>
              <About />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}