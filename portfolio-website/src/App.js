import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Header from "./components/Header";

const Contents = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px 0;
`;

function App() {
  return (
    <Router>
      <Header />
      <Contents>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Contents>
    </Router>
  );
}

export default App;
