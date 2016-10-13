import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
//import store from './store';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';

import {createStore} from 'redux';
import reducers from './reducers/reducers';
import ShipListContainer from './components/containers/shipListContainer';

const store = createStore(reducers);

var action = {
    type: 'SHIP_ADD_NAME',
    ships: [
      { ship: {id: 1,
            name: 'The Destroyer'}
       }
       ]
};

store.dispatch(action);

console.log('done: ' + store.shipState);


const routes = <Route>
  <Route path="/" component={App}/>
  <Route path="/ship" component={ShipListContainer}/>
</Route>;

  ReactDOM.render(
      <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
    </Provider>
  ,
    document.getElementById('root'));
