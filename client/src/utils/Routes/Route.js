import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Home/Home";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";

function RouteScreen() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteScreen;
