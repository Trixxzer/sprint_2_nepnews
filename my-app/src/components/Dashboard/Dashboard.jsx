import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DraftsPage from '../DraftsPage/DraftsPage';
import PendingReviewPage from '../PendingReviewPage/PendingReviewPage';
import UpdatesPage from '../UpdatesPage/UpdatesPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import './Dashboard.css';

function Dashboard() {
  const [activePage, setActivePage] = useState('drafts');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Author',
    photoUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/beadbe452d99e5a91843b44b7aba69f5d09ecc29?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8'
  });

  const handlePageChange = (page) => {
    setActivePage(page);
    setShowProfileDropdown(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleProfileUpdate = (newData) => {
    setProfileData({
      ...profileData,
      ...newData
    });
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'drafts':
        return <DraftsPage />;
      case 'pending':
        return <PendingReviewPage />;
      case 'updates':
        return <UpdatesPage />;
      case 'profile':
        return <ProfilePage 
                 name={profileData.name} 
                 photoUrl={profileData.photoUrl} 
                 onProfileUpdate={handleProfileUpdate} 
               />;
      default:
        return <DraftsPage />;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <Sidebar activePage={activePage} onPageChange={handlePageChange} />
        
        <div className="dashboard-content">
          <div className="dashboard-content-inner">
            <div className="dashboard-header">
              <h1 className="dashboard-title">Author Dashboard</h1>
              <div className="user-profile" onClick={toggleProfileDropdown}>
                <div className="profile-container">
                  <img src={profileData.photoUrl} alt="User profile" className="profile-image" />
                  <span className="profile-name">{profileData.name}</span>
                </div>
                {showProfileDropdown && (
                  <ProfileDropdown onProfileClick={() => handlePageChange('profile')} />
                )}
              </div>
            </div>
            
            {renderPageContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;