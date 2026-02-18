import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_API_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />  {/* ← move inside Routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
