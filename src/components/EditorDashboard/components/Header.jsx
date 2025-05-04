import React from 'react';
import './Header.css';

const Header = ({ title, username, avatarSrc, onProfileClick }) => {
  return (
    <div className="dashboard-header">
      <span className="dashboard-title">{title}</span>
      <div className="user-profile" onClick={onProfileClick}>
        <img
          src={avatarSrc}
          alt="User Avatar"
          className="user-avatar"
        />
        <span className="username">{username}</span>
        <i className="ti ti-chevron-down profile-dropdown-icon"></i>
      </div>
    </div>
  );
};

export default Header;