import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";




export const useLoginAdm = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token) {
        navigate("/admin");
      }
    }, [navigate]);
  
  }