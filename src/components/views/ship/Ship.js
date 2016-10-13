import React from 'react';

class Ship extends React.Component {

 render() {
   return(
     <h1>Ship, {this.props.name}</h1>
   );
 }
}

Ship.propTypes = {
  name: React.PropTypes.string
};

export default Ship
