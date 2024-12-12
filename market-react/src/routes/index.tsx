// test?
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Resumen from "../pages/Resumen";
import React from 'react';

const RoutesComponent = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/resumen" element={<Resumen />} /> 
      </Routes>
  );
};

export default RoutesComponent;
