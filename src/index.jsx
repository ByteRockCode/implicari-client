import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './scenes/Landing';
import Login from './scenes/Login';
import ClassroomList from './scenes/ClassroomList';
import client from './ApolloClient';
import * as serviceWorker from './serviceWorker';


const Router = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/iniciar-sesion" component={Login} />
      <Route exact path="/salas-de-clases" component={ClassroomList} />
    </BrowserRouter>
  </ApolloProvider>
)


ReactDOM.render(<Router />, document.getElementById('root'));


serviceWorker.register();
