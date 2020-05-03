import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Start from '../pages/Start';
import Product from '../pages/Product';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Start} />
    <Route path="/product" component={Product} />
  </Switch>
);

export default Routes;
