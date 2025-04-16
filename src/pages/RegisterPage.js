import React from 'react';
import axios from '../api/axios';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import '../asthetics/register.css'

const RegisterPage = () => {
  const navigate = useNavigate();

  const register = async (credentials) => {
    await axios.post('/api/auth/register', credentials);
    navigate('/');
  };

  return <AuthForm onSubmit={register} buttonText="Register" />;
};

export default RegisterPage;