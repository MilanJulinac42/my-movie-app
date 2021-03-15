import "./App.css";
import React, { useState, useEffect } from "react";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EntityPage from "./components/EntityPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/EntityPage/:entityType/:id" component={EntityPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
