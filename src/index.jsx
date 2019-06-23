import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './scenes/Landing';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<Landing />, document.getElementById('root'));


serviceWorker.register();
