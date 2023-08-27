import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
export const Navbar = () => {
  return (
    <div className='nav-bar'>
      <div className='left-div'>
        <h3>Portfolio.</h3>
      </div>
      <div className='right-div'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/project'>Project</Link>
          </li>
          <li>
            <Link to='/skills'>Skills</Link>
          </li>
          <li>
            <Link to='/education'>Education</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


