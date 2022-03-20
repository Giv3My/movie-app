import React from 'react';
import { Link } from 'react-router-dom';

import user from '../common/images/user.png';

function Header() {
  return (
    <div className="header">
      <Link to='/'>
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
};

export default Header;