import React from 'react';
import axios from '../api/axios';
import AuthForm from '../components/AuthForm';
import { useNavigate, Link } from 'react-router-dom';
import '../asthetics/register.css';

const RegisterPage = () => {
  const navigate = useNavigate();

  const register = async (credentials) => {
    try {
      await axios.post('/api/auth/register', credentials);
      alert('Registration successful! You can now log in.');
      navigate('/');
    } catch (error) {
      if (error.response) {
        // Example: "User already exists"
        alert(error.response.data.error);
      } else if (error.request) {
        alert('No response from server.');
      } else {
        alert('Something went wrong.');
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <AuthForm onSubmit={register} buttonText="Register" />
      <p style={{ marginTop: '10px' }}>
        Already have an account? <Link to="/">Go to Login page</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
