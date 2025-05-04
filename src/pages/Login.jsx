import { useState } from 'react';
import { UserIcon, LockIcon, GoogleIcon, FacebookIcon } from '../components/Icons';
import '../styles/auth.css';

function Login({
  onNavigateToSignup,
  onNavigateToForgotPassword
}) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login form submitted:', formData);
      // Here you would typically make an API call to authenticate the user
      alert('Login successful!');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-columns">
        <div className="left-column">
          <div className="welcome-text">Welcome Back.</div>
          <div className="welcome-description text-left ">
            Welcome to NepNews, your gateway to real-time updates, in-depth
            analysis, and breaking news from around the world. Stay informed
            with trusted journalism, curated stories, and exclusive reports
            tailored to your interests. Log in now to personalize your news
            feed, bookmark articles, and never miss an important update. Your
            news, your way—delivered seamlessly.
          </div>
          <img src="https://cdn.discordapp.com/attachments/1348622336949096462/1368470249258614844/image.png?ex=681856bc&is=6817053c&hm=c23ed18f3a47b01a893aa5fe0a9db53d8215b0a8ef5a88e5fd6f0ac86eda49a5&" alt="News Illustration" className="illustration" />
        </div>
        <div className="right-column">
          <div className="form-container">
            <h2 className="form-title">LOGIN</h2>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
              <div className="input-with-icon">
                  <UserIcon className="input-icon" />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email or username"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                  />
                </div>
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              <div className="form-group">
              <div className="input-with-icon">
                  <LockIcon className="input-icon" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'input-error' : ''}
                  />
                </div>
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>
              <div className="forgot-password" onClick={onNavigateToForgotPassword}>Forgot Password?</div>
              <button type="submit" className="auth-button">Login</button>
              <div className="social-login">
                <div className="social-text">Or Login with: </div>
                <div className="social-icons">
                  <GoogleIcon className="social-icon" />
                  <FacebookIcon className="social-icon" />
                </div>
              </div>
              <div className="switch-auth">
                Don't have an account? <span className="auth-link" onClick={onNavigateToSignup}>Sign Up</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;