import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Dogopedia from "../pages/Dogopedia";
import Element from "../pages/Element";
import NoPage from "../pages/NoPage";
import Start from "../pages/Start";
import Login from "../pages/Login";
import Register from "../pages/Register";
import React from "react";


function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="dogopedia" element={<Dogopedia />} />
          <Route path="element" element={<Element />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;