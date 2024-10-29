import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return user && user.token ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
