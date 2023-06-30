/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  //   This useEffect, will run after intial render, so it will first render return children, then it will run useEffect. This will give error because we still try to access undefined error.

  //   To Solve that, we need to conditionally render children, if isAuthenticated is true, then render children, otherwise, render null.

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
