import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://passwordresetbc.onrender.com/api/signup', {
        email,
        password,
      });
  
      setMessage(response?.data?.message || 'User registered successfully');
    } catch (error) {
      setMessage(error?.response?.data?.message || 'Error registering user');
    }
  };

  return (
    <div className="container mt-5">
    <div className="col-md-6 offset-md-3">
     
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="form-group">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
        <Link to="/Login" className="ml-2 p-3">Login</Link>
     
       
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  </div>
  );
};

export default SignUp;