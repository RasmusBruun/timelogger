import React from "react";
import Project from "./views/Project";
import Dashboard from "./views/Dashboard";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
            <div className="container">
              <a className="navbar-brand" href="/">
                Timelogger
              </a>
            </div>
          </nav>
        </header>

        <main>
          <Router>
            <div className="container">
              <Route exact path="/" component={Dashboard} />
              <Route path="/project/:id" component={Project} />
            </div>
          </Router>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
