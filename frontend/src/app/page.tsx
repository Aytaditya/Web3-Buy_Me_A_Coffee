import Image from "next/image";
import { ConnectEmbed } from "./thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import BuyMeCoffee from "../../components/BuyMeCoffee";
import { Coffee } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Header Section */}
      <div className="w-full border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="w-6 h-6 text-amber-500" />
            <span className="text-zinc-200 font-medium">Coffee Support</span>
          </div>
          <a 
            href="https://github.com/Aytaditya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            View on GitHub
          </a>
          <div>
            <BuyMeCoffee />
          </div>
        </div>
      </div>

      {/* Main Content */}
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
            {/* <div className="mt-6">
              <BuyMeCoffee />
            </div> */}
          </div>
        </div>
      </div>

      <div className="px-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odio temporibus officiis numquam. Dolorum assumenda fuga molestiae magni error, possimus esse qui porro distinctio quis quo ex harum soluta saepe?
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full border-t border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between text-sm">
          <span className="text-zinc-500">
            Powered by secure blockchain technology
          </span>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#" className="hover:text-zinc-200 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-200 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

