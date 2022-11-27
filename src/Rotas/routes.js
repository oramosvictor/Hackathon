import React from "react";
import { Route, BrowserRouter,Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Sobre from "../Pages/Personagens";

export default function Switch() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Sobre />} />
      </Routes>
    );
  }