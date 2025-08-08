'use client';

import React, { useState, ChangeEvent } from 'react';
import { Heart, Zap, Users, Gift, Star, Coffee, Monitor, Smartphone } from 'lucide-react';
import Link from 'next/link';

interface FormData {
  amount: number;
  name: string;
  message: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    amount: 40,
    name: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedQuickAmount, setSelectedQuickAmount] = useState<number | null>(40);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const quickAmounts = [25, 40, 100, 250, 500, 1000];
  const supporterCount = 1247;
  const todaysTips = 89;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'amount') {
      const numValue = Number(value) || 0;
      setFormData(prev => ({ ...prev, [name]: numValue }));
      setSelectedQuickAmount(quickAmounts.includes(numValue) ? numValue : null);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleQuickAmount = (amount: number) => {
    setFormData(prev => ({ ...prev, amount }));
    setSelectedQuickAmount(amount);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Tip submitted:', {
      ...formData,
      name: formData.name || 'Anonymous'
    });

    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
    
    // Reset form
    setFormData({ amount: 40, name: '', message: '' });
    setSelectedQuickAmount(40);
  };

  return (
    <>
      {/* Main Container - Responsive layout */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 lg:p-8">
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full max-w-7xl gap-12 items-center justify-center">
          
          {/* Left Side - Hero Content */}
          <div className="flex-1 max-w-2xl">
            <div className="text-center lg:text-left mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-6 shadow-2xl">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-6xl xl:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  Support Your
                </span>
                <br />
                <span className="text-white">Favorite Creator</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Show your appreciation with a tip. Every contribution helps ATxShockwave 
                continue creating amazing content for the community.
              </p>
              
              {/* Desktop Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-lg">
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-slate-700/30">
                  <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{supporterCount.toLocaleString()}</div>
                  <div className="text-sm text-slate-400">Supporters</div>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-slate-700/30">
                  <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
                    <Star className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{todaysTips}</div>
                  <div className="text-sm text-slate-400">Today&apos;s Tips</div>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-slate-700/30">
                  <div className="flex items-center justify-center gap-2 text-purple-400 mb-2">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-slate-400">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Tip Form */}
          <div className="flex-1 max-w-lg">
            <TipForm 
              formData={formData}
              showSuccess={showSuccess}
              selectedQuickAmount={selectedQuickAmount}
              isSubmitting={isSubmitting}
              quickAmounts={quickAmounts}
              handleInputChange={handleInputChange}
              handleQuickAmount={handleQuickAmount}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden w-full max-w-md">
          <TipForm 
            formData={formData}
            showSuccess={showSuccess}
            selectedQuickAmount={selectedQuickAmount}
            isSubmitting={isSubmitting}
            quickAmounts={quickAmounts}
            handleInputChange={handleInputChange}
            handleQuickAmount={handleQuickAmount}
            handleSubmit={handleSubmit}
            isMobile={true}
          />
        </div>
      </div>
    </>
  );
}

// Extracted TipForm component for reusability
interface TipFormProps {
  formData: FormData;
  showSuccess: boolean;
  selectedQuickAmount: number | null;
  isSubmitting: boolean;
  quickAmounts: number[];
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleQuickAmount: (amount: number) => void;
  handleSubmit: () => void;
  isMobile?: boolean;
}

function TipForm({ 
  formData, 
  showSuccess, 
  selectedQuickAmount, 
  isSubmitting, 
  quickAmounts, 
  handleInputChange, 
  handleQuickAmount, 
  handleSubmit,
  isMobile = false
}: TipFormProps) {
  const supporterCount = 1247;
  const todaysTips = 89;

  return (
    <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-6 lg:p-8 transition-all duration-500 ease-out hover:shadow-purple-500/10">
      
      {/* Mobile Header */}
      {isMobile && (
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-4 shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
            Drop A Tip
          </h1>
          <p className="text-slate-400 text-sm">Support your favorite creator</p>
        </div>
      )}

      {/* Mobile Stats Bar */}
      {isMobile && (
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-slate-800/50 rounded-xl p-3 text-center border border-slate-700/30">
            <div className="flex items-center justify-center gap-2 text-green-400 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-xs font-medium">Supporters</span>
            </div>
            <div className="text-lg font-bold text-white">{supporterCount.toLocaleString()}</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-3 text-center border border-slate-700/30">
            <div className="flex items-center justify-center gap-2 text-yellow-400 mb-1">
              <Star className="w-4 h-4" />
              <span className="text-xs font-medium">Today</span>
            </div>
            <div className="text-lg font-bold text-white">{todaysTips}</div>
          </div>
        </div>
      )}

      {/* Streamer Profile - Enhanced for desktop */}
      <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-xl lg:rounded-2xl p-4 lg:p-6 mb-6 text-white backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`font-bold text-white ${isMobile ? 'text-xl' : 'text-2xl'}`}>ATxShockwave</h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className={`font-semibold text-red-400 ${isMobile ? 'text-sm' : 'text-base'}`}>LIVE</span>
              </div>
              <span className="text-slate-400 text-xs">•</span>
              <span className={`text-slate-300 ${isMobile ? 'text-xs' : 'text-sm'}`}>Playing Valorant</span>
            </div>
            {!isMobile && (
              <div className="flex items-center gap-1 mt-2 text-slate-400 text-sm">
                <Monitor className="w-4 h-4" />
                <span>1,234 viewers</span>
              </div>
            )}
          </div>
          <div className={`${isMobile ? 'text-4xl' : 'text-5xl'}`}>🎮</div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-100 text-center p-4 lg:p-6 rounded-xl lg:rounded-2xl mb-6 animate-fade-in backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Gift className="w-5 h-5" />
            <span className="font-semibold">Tip Sent Successfully!</span>
          </div>
          <p className="text-sm text-green-200">ATxShockwave will see your message soon! 🎉</p>
        </div>
      )}

      {/* Tip Form */}
      <div className={`space-y-${isMobile ? '6' : '8'}`}>

        {/* Quick Amount Buttons - Responsive grid */}
        <div>
          <label className={`block font-semibold text-slate-300 mb-3 ${isMobile ? 'text-sm' : 'text-base'}`}>
            Quick Amount
          </label>
          <div className={`grid gap-2 ${isMobile ? 'grid-cols-3' : 'grid-cols-2 lg:grid-cols-3'}`}>
            {quickAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => handleQuickAmount(amount)}
                className={`p-3 lg:p-4 rounded-xl text-sm lg:text-base font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                  selectedQuickAmount === amount
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg border-2 border-purple-400'
                    : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-600'
                }`}
              >
                ₹{amount}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div>
          <label htmlFor="amount" className={`block font-semibold text-slate-300 mb-2 ${isMobile ? 'text-sm' : 'text-base'}`}>
            Custom Amount
          </label>
          <div className="relative">
            <input
              type="number"
              name="amount"
              id="amount"
              min={1}
              max={10000}
              value={formData.amount}
              onChange={handleInputChange}
              className={`w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 lg:py-4 pr-16 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm ${isMobile ? 'text-base' : 'text-lg'}`}
              required
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <span className={`text-slate-400 font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>INR</span>
            </div>
          </div>
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className={`block font-semibold text-slate-300 mb-2 ${isMobile ? 'text-sm' : 'text-base'}`}>
            Your Name <span className="text-slate-500 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name or stay anonymous"
            maxLength={50}
            className={`w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 lg:py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm ${isMobile ? 'text-base' : 'text-lg'}`}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={`block font-semibold text-slate-300 mb-2 ${isMobile ? 'text-sm' : 'text-base'}`}>
            Message <span className="text-slate-500 font-normal">(optional)</span>
          </label>
          <textarea
            name="message"
            id="message"
            rows={isMobile ? 3 : 4}
            maxLength={200}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Say something nice to ATxShockwave..."
            className={`w-full bg-slate-800/50 border border-slate-600 rounded-xl px-4 py-3 lg:py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all backdrop-blur-sm ${isMobile ? 'text-base' : 'text-lg'}`}
          />
          <div className="flex justify-between items-center mt-2">
            <div className="text-xs text-slate-500">
              {formData.message.length}/200 characters
            </div>
            {formData.message.length > 150 && (
              <div className="text-xs text-amber-400">
                {200 - formData.message.length} left
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold py-4 lg:py-5 rounded-xl transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:cursor-not-allowed disabled:transform-none shadow-lg disabled:shadow-none ${isMobile ? 'text-base' : 'text-lg'}`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              <span>Sending Tip...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Coffee className="w-5 h-5" />
              <span>Send Tip ₹{formData.amount}</span>
            </div>
          )}
        </button>
      </div>

      {/* Footer */}
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
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs">
          <Link href="/privacy" className="text-slate-400 hover:text-white hover:underline">Privacy Policy</Link>
          <span className="text-slate-600">•</span>
          <Link href="/terms" className="text-slate-400 hover:text-white hover:underline">Terms & Conditions</Link>
          <span className="text-slate-600">•</span>
          <Link href="/shipping" className="text-slate-400 hover:text-white hover:underline">Shipping</Link>
          <span className="text-slate-600">•</span>
          <Link href="/cancellation" className="text-slate-400 hover:text-white hover:underline">Cancellation & Refund</Link>
          <span className="text-slate-600">•</span>
          <Link href="/contact" className="text-slate-400 hover:text-white hover:underline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}