import {React} from "react";
import {Router, Route, browserHistory} from 'react-router';

import MainLayout from './components/layouts/main-layout';
// Pages
import App from './App';

export default (
  <Router history={browserHistory} >
    <Route component={MainLayout}>
    <Route path="/" component={App} />

    </Route>
  </Router>
);
