import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Resumen from "../pages/Resumen";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/resumen" element={<Resumen />} /> 
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
