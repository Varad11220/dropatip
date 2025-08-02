'use client';

import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    amount: 40,
    name: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Tip submitted:', {
      ...formData,
      name: formData.name || 'Anonymous'
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="bg-[#111827] border border-gray-700 rounded-3xl shadow-2xl p-8 w-full max-w-md transition-all duration-300 ease-in-out">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">⚡ Drop A Tip</h1>
          <p className="text-gray-400 mt-1 text-sm">Support your favorite streamer</p>
        </div>

        {/* Streamer Profile */}
        <div className="bg-gradient-to-r from-purple-700 to-indigo-600 rounded-xl p-4 mb-6 text-white flex items-center justify-between shadow-md">
          <div>
            <h2 className="text-lg font-semibold">ATxShockwave</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">LIVE</span>
            </div>
          </div>
          <div className="text-3xl">🎮</div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="bg-green-600 text-white text-center text-sm p-3 rounded-xl mb-6 animate-fade-in">
            🎉 Thank you for your tip! You're awesome!
          </div>
        )}

        {/* Tip Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Amount */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">
              Tip Amount
            </label>
            <div className="relative">
              <input
                type="number"
                name="amount"
                id="amount"
                min="1"
                max="10000"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 pr-16 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                INR
              </span>
            </div>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name or stay anonymous"
              maxLength={50}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="3"
              maxLength="200"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Say something nice to ATxShockwave..."
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
            <div className="text-right text-xs text-gray-500 mt-1">
              {formData.message.length}/200 characters
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Tip 💰
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-xs text-gray-500">
            Made with <span className="text-red-500">❤️</span> for ATxShockwave
          </p>
        </div>
      </div>
    </div>
  );
}
