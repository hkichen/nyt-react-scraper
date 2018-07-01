import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import MainBody from "./components/MainBody";

const App = () =>
  <Router>
    <div>
      <Route path="/" component={MainBody} />
    </div>
  </Router>;

export default App;
