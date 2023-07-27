import React from "react";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("token");
  const admin = localStorage.getItem("adminToken");

  if (user || admin) {
    return true;
  } else {
    return false;
  }
};

const PublicRoutes = ({ children }) => {
  const auth = useAuth();

  return auth ? (
    <Navigate
      to={
        localStorage.getItem("admintoken")
          ? "/admin-dashboard"
          : localStorage.getItem("token")
          ? "/candidate"
          : ""
      }
    />
  ) : (
    children
  );
};

export default PublicRoutes;
