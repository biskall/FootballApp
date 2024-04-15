import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../index";

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;