import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav'

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>

      <div className="App">
        <Nav/>
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
