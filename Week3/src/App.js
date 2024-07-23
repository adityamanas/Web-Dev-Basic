import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";
import Landing from "./Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
