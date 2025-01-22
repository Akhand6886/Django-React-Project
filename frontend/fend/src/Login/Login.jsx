// src/pages/Login/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div
        className="flex-1 bg-center bg-cover relative"
        style={{ backgroundImage: 'url("/image1.png")' }}
      >
        <div className="bg-black/50 w-full h-full absolute top-0 left-0 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur p-6 rounded w-[350px] text-white">
            <h2 className="text-2xl mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col text-left">
                <label className="bg-black text-white py-1 px-2 rounded font-bold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="p-2 border border-gray-300 rounded text-black"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col text-left">
                <label className="bg-black text-white py-1 px-2 rounded font-bold mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="p-2 border border-gray-300 rounded text-black"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white py-2 mt-2 rounded"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center">
              Don’t have an account? <Link to="/register" className="underline">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
