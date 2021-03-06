import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { Home, About, Contact, Projects, Recommendations } from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App" class="px-4 xlg:px-0 container mx-auto">
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
