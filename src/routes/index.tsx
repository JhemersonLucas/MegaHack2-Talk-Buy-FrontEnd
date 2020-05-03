import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Start from '../pages/Start';
import Results from '../pages/Results';
import BaseLayout from '../layout/Base';
// import Import from '../pages/Import';

const Routes: React.FC = () => (
  <BaseLayout>
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/results" exact component={Results} />
    </Switch>
  </BaseLayout>
);

export default Routes;
