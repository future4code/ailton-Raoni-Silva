import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToPage } from "../routes/coordinator";


export const useUnprotectedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToPage(navigate, "/feed");
    }
  }, [navigate]);
};
