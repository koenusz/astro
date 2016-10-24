import React from 'react';
import ReactDOM from 'react-dom';


import {createStore} from 'redux';
import reducers from '../../src/reducers/reducers';

it('sends a request to the backend and recieves an action back', () => {
  const store = createStore(reducers);

  const action = {type: 'ADD_SHIP_NAME',
                  meta: {remote: true}
                  };
    store.dispatch(action);


});
