import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import ScrollToTop from "./components/ScrollToTop";

import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
