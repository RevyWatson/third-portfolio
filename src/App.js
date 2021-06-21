import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
}

  from "react-router-dom";
import Gallery from "./pages/Projects";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Nav />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
