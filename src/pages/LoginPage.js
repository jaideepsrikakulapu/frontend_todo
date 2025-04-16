import React from 'react';
import axios from '../api/axios';
import AuthForm from '../components/AuthForm';
import { useNavigate, Link } from 'react-router-dom';
import '../asthetics/login.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const res = await axios.post('/api/auth/login', credentials);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        // Handle errors returned by backend (e.g., Wrong password)
        alert(error.response.data.error);
      } else if (error.request) {
        // Request was made but no response received
        alert('No response from server.');
      } else {
        // Something else went wrong
        alert('Something went wrong.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <AuthForm onSubmit={login} buttonText="Login" />
      <p style={{ marginTop: '10px' }}>
        Not registered? <Link to="/register">Go to Register page</Link>
      </p>
    </div>
  );
};

export default LoginPage;
