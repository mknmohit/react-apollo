import React from "react";
import { Route, Switch } from "react-router-dom";
import CreatePost from "../../components/CreatePost";
import Homepage from "../../containers/Homepage";
import SinglePost from "../../components/SinglePost";
import NotFound from "../../containers/NotFoundPage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/create" component={CreatePost} />
    <Route exact path="/posts/:postId" component={SinglePost} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
