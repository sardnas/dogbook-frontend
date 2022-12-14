import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Components/Pages/Register";
import Home from "./Components/Pages/Home";
import Start from "./Components/Pages/Start";
import UnderConstruction from "./Components/Pages/UnderConstruction";
import Breeds from "./Components/Pages/Breeds";
import Profile from "./Components/Pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/start">
            <Start />
          </Route>
          <Route exact path="/construction">
            <UnderConstruction />
          </Route>
          <Route exact path="/breeds">
            <Breeds />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
