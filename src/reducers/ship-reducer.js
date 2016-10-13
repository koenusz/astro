
import * as types from '../actions/action-types';
const util = require('util')

function setState(state, newState) {
  return state.merge(newState);
}

 const initialState = {
   ships: []
 };



const shipReducer = function(state = initialState, action) {

  console.log('action:' +  action.type);
  console.log(util.inspect(action, false, null))


  switch(action.type) {
    case types.SHIP_ADD_NAME:
    console.log(action.ships);
    //var newState = Object.assign({}, state, {ships: action.ship});

    const newState = state.merge(action.ships);
    console.log('returning' + util.inspect(newState, false, null));
    return newState;

    case types.UPDATE_SHIP_NAME:
    return Object.assign({}, state, {ships: action.ship});

    default: return state;
  }
}

export default shipReducer;
