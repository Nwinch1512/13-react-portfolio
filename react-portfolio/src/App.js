import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/Header";
import Homepage from "./components/Homepage";
import Projectspage from "./components/Projectspage";
import Contactspage from "./components/Contactspage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/project" element={<Projectspage />} />
            <Route path="/contact" element={<Contactspage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
