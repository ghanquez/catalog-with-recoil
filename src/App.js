import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./layout/header";
import Catalog from "./components/catalog";
import Cart from "./components/cart";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router basename="/">
        <Header />
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
