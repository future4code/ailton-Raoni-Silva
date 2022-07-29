import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToPage } from "../routes/coordinator";




export const useProtectedtPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        alert('Você precisa de Login e senha para acesso!');
        goToPage(navigate,"/");
      }
    }, [navigate]);
  
  }

