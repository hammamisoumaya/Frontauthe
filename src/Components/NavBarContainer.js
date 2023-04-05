import React from 'react';
import './NavBarContainer.css';
import {Link} from 'react-router-dom'

const NavBarContainer = ({auth,logout}) => {
  console.log('lina nav  ', auth)
  return (
    <nav>
      <ul>
      <li>{auth.name} </li>
        <li><a><Link to ={'/'}>Register</Link></a></li>
        <li><a><Link to ={'/app/Private'}>PrivateRoute</Link></a></li>
        <li><a><Link to ={'/login'}>Login</Link></a></li>
        <li><a href="#">Contact</a></li>
      </ul>
   
    </nav>
  );
}

export default NavBarContainer;