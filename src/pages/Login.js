import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // set isLoggedIn = true
    navigate('/dashboard');
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
