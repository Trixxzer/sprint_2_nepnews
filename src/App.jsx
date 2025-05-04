import { useState, useEffect } from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import TermsAndConditions from './pages/TermsAndConditions'
import ForgotPassword from './pages/ForgotPassword'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('login')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [profilePicture, setProfilePicture] = useState(null)
  const [profilePreview, setProfilePreview] = useState(null)
  const [selectedRole, setSelectedRole] = useState('')
  const [formData, setFormData] = useState({
    role: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    profilePicture: null,
    // Author fields
    bio: '',
    expertise: '',
    certificates: null,
    // Editor fields
    editorialOversight: '',
    emailVerification: false,
    userManagement: false,
    articleManagement: false,
    analytics: false
  })

  // Update profile preview when profile picture changes
  useEffect(() => {
    if (profilePicture) {
      const objectUrl = URL.createObjectURL(profilePicture);
      setProfilePreview(objectUrl);

      // Update form data with new profile picture
      setFormData(prev => ({
        ...prev,
        profilePicture: profilePicture
      }));

      // Free memory when component unmounts
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [profilePicture]);

  // Update form data when role changes
  useEffect(() => {
    if (selectedRole) {
      setFormData(prev => ({
        ...prev,
        role: selectedRole
      }));
    }
  }, [selectedRole]);

  const navigateToTerms = () => {
    setCurrentPage('terms')
  }

  const handleAgreeToTerms = () => {
    setAgreedToTerms(true)
    setFormData(prev => ({
      ...prev,
      agreeToTerms: true
    }))
    setCurrentPage('signup')
  }

  const navigateBackToSignup = () => {
    // Navigate back to signup without setting the agreement state
    console.log('Navigating back to signup without agreement');
    setCurrentPage('signup');
  }

  const navigateToTerms = () => {
    setCurrentPage('terms')
  }

  const navigateToForgotPassword = () => {
    setCurrentPage('forgotPassword')
  }

  const handleAgreeToTerms = () => {
    setAgreedToTerms(true)
    setFormData(prev => ({
      ...prev,
      agreeToTerms: true
    }))
    setCurrentPage('signup')
  }

  const handleFormDataChange = (newData) => {
    setFormData(newData)

    // Keep profile picture and role in sync with form data
    if (newData.profilePicture !== profilePicture) {
      setProfilePicture(newData.profilePicture);
    }

    if (newData.role !== selectedRole) {
      setSelectedRole(newData.role);
    }
  }

  const handleProfilePictureChange = (file) => {
    setProfilePicture(file);
  }

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  }

  // For debugging purposes
  useEffect(() => {
    console.log('Current page:', currentPage);
  }, [currentPage]);

  const renderPage = () => {
    console.log('Rendering page:', currentPage);
    switch (currentPage) {
      case 'login':
        return <Login
          onNavigateToSignup={navigateToSignup}
          onNavigateToForgotPassword={navigateToForgotPassword}
        />;
      case 'signup':
        return <Signup
          onNavigateToLogin={navigateToLogin}
          onNavigateToTerms={navigateToTerms}
          agreedToTerms={agreedToTerms}
          formData={formData}
          onFormDataChange={handleFormDataChange}
          profilePicture={profilePicture}
          profilePreview={profilePreview}
          selectedRole={selectedRole}
          onProfilePictureChange={handleProfilePictureChange}
          onRoleChange={handleRoleChange}
        />;
      case 'terms':
        return <TermsAndConditions
          onAgree={handleAgreeToTerms}
          onBack={navigateBackToSignup}
        />;
      case 'forgotPassword':
        return <ForgotPassword
          onNavigateToLogin={navigateToLogin}
          profilePicture={profilePicture}
          profilePreview={profilePreview}
          selectedRole={selectedRole}
          onProfilePictureChange={handleProfilePictureChange}
          onRoleChange={handleRoleChange}
        />;
      default:
        return <Login onNavigateToSignup={navigateToSignup} />;
    }
  }

  return (
    <div className="app-container">
      {renderPage()}
    </div>
  )
}

export default App