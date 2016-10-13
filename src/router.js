import {React} from "react";
import {Router, Route, browserHistory} from 'react-router';
// Pages
import App from './App';

export default (
  <Router history={browserHistory} >
    <Route path="/" component={App} />
  </Router>
);
