import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';  // Go up one level, then into Modal folder

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Mock user database (in a real app, this would be an API call)
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset error
    setError('');
    
    // Validation
    if (!email || !password) {
      setError('Email and password are required!');
      setShowModal(true);
      return;
    }

    // Check if user exists
    const user = users.find(u => u.email === email);
    if (!user) {
      setError('User not found. Please sign up first.');
      setShowModal(true);
      return;
    }

    // Check password (in real app, this would be hashed)
    if (user.password !== password) {
      setError('Incorrect password!');
      setShowModal(true);
      return;
    }

    // Success - log in user
    console.log('Login successful:', { email });
    localStorage.setItem('currentUser', JSON.stringify(user));
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="auth-switch">
          New user? <span onClick={() => navigate('/signup')}>Sign up</span>
        </p>
      </div>
      
      {showModal && (
        <Modal 
          message={error} 
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Login;