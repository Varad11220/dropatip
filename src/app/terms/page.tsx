'use client';

import React from 'react';
import { Heart, Smartphone, Zap } from 'lucide-react';

export default function TermsPage() {
  return (
    <>
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-4xl">
          {/* Content card */}
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-6 lg:p-8 w-full transition-all duration-500 ease-out hover:shadow-purple-500/10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">Terms and Conditions</h1>
              <p className="text-slate-400 text-sm">Last updated on Aug 5 2025</p>
            </div>
            <div className="prose prose-invert max-w-none text-slate-300 text-base lg:text-lg" style={{whiteSpace: 'pre-line'}}>
            {`
For the purpose of these Terms and Conditions, the terms "we", "us", "our" refer to Drop a Tip. The terms "you", "your", "user", and "visitor" refer to any natural or legal person using our platform to send tips to ATxShockwave.

Your use of the platform and/or purchases are governed by the following Terms and Conditions:

1. Overview
Drop a Tip is an online tipping platform for ATxShockwave. Viewers may send tips or purchase digital recognition items that are non-physical and intended solely for entertainment, recognition, or support purposes. These have no monetary or transferable value.

2. Accounts
You do not need to create an account to send a tip (guest checkout is supported).
We may request minimal information (name, message, amount) solely for processing the tip and showing alerts.

3. Use of the Platform
Spamming, hate speech, fraudulent activity, or abuse of the tipping system is strictly prohibited.
We reserve the right to block users for violating our policies.

4. Digital Product Purchases
All tips and recognition items are delivered instantly during or after checkout (e.g., real-time on-stream alerts).
These are non-physical, non-refundable, and non-transferable.

5. Payments & Processing
All payments are securely processed through supported payment providers. 
Drop a Tip does not store your payment card or banking information.

6. Platform Fees
A small platform fee may apply per transaction to cover service and processing costs.

7. Liability
Drop a Tip is a technology provider facilitating tips to ATxShockwave.
We are not responsible for disputes between tippers and ATxShockwave.
We are not liable for failures caused by third-party payment processors or streaming integrations.

8. Transactions
We are not liable for any loss or damage caused by payment authorization failures due to limits set by your bank or payment provider.
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