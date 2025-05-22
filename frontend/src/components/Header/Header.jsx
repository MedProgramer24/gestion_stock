import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">Dashboard</div>

      <div className="header-search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="header-profile">
        <span>Mohamed</span>
        <div className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;
