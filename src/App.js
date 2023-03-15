import React, { Component } from "react";
// Switched to hash router to fix deployment with gh-pages https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
      <Footer />
    </Router>
  );
}

export default App;
