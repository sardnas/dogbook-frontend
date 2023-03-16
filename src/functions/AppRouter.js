import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Dogopedia from "../pages/Dogopedia";
import MyDogs from "../pages/MyDogs";
import NoPage from "../pages/NoPage";
import Start from "../pages/Start";
import Login from "../pages/Login";
import Index from "../pages/index.html";
import Register from "../pages/Register";
import React from "react";
import FirstLayout from "../pages/FirstLayout";
import Hello from "../pages/Hello";
import DogDetails from "../pages/DogDetails";


function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstLayout />} >
          <Route index element={<Hello />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path=".well-known/acme-challenge/KIXDiZ2b_xtQHMu6c8D0OY49nS4UvhTFCOngdCN1kfU" element={<Index />} />
        </Route>
        <Route path="user" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="dogopedia" element={<Dogopedia />} />
          <Route path="mydogs" element={<MyDogs />} />
          <Route path="*" element={<NoPage />} />
          <Route path='dogopedia/dog/:Name' exact element={<DogDetails />}></Route>
          <Route path='mydogs/dog/:Name' exact element={<DogDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;