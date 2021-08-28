import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CreateLink from '../../components/CreateLink';
import Header from '../../components/Header';
import LinkList from '../../components/LinkList';

const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/new/1" />}
        />

        <Route
          exact
          path="/create"
          component={CreateLink}
        />
        <Route exact path="/top" component={LinkList} />
        <Route
          exact
          path="/new/:page"
          component={LinkList}
        />
      </Switch>
    </div>
  </div>
);

export default App;
