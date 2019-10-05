import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    // Exact faz com que a path só seja chamada quando for exatamente "/", sem o exact o home ia ser chamado também na hora de chamar /cart por causa da /
    // Switch obriga a que apenas 1 rota seja chamada por momento
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
