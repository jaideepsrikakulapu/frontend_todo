import React from 'react';
import axios from '../api/axios';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import '../asthetics/login.css'

const LoginPage = () => {
  const navigate = useNavigate();

  const login = async (credentials) => {
    const res = await axios.post('/api/auth/login', credentials);
    localStorage.setItem('token', res.data.token);
    navigate('/dashboard');
  };

  return <AuthForm onSubmit={login} buttonText="Login" />;
};

export default LoginPage;