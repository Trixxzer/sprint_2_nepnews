import { useState } from 'react';
import '../styles/terms.css';

function TermsAndConditions({ onAgree, onBack }) {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 10) {
      setHasScrolledToBottom(true);
    }
  };

  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1 className="terms-title">Terms and Conditions</h1>

        <div className="terms-content" onScroll={handleScroll}>
          <h2>1. Introduction</h2>
          <p>Welcome to NepNews. These Terms and Conditions govern your use of our website and services. By accessing or using NepNews, you agree to be bound by these Terms.</p>

          <h2>2. Definitions</h2>
          <p>"Service" refers to the NepNews website and all content, services, and products available at or through the website.</p>
          <p>"User", "You", and "Your" refers to the individual accessing the Service.</p>
          <p>"Company", "We", "Us", and "Our" refers to NepNews.</p>

          <h2>3. Account Registration</h2>
          <p>To access certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process.</p>
          <p>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device.</p>

          <h2>4. User Content</h2>
          <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content you post.</p>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to use the Service for any unlawful purpose or any purpose prohibited by these Terms. You agree not to use the Service in any way that could damage the Service or general business of NepNews.</p>

          <h2>6. Privacy Policy</h2>
          <p>Please refer to our Privacy Policy for information about how we collect, use, and disclose information about you.</p>

          <h2>7. Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of NepNews and its licensors.</p>

          <h2>8. Termination</h2>
          <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.</p>

          <h2>9. Limitation of Liability</h2>
          <p>In no event shall NepNews, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>

          <h2>10. Changes to Terms</h2>
          <p>We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes.</p>

          <h2>11. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at support@nepnews.com.</p>
        </div>

        <div className="terms-actions">
          <button
            className="terms-agree-btn"
            onClick={onAgree}
            disabled={!hasScrolledToBottom}
          >
            {hasScrolledToBottom ? 'I Agree to the Terms' : 'Please read all terms before agreeing'}
          </button>
          <button
            className="terms-back-btn"
            onClick={() => {
              console.log('Back button clicked');
              if (onBack) {
                onBack();
              } else {
                console.error('onBack function is not defined');
              }
            }}
          >
            Back to Signup
          </button>
          <p className="terms-note">
            {hasScrolledToBottom
              ? 'By clicking "I Agree", you confirm that you have read and agree to our Terms and Conditions.'
              : 'Please scroll to the bottom to read all terms before agreeing.'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;