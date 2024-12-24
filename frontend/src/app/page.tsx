"use client";

import { ConnectEmbed } from "./thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import BuyMeCoffee from "../../components/BuyMeCoffee";
import { Coffee, Clock } from 'lucide-react';
import { useState } from "react";
import Footer from "../../components/Footer";

// Sample recent tips data
const recentTips = [
  { address: "0x1234...5678", amount: "0.005 ETH", message: "Great work! Keep it up!", time: "2 mins ago" },
  { address: "0x8765...4321", amount: "0.001 ETH", message: "Love your projects!", time: "5 mins ago" },
  { address: "0x9876...1234", amount: "0.01 ETH", message: "Thanks for the amazing content", time: "10 mins ago" },
];

export default function Home() {
  const [tipAmount, setTipAmount] = useState(0);
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const numericAmount = parseFloat(amount); // Convert string to number
  if (isNaN(numericAmount) || numericAmount <= 0) {
    alert("Please enter a valid amount to tip");
    return;
  }
    console.log({ message, amount })
  }

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Header Section */}
      <div className="w-full border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="w-6 h-6 text-amber-500" />
            <span className="text-zinc-200 font-bold">Web3 Buy Me A Coffee</span>
          </div>
          <div>
            <BuyMeCoffee />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div className="space-y-6">
            <div className="inline-block p-2 bg-amber-500/10 rounded-xl">
              <Coffee className="w-10 h-10 text-amber-500" />
            </div>
            
            <h1 className="text-5xl font-bold text-amber-500">
              Buy Me A Coffee
            </h1>
            
            <p className="text-lg text-zinc-400 leading-relaxed">
              Support my work with a virtual coffee! Your contribution helps keep the creativity flowing ☕️
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <span className="text-amber-500">✓</span>
                </div>
                <span className="text-zinc-300">Support open source development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <span className="text-amber-500">✓</span>
                </div>
                <span className="text-zinc-300">Help maintain and improve projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <span className="text-amber-500">✓</span>
                </div>
                <span className="text-zinc-300">Enable new feature development</span>
              </div>
            </div>
          </div>

          {/* Right Column - Connect/Buy */}
          <div className="flex flex-col items-center">
            <ConnectEmbed client={client} chain={chain} />
          </div>
        </div>
      </div>

      {/* Tip Form and Recent Tips Section */}
      <div className="max-w-6xl mx-auto px-4 pb-24  my-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Recent Tips */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-200 uppercase">Recent Supporters</h2>
            <div className="space-y-4">
              {recentTips.map((tip, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/50 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-amber-500 font-medium">{tip.address}</span>
                    <span className="text-zinc-400">{tip.amount}</span>
                  </div>
                  <p className="text-zinc-300">{tip.message}</p>
                  <div className="flex items-center gap-1 text-zinc-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{tip.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Tip Form */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-zinc-300 uppercase flex justify-center">Send a Tip</h2>
            
            {/* Preset amounts */}
            <div className="grid grid-cols-3 gap-4 ">
              {['0.001', '0.005', '0.01'].map((value) => (
                <button
                  key={value}
                  onClick={() => setAmount(value)}
                  className={`p-4 rounded-lg border ${
                    amount === value 
                      ? 'border-amber-500 bg-amber-500/10 text-amber-500' 
                      : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 text-zinc-400 hover:text-zinc-300'
                  } transition-all duration-200`}
                >
                  <div className="text-lg font-medium">{value} ETH</div>
                  <div className="text-sm opacity-60">
                    ≈ ${(parseFloat(value) * 2000).toFixed(2)}
                  </div>
                </button>
              ))}
            </div>

            {/* Tip Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Custom amount input */}
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  step="0.001"
                  min="0"
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/20"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600">ETH</div>
              </div>

              {/* Message input */}
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a message...."
                  rows={3}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/20 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-900 font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Coffee className="w-5 h-5" />
                Send Tip
              </button>
            </form>

            {/* Transaction info */}
            <div className="text-sm text-zinc-500 space-y-2">
              <div className="flex justify-between">
                <span>Network Fee</span>
                <span>≈ $1.50</span>
              </div>
              <div className="flex justify-between">
                <span>Processing Time</span>
                <span>~30 seconds</span>
              </div>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

