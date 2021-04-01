import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/screens/Home";
import Leaderboard from "./components/screens/Leaderboard";
import Champions from "./components/screens/Champions";
import Reports from "./components/screens/Reports";
import News from "./components/screens/News";

import { SettingsContextProvider } from "./contexts/SettingsContext";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <SettingsContextProvider>
          <Navbar />
          <Route path="/" component={Home} exact />
          <Route path="/leaderboard" component={Leaderboard} exact />
          <Route path="/champions" component={Champions} exact />
          <Route path="/reports" component={Reports} exact />
          <Route path="/news" component={News} exact />
        </SettingsContextProvider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
