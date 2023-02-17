import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Dogopedia from "../pages/Dogopedia";
import MyDogs from "../pages/MyDogs";
import NoPage from "../pages/NoPage";
import Start from "../pages/Start";
import Login from "../pages/Login";
import Register from "../pages/Register";
import React from "react";
import FirstLayout from "../pages/FirstLayout";
import Hello from "../pages/Hello";


function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstLayout />} >
          <Route index element={<Hello />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="user" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="dogopedia" element={<Dogopedia />} />
          <Route path="mydogs" element={<MyDogs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;