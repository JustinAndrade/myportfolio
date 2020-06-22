import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import { Home, About, Contact, Projects, Recommendations } from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App" class="container mx-auto">
        <Navbar />

        {/* Router switch to define routes */}
        <Switch>
          <Route path="/">
            <Home />
            <About />
            <Projects />
            <Recommendations />
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
