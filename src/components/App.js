import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LegoGame from "../routes/legoGame";
import FpsGame from "../routes/fpsGame";
import JumpGame from "../routes/jumpGame";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Dashboard>
      <Routes>
        <Route path="/" element={<JumpGame />} />
        <Route path="jumpGame" element={<JumpGame />} />
        <Route path="legoGame" element={<LegoGame />} />
        <Route path="fpsGame" element={<FpsGame />} />
      </Routes>
    </Dashboard>
  );
}

export default App;
