import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignupForm.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  const validate = () => {
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = "*Username is required";
    }
    if (!formData.password) {
      errors.password = "*Password is required";
    }
    return errors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const savedUser = JSON.parse(localStorage.getItem('user'));

      if (
        savedUser &&
        formData.username === savedUser.username &&
        formData.password === savedUser.password
      ) {
        alert("Login successful!");
        navigate('/home'); // Move to home page if login success
      } else {
        setLoginError("Invalid username or password");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setLoginError(''); // Clear login error on typing
  };

  return (
    <div className="main">
      <div className="signup-form">
        <h2>Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
        />
        {errors.username && <span>{errors.username}</span>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
        />
        {errors.password && <span>{errors.password}</span>}

        {loginError && <span>{loginError}</span>}

        <input
          type="button"
          value="Login"
          onClick={handleSubmit}
        />

        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
