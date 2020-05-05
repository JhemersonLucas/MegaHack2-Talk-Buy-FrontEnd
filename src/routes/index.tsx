import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Start from '../pages/Start';
import Results from '../pages/Results';
import BaseLayout from '../layout/Base';
import Product from '../pages/Product';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Register from '../pages/Register';
import ConfirmData from '../pages/ConfirmData';
import ConfirmPayment from '../pages/ConfirmPayment';
import Payment from '../pages/Payment';
import Finish from '../pages/Finish';
// import Import from '../pages/Import';

const Routes: React.FC = () => (
  <BaseLayout>
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/results" exact component={Results} />
      <Route path="/product" exact component={Product} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/login" exact component={Login} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/register" exact component={Register} />
      <Route path="/confirm-data" exact component={ConfirmData} />
      <Route path="/payment" exact component={Payment} />
      <Route path="/confirm-payment" exact component={ConfirmPayment} />
      <Route path="/finish" exact component={Finish} />
    </Switch>
  </BaseLayout>
);

export default Routes;
