import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

import Main from './pages/Main'
import Cadastro from './pages/Cadastro'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/cadastro" component={Cadastro} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
