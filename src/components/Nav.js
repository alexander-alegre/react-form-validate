import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return(
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <NavLink activeClassName="active" exact to="/" className="nav-link">Home <i className="fa fa-home" aria-hidden="true"></i></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" to="/form" className="nav-link">Form <i className="fa fa-wpforms" aria-hidden="true"></i></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" to="/data" className="nav-link">Results <i className="fa fa-database" aria-hidden="true"></i></NavLink>
      </li>
    </ul>
  );
}

export default Nav;