import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateLink from "../../components/CreateLink";
import LinkList from "../../components/LinkList";
import Homepage from "../../containers/Homepage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/create" component={CreateLink} />
    <Route exact path="/top" component={LinkList} />
    <Route exact path="/new/:page" component={LinkList} />
  </Switch>
);

export default Routes;
