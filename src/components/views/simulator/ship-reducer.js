
import * as types from '../actions/action-types';
//import List from 'immutable'

 const initialState = {
   ships: []
 };



const shipReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.SHIP_ADD_NAME:
     var newState = Object.assign({}, state, { ships: [...state.ships, action.ship]});
     return newState;

    case types.UPDATE_SHIP_NAME:
    return Object.assign({}, state, {ships: action.ship});

    default: return state;
  }
}

export default shipReducer;
