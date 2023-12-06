import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
      <div className="col-md-6">
   <div className="card">
          <div className="card-body">
                   <h2 className="card-title">Forget Password</h2>
            <form onSubmit={handleSubmit}>
     <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
    </div>
      <button type="submit" className="btn btn-primary">
           Submit
      </button>
              <Link to="/Signup" className="ml-2 p-3">SignUp</Link>
               </form>
  {message && <p className="mt-3 text-success">{message}</p>}
          </div>
            </div>
       </div>
        </div>
  </div>
  );
};

export default ForgetPassword;
