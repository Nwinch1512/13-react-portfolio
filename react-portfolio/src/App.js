import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Projectspage from "./components/Projectspage";
import Contactspage from "./components/Contactspage";
import projects from "./projects.json";

function App() {
  return (
    <main>
      {/* <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/Contactspage" component={Contactspage} />
        <Route path="/" component={Homepage} exact />
      </Switch> */}
      <Header />
      <Homepage />
      <Projectspage />
      <Contactspage />
    </main>
  );
}

export default App;
