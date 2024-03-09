import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const apiUrl = "https://finance-backend-ri8l.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(apiUrl+'/auth/register', {
        username,
        email,
        password
      });
      
      console.log(response.data); // Handle response data as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="username" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
        <div className="text-center mt-3">
          <a href="/login" className="text-decoration-none">Already have an account? Log in here.</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
