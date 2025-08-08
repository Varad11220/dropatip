'use client';

import React, { useState } from 'react';
import { Heart, Smartphone, Zap, Mail, Youtube } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const googleFormLink = 'https://forms.gle/your-form-id';
  const youtubeChannelUrl = 'https://youtube.com/@ATxShockwave';
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-4xl">
          {/* Content card */}
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-6 lg:p-8 w-full transition-all duration-500 ease-out hover:shadow-purple-500/10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">Contact Us</h1>
              <p className="text-slate-400 text-sm">Last updated on Aug 5 2025</p>
            </div>

            {/* Google Form-like inputs */}
            <div className="space-y-6">
              <div>
                <label className="block font-semibold text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => window.open(googleFormLink, '_blank')}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl transition-all"
                >
                  Submit via Google Form
                </button>
              </div>
            </div>

            {/* Direct contact and links */}
            <div className="mt-8 grid gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <a href="mailto:ddcss002@gmail.com" className="hover:underline">ddcss002@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Youtube className="w-4 h-4 text-red-500" />
                <a href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube Channel</a>
              </div>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-slate-700/50">
              <p className="text-xs text-slate-500 flex items-center justify-center gap-1 mb-2">
                Made with <Heart className="w-3 h-3 text-red-500" /> for ATxShockwave
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <Smartphone className="w-3 h-3" />
                  Mobile Optimized
                </span>
                <span>•</span>
                <span>Secure • Fast • Anonymous</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}