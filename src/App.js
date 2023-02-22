import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./functions/AppRouter";
import React from "react";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
