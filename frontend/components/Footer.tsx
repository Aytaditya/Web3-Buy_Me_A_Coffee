import React from 'react'
import { useReadContract } from 'thirdweb/react'
import { contract } from '../utils/contract'

const Footer = () => {
  const {data:totalCoffee,refetch:refetchTotalCoffee}=useReadContract({
    contract:contract,
    method:"getTotalCoffee",
  })
  return (
    <div>
      {/* Footer */}
      <div className="fixed bottom-0 w-full border-t border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between text-sm">
          <span className="text-zinc-500">
            Powered by secure blockchain technology
          </span>
          <div className="flex items-center gap-4 text-zinc-400">
            <span className='text-amber-500 font-semibold uppercase'>
              {totalCoffee} Coffees Supported
            </span>
            <a href="#" className="hover:text-zinc-200 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-200 transition-colors">Privacy</a>
            <a 
            href="https://github.com/Aytaditya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            View on GitHub
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
