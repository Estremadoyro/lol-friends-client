import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/screens/Home";
import Leaderboard from "./components/screens/Leaderboard";
import Champions from "./components/screens/Champions";

import { SettingsContextProvider } from "./contexts/SettingsContext";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <SettingsContextProvider>
          <Navbar />
          <Route path="/" component={Home} exact />
          <Route path="/leaderboard" component={Leaderboard} exact />
          <Route path="/champions" component={Champions} exact />
        </SettingsContextProvider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
