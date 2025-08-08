'use client';

import React from 'react';
import { Heart, Smartphone, Zap } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <>
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-4xl">
          {/* Policy content card */}
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-6 lg:p-8 w-full transition-all duration-500 ease-out hover:shadow-purple-500/10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">Privacy Policy</h1>
              <p className="text-slate-400 text-sm">Last updated on Aug 5 2025</p>
            </div>
            <div className="prose prose-invert max-w-none text-slate-300 text-base lg:text-lg" style={{whiteSpace: 'pre-line'}}>
            {`
This privacy policy explains how ATxShockwave handles the information you provide when tipping on our platform.

We only collect the following optional data at the time of your tip:

- Name (can be left blank to stay anonymous)
- Message (optional)
- Tip amount (required for processing)

What we do with this information:

- The tip amount is processed securely through our payment system.
- If a name is provided, it may be displayed as a live alert on stream.
- If no name is provided, the tip will appear as anonymous.
- Messages may also be shown publicly during the stream if submitted.

We do not collect or store any contact details (like email or phone number).
We do not use your data for marketing, profiling, or any third-party sharing.

Your data is only used to process and display the tip during the stream. We retain transaction records solely for internal use (e.g., moderation or verification).

Cookies:

Our site may use basic cookies to enable smooth operation and remember basic preferences, but we do not track or profile users.

Contact:

If you have any questions about how your data is handled, please contact us at ddcss002@gmail.com
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
    </>
  );
}