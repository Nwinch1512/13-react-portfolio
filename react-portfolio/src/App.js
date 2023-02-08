import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Projectspage from "./components/Projectspage";
import Contactspage from "./components/Contactspage";

function App() {
  return (
    <div>
      <Header />
      <Homepage />
      <Projectspage />
      <Contactspage />
    </div>
  );
}

export default App;
