import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "src/pages/main";
import Error from "src/pages/error";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
