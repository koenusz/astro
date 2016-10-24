import { combineReducers } from 'redux';

// Reducers
import shipReducer from './ship-reducer';
import simReducer from './sim-reducer';

// Combine Reducers
var reducers = combineReducers({
  shipState: shipReducer,
  simstate: simReducer
});

export default reducers;
