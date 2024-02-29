import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="./pages/Journal">Journal</Link>
        </li>
        <li>
          <Link to="./pages/Communities">Communities</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
