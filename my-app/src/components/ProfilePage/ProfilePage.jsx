import React, { useState } from 'react';
import './ProfilePage.css';

function ProfilePage({ name, photoUrl, onProfileUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);
  const [tempPhotoUrl, setTempPhotoUrl] = useState(photoUrl);
  const [previewUrl, setPreviewUrl] = useState(photoUrl);

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      onProfileUpdate({
        name: tempName,
        photoUrl: tempPhotoUrl
      });
    } else {
      // Start editing
      setTempName(name);
      setTempPhotoUrl(photoUrl);
      setPreviewUrl(photoUrl);
    }
    setIsEditing(!isEditing);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you would upload the file to a server
      // and get back a URL. For this demo, we'll create a local preview.
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        // In a real app, you would set tempPhotoUrl to the uploaded image URL
        // For now, we'll just use the same https://cdn.builder.io/api/v1/image/assets/TEMP/beadbe452d99e5a91843b44b7aba69f5d09ecc29?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8 as a placeholder
        setTempPhotoUrl('https://cdn.builder.io/api/v1/image/assets/TEMP/beadbe452d99e5a91843b44b7aba69f5d09ecc29?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <h2>My Profile</h2>
          <button 
            className={`edit-button ${isEditing ? 'save-button' : ''}`} 
            onClick={handleEditToggle}
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>
        
        <div className="profile-content">
          <div className="profile-photo-section">
            <div className="profile-photo-container">
              <img 
                src={isEditing ? previewUrl : photoUrl} 
                alt="Profile" 
                className="profile-photo" 
              />
              {isEditing && (
                <div className="photo-upload-overlay">
                  <label htmlFor="photo-upload" className="upload-label">
                    Change Photo
                  </label>
                  <input 
                    type="file" 
                    id="photo-upload" 
                    accept="image/*" 
                    onChange={handlePhotoChange} 
                    className="photo-upload-input" 
                  />
                </div>
              )}
            </div>
          </div>
          
          <div className="profile-details">
            <div className="profile-field">
              <label>Name</label>
              {isEditing ? (
                <input 
                  type="text" 
                  value={tempName} 
                  onChange={(e) => setTempName(e.target.value)} 
                  className="profile-input" 
                />
              ) : (
                <div className="profile-value">{name}</div>
              )}
            </div>
            
            <div className="profile-field">
              <label>Email</label>
              <div className="profile-value">john.author@example.com</div>
            </div>
            
            <div className="profile-field">
              <label>Role</label>
              <div className="profile-value">Author</div>
            </div>
            
            <div className="profile-field">
              <label>Member Since</label>
              <div className="profile-value">January 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;