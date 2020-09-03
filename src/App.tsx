import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Tasks from "./pages/Tasks";
import About from "./pages/About";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={Tasks} path="/" exact />
          <Route component={About} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
