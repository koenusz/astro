import {Control} from '../views/simulator/Control';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creator.js'

function mapStateToProps(store) {
  console.log('mapping ' + store);
  //console.log('mapping2 ' + store.shipState.ships);
  return {
    speed: store.simstate.speed
  };
};

export default connect(mapStateToProps, actionCreators)(Control);
