import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
          </Route>
          <Route path="/projects">
            <Navbar />
            <Projects />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
