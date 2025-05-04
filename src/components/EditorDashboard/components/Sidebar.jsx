import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeView, onViewChange }) => {
  const isActive = (view) => activeView === view ? 'active' : '';
  
  return (
    <div className="sidebar">
      <img
        src="https://cdn.discordapp.com/attachments/1348622336949096462/1353017485917421618/image.png?ex=6816d57a&is=681583fa&hm=3817fe3bed54ddd727afa93a26d5a2a44e1d1cb83c6af0a988bdbe9234b68d6b&"
        alt="Logo"
        className="sidebar-logo"
      />
      
      <div className={`sidebar-item ${isActive('dashboard')}`} onClick={() => onViewChange('dashboard')}>
        <i className="ti ti-layout-dashboard sidebar-icon"></i>
        <span className="sidebar-text">Dashboard</span>
      </div>
      
      <div className={`sidebar-item ${isActive('pending')}`} onClick={() => onViewChange('pending')}>
        <i className="ti ti-hourglass sidebar-icon"></i>
        <span className="sidebar-text">Pending Reviews</span>
      </div>
      
      <div className={`sidebar-item ${isActive('published')}`} onClick={() => onViewChange('published')}>
        <i className="ti ti-article sidebar-icon"></i>
        <span className="sidebar-text">Published Article</span>
      </div>
    </div>
  );
};

export default Sidebar;