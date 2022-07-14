import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";




export const useProtectedtPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        alert('Você precisa de Login e senha para acesso!');
        navigate("/login");
      }
    }, [navigate]);
  
  }