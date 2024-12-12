// falta test
import React from "react";
import { Navigate } from "react-router-dom";

interface WithAuthProps {
  isAuthenticated: boolean; 
}

const withAuth = (Component: React.ComponentType) => {
  return (props: WithAuthProps) => {
    const { isAuthenticated, ...rest } = props;

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return <Component {...rest} />;
  };
};

export default withAuth;
