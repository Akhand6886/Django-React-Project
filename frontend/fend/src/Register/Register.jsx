import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Navbar from '../components/Navbar/Navbar';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic (send name, email, password to backend)
  };

  return (
    <div className="register-page">
      <Navbar />
      <div className="register-bg">
        <div className="register-overlay">
          <div className="register-form-container">
            {/* Logo or brand could go here if desired */}
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="register-form">
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <p className="switch-page">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
