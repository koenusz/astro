import React from 'react';
import { Link } from 'react-router';
import Ship from './Ship';

// Using "Stateless Functional Components"
export default function(props) {
  console.log('list', props);
  return (
    <div className="data-list">
          <h1>Listing our ships</h1>
      {props.ships.map(ship => {
        return (
          <div key={ship.id} className="data-list-item">
            <Ship ship={ship} />
          </div>
        );
      })}
    </div>
  );
}
