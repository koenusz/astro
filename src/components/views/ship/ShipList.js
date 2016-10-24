import React from 'react';
import './shiplist.css'
import Button from '../../util/Button'


export class ShipList extends React.Component{

  // constructor(props){
  //   super(props);
  // }


  render(){
    console.log('list ships', this.props.ships);
    return (
      <div className="data-list">
            <h1>Listing our ships</h1>
            <div><Button handleClick={this.props.shiprequest} label="request ship"/></div>
          {this.props.ships.map(ship => {
          console.log('ship', ship);
          return (
            <div key={ship.id} className="data-list-item">
                <ship>Ship, {ship.name}</ship>
            </div>
          );
        })}
      </div>
    );
  }


}
