import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default PrivateRoutes;
