import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/index";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
