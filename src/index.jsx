import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './scenes/Landing';
import * as serviceWorker from './serviceWorker';


const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={Landing} />
  </BrowserRouter>
)


ReactDOM.render(<Router />, document.getElementById('root'));


serviceWorker.register();
