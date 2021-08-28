import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CreateLink from "../../components/CreateLink";
import Header from "../../components/Header";
import LinkList from "../../components/LinkList";
import Routes from "../../components/Routes";

const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Routes />
    </div>
  </div>
);

export default App;
