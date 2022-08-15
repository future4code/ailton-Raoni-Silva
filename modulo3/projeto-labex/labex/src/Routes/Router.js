import React from "react";
import Home from "../Pages/Home";
import ListTripsPage from "../Pages/ListTripsPage";
import LoginPage from "../Pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import TripDetailsPage from "../Pages/TripDetailsPage";
import AdminHomePage from "../Pages/AdminHomePage";
import CreateTripPage from "../Pages/CreateTripPage";
import Pagina404 from "../Pages/Pagina404";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="listas" element={<ListTripsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/listas/inscricao" element={<ApplicationFormPage />} />
        <Route path="/tripdetails/:id" element={<TripDetailsPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="admin/create" element={<CreateTripPage />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
};
