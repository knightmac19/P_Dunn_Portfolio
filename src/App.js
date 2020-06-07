import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/P_Dunn_Portfolio" component={Main} />
      </div>
    </Router>
  );
}

export default App;
