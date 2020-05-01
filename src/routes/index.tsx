import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
// import Import from '../pages/Import';
import SignIn from '../pages/SingIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/login" component={SignIn} />
  </Switch>
);

export default Routes;
