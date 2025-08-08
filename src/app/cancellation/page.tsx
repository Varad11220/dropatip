'use client';

import React from 'react';
import { Heart, Smartphone, Zap } from 'lucide-react';

export default function CancellationPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">Refund Policy</h1>
              <p className="text-slate-400 text-sm">Last updated on Aug 5 2025</p>
            </div>
            <div className="prose prose-invert max-w-none text-slate-300 text-base lg:text-lg" style={{whiteSpace: 'pre-line'}}>
{`
Because all products on Drop A Tip are digital/virtual and delivered instantly (e.g., live stream alert, recognition, badge), all sales are final.

No Refunds: We do not offer refunds or cancellations once a digital product/order is completed.

Payment failures: If money is deducted but the digital product is not delivered (e.g., alert didn’t fire), contact us at ddcss002@gmail.com within 48 hours. We will investigate and, if a genuine error was caused by our system, we may issue a refund or re-trigger the digital benefit.

Fraud/Inappropriate Use: Accounts may be suspended, and payments to creators held, if we detect fraudulent or abusive transactions.

For refund or payment issues, please email us promptly at ddcss002@gmail.com with transaction details.
`}
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