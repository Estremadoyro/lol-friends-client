import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/screens/Home";
import Leaderboard from "./components/screens/Leaderboard";
import Champions from "./components/screens/Champions";
import Reports from "./components/screens/Reports";
import News from "./components/screens/News";
import ImageDownloadComponent from "./components/ImageDownloadComponent";

import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import { loadRegionAction } from "./actions/regionAction";

function App() {
  useEffect(() => {
    store.dispatch(loadRegionAction());
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <BrowserRouter>
          <Navbar />
          <Route path="/" component={Home} exact />
          <Route path="/leaderboard" component={Leaderboard} exact />
          <Route path="/champions" component={Champions} exact />
          <Route path="/reports" component={Reports} exact />
          <Route path="/news" component={News} exact />
          <Route path="/test" component={ImageDownloadComponent} exact />
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
