import React from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2>Login to Gratitude Journal</h2>
        <form>
          {/* Add login form fields: username, password */}
          {/* Include login button */}
        </form>
        {/* Add links for signup or forgot password */}
      </div>
    </motion.div>
  );
};

export default Login;
