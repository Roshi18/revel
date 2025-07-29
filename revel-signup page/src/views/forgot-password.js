import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './forgot-password.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would implement your password reset logic
      setIsSuccess(true);
      setMessage('Password reset link has been sent to your email.');
    } catch (err) {
      setIsSuccess(false);
      setMessage('Failed to send reset link. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Reset Password</h2>
        {message && (
          <div className={`message ${isSuccess ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your registered email"
            />
          </div>
          <button type="submit" className="reset-button">Send Reset Link</button>
        </form>
        <p className="back-to-login">
          <span className="link" onClick={() => history.push('/login')}>
            Back to Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;