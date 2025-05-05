import React from 'react';
import './ProfileDropdown.css';

function ProfileDropdown({ onProfileClick }) {
  return (
    <div className="profile-dropdown">
      <div className="dropdown-arrow"></div>
      <ul className="dropdown-menu">
        <li className="dropdown-item" onClick={onProfileClick}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/76e6eecfe27f97e0aba8f01dd819ff8f7630b0f6?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8" alt="Profile" className="dropdown-icon" />
          <span>My Profile</span>
        </li>
        <li className="dropdown-divider"></li>
        <li className="dropdown-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bd1bcd9995ee31f0138cd24f6d7ada6045b83e8?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8" alt="Logout" className="dropdown-icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default ProfileDropdown;