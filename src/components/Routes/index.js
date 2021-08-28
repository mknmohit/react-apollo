import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CreateLink from "../../components/CreateLink";
import LinkList from "../../components/LinkList";

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/new/1" />} />
    <Route exact path="/create" component={CreateLink} />
    <Route exact path="/top" component={LinkList} />
    <Route exact path="/new/:page" component={LinkList} />
  </Switch>
);

export default Routes;
