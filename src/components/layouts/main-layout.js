import React from 'react';
import { Link } from 'react-router';
import './main.css'
import SimControlContainer from '../containers/simControlContainer'

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
      <header className="primary-header"></header>
      <navigation className="navigation-menu">
          <div className="navigation-list">
            <ul>
              <li><Link to="/solar" activeClassName="active">Solar System</Link></li>
              <li><Link to="/planet" activeClassName="active">Planet</Link></li>
              <li><Link to="/planet" activeClassName="active">Research</Link></li>
              <li><Link to="/planet" activeClassName="active">Fleet</Link></li>
            </ul>
          </div>
              <SimControlContainer/>
      </navigation>
      <aside className="primary-aside">
        <ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/ship" activeClassName="active">Ships</Link></li>
        </ul>
      </aside>
      <main>
        {props.children}
      </main>
    </div>
    );
}
