import React from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import SecondPage from "./Pages/SecondPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
