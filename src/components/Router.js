// src/components/Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/Signup';
import App from '../App'; // Your main layout after login

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<App />} />
    
    </Routes>
  );
}

export default Routers;
