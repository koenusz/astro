import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';
import middlewareStore from './store';
import {shiprequest} from './actions/action_creator.js'

import MainLayout from './components/layouts/main-layout';

import ShipListContainer from './components/containers/shipListContainer';

const store = middlewareStore;

console.log(shiprequest());

store.dispatch(shiprequest());


console.log('done: ' + store.shipState);


const routes = <Route component={MainLayout}>
  <Route path="/" component={App}/>
  <Route path="/ship" component={ShipListContainer}/>
</Route>;

  ReactDOM.render(
      <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
    </Provider>
  ,
    document.getElementById('root'));
