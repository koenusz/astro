
import * as types from '../actions/action-types';
//import List from 'immutable'

 const initialState = {
   speed: 0
 };



const simReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.SIM_ADJUST_SPEED:
     var newState = Object.assign({}, state, { speed: action.speed});
     return newState;

    case types.SIM_START:
    return state;

    case types.SIM_PAUSE:
    return state;

    default: return state;
  }
}

export default simReducer;
