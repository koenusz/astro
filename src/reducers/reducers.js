import { combineReducers } from 'redux';

// Reducers
import shipReducer from './ship-reducer';

// Combine Reducers
var reducers = combineReducers({
  shipState: shipReducer
});

export default reducers;
