import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  let apiUrl ="https://finance-backend-ri8l.onrender.com"
console.log(apiUrl)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log(apiUrl)
      const response = await axios.post(apiUrl+'/auth/login', {
        email,
        password
      });

     
      // Assuming the response contains the authorization token
     

      // Set the token in the authorization header for future requests
      if(response.status===200){
        const  token  = response.data.accessToken;
      
      axios.defaults.headers.common['authorization'] = `${token}`;
     navigate('/add-transaction')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
       <h3 onClick={()=>navigate("/signup")}>Signup</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
