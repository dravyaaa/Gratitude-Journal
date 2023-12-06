import React from 'react';
import { motion } from 'framer-motion';
import './Login.css'; // Import your CSS file for styling

const Login = () => {
  return (
    <div className="login-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="login-card"
      >
        <div className="login-content">
          <h2>Login to Gratitude Journal</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="login-links">
            <a href="/signup">Sign Up</a>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
