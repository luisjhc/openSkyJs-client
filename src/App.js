import React from "react";
import { Switch, Route } from "react-router-dom";
import * as PATHS from "./utils/paths";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={PATHS.HOMEPAGE} component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
