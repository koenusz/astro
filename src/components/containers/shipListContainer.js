import { connect } from 'react-redux';
import {ShipList} from '../views/ship/ShipList';
import * as actionCreators from '../../actions/action_creator.js'

function mapStateToProps(store) {
  console.log('mapping ' + store);
  //console.log('mapping2 ' + store.shipState.ships);
  return {
    ships: store.shipState.ships
  };
};

export default connect(mapStateToProps, actionCreators)(ShipList);
