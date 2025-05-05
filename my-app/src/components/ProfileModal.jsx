import React, { useState, useRef } from 'react';

const ProfileModal = ({ profile, onClose, onSave }) => {
  const [name, setName] = useState(profile.name);
  const [imagePreview, setImagePreview] = useState(profile.image);
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave({
      name,
      image: imagePreview
    });
  };

  return (
    <div className="modal-overlay">
      <div className="profile-modal">
        <div className="modal-header">
          <h2>Edit Profile</h2>
          <button className="close-button" onClick={onClose}>
            <i className="ti ti-x"></i>
          </button>
        </div>
        
        <div className="modal-content">
          <div className="profile-image-container" onClick={handleImageClick}>
            <img 
              src={imagePreview} 
              alt="Profile" 
              className="profile-image-preview" 
            />
            <div className="image-overlay">
              <i className="ti ti-camera"></i>
              <span>Change Image</span>
            </div>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>
          
          <div className="profile-form">
            <div className="form-group">
              <label htmlFor="profile-name">Name</label>
              <input 
                type="text" 
                id="profile-name"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                className="form-input"
              />
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="save-btn" onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;