import React from "react";
import Login from "./components/Login";
import LoginComponent from "./components/LoginComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginComponent} />
          <Route exact path="/weather" component={Weather} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
