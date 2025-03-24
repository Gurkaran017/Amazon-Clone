import React, { useState, useEffect } from "react";
import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Router>
          {/* <Navbar />
          <CustomSlider />
          <Bottom /> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signIn" element={<SignIn />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
