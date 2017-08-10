import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Form from './components/Form';
import Data from './components/Data';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/form" component={Form} />
        <Route path="/data" component={Data} />
      </Switch>
    </BrowserRouter>,
  document.querySelector('#app')
);