import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Users from './Users';
import Requests from './Requests';
import ProfileModal from './ProfileModal';

const AdminPanel = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [adminProfile, setAdminProfile] = useState({
    name: 'Admin',
    image: 'https://via.placeholder.com/40'
  });

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'requests':
        return <Requests />;
      default:
        return <Dashboard />;
    }
  };

  const handleProfileUpdate = (newProfile) => {
    setAdminProfile(newProfile);
    setProfileModalOpen(false);
  };

  return (
    <div className="admin-panel">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="content-area">
        <div className="header">
          <h1 className="page-title">
            {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
          </h1>
          <div className="user-profile" onClick={() => setProfileModalOpen(true)}>
            <img src={adminProfile.image} alt={adminProfile.name} className="avatar" />
            <span className="admin-name">{adminProfile.name}</span>
            <i className="ti ti-edit profile-edit-icon"></i>
          </div>
        </div>
        {renderContent()}
      </div>
      
      {profileModalOpen && (
        <ProfileModal 
          profile={adminProfile}
          onClose={() => setProfileModalOpen(false)}
          onSave={handleProfileUpdate}
        />
      )}
    </div>
  );
};

export default AdminPanel;