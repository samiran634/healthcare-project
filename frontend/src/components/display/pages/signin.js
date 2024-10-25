import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sign in attempted with:', { email, password });
  };

  return (
    <motion.div initial={{ opacity: 0 , x: 100 }}  animate={{ opacity: 1 , x: 0 }} transition={{ delay: .5, duration: 1.5 }}>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Sign In</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>

          <div className="text-center mt-4">
            <Link to="/signup" className="text-sm text-blue-500 hover:underline">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
    </motion.div>
  );
};

export default Signin;
