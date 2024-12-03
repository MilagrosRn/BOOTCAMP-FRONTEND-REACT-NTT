import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Resumen from "../pages/Resumen";
import React from 'react';
import withAuth from "../HOC/withAuth";
import Login from "../pages/Login";
import { useAuth } from "../context/authContext.tsx/authContext";

export const RoutesComponent = () => {
  const { isAuthenticated } = useAuth();

  const ProtectedResumen = withAuth(Resumen);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/resumen"
        element={<ProtectedResumen isAuthenticated={isAuthenticated} />}
      />
    </Routes>
  );
};