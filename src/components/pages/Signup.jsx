import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignupForm.css';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = "*Username is required";
    } else if (formData.username.length > 40) {
      errors.username = "*Max 10 characters";
    }

    if (!formData.password) {
      errors.password = "*Password is required";
    } else if (formData.password.length < 4) {
      errors.password = "*Min 4 characters";
    } else if (formData.password.length > 8) {
      errors.password = "*Max 8 characters";
    }

    return errors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem('user', JSON.stringify(formData));
      alert("Signup successful!");
      navigate('/login'); // After signup, move to login page
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="main">
      <div className="signup-form">
        <h2>Signup</h2>

        <input
          type="text"
          name="username"
          placeholder=" Enter Your Name"
          onChange={handleChange}
          value={formData.username}
        />
        {errors.username && <span>{errors.username}</span>}
        <input
        type="email"
        name="Email"
        placeholder="Enter your Email id"/>
        <input
          type="password"
          name="password"
          placeholder=" Enter Your Password"
          onChange={handleChange}
          value={formData.password}
        />
        {errors.password && <span>{errors.password}</span>}

        <input
          type="button"
          value="Signup"
          onClick={handleSubmit}
        />

        <div className="signup-link">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
