import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Login data:', {
        role: activeTab,
        ...formData
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Left Image */}
        <div className="hidden md:block w-1/2 bg-gray-200">
          <img
            src="https://bigwax.io/cdn/shop/products/princes-mononoke-soundtrack-vinyl-studio-ghibli.jpg?v=1587121864"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8">
          {/* Branding */}
          <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">WebbShopp</h1>

          {/* Tab Bar */}
          <div className="flex mb-6 rounded overflow-hidden border border-gray-300">
            <button
              className={`w-1/2 py-2 text-sm font-semibold transition ${
                activeTab === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setActiveTab('user')}
            >
              Login as User
            </button>
            <button
              className={`w-1/2 py-2 text-sm font-semibold transition ${
                activeTab === 'shop'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setActiveTab('shop')}
            >
              Login as Shop
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-4 text-center">
            <p className="text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
