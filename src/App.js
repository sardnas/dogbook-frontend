import './App.css';
import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './Components/Pages/Register';
import Home from './Components/Pages/Home';
import Start from './Components/Pages/Start';

function App() {
  return ( <>
  <Router>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/register">
          <Register />
        </Route>
        <Route exact path = "/start">
          <Start />
        </Route>
      </Switch>
    </Router>
    </>  );
}

export default App;
