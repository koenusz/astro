import React from 'react';
import { connect } from 'react-redux';
import ShipList from '../views/ship/ShipList';
import store from '../../store';
//import { loadSearchLayout } from '../../actions/search-layout-actions';

const mapStateToProps = function(store) {

console.log('mapping');

  return {
    ships: store.shipState.ships
  };
};

export default connect(mapStateToProps)(ShipList);
