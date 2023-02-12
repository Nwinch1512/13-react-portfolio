import React, { Component } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Projectspage from "./pages/Projectspage";
import Contactspage from "./pages/Contactspage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="project" element={<Projectspage />} />
            <Route path="contact" element={<Contactspage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
