import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
    <Route path="/"  element={<SignUp />  }/>
          <Route path="/Signup"  element={<SignUp />  }/>
          <Route path="/Login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/ResetPassword/:token" element={<ResetPassword />} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;