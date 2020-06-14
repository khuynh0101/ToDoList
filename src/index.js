import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PageNotFound from './PageNotFound';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  ((
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ),
  (
    <Router>
      <Switch>
        <Route exact path='/to-do' component={App} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )),
  //  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
