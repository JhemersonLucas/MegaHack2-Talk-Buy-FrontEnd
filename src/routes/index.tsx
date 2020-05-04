import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Start from '../pages/Start';
import Results from '../pages/Results';
import BaseLayout from '../layout/Base';
import Product from '../pages/Product';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
// import Import from '../pages/Import';

const Routes: React.FC = () => (
  <BaseLayout>
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/results" exact component={Results} />
      <Route path="/product" exact component={Product} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BaseLayout>
);

export default Routes;
