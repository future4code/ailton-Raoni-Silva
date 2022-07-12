import React from "react";
import Home from "../Pages/Home"
import ListTripsPage from "../Pages/ListTripsPage";
import LoginPage from "../Pages/LoginPage";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ApplicationFormPage from "../Pages/ApplicationFormPage"


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="listas" element={<ListTripsPage />} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="/listas/inscricao" element={<ApplicationFormPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
