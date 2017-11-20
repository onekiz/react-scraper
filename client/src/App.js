import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./page/Home.js";
import Nav from "./components/Nav.js";
import Jumbotron from "./components/Jumbotron.js";
import SignUp from "./page/SignUp.js";
import LogIn from "./page/LogIn.js";


class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Nav />
          <Jumbotron />
          <Switch>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Home} />
          </Switch>
          <userLogin/>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
