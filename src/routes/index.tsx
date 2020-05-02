import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Start from '../pages/Start';
// import Import from '../pages/Import';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Start} />
  </Switch>
);

export default Routes;
