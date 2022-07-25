import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagina404 from "../pages/ErrorPage/Pagina404";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index  element={<LoginPage />} />
        <Route path="/feed" element={<FeedPage />} />
         <Route path="/cadastrar" element={<SignUpPage />} />
        <Route path="post" element={<PostPage />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
