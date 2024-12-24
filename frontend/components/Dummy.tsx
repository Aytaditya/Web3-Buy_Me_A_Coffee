// import Image from "next/image";
// import { ConnectEmbed } from "./thirdweb";
// import { client } from "./client";
// import { chain } from "./chain";
// import BuyMeCoffee from "../../components/BuyMeCoffee";
// import { Coffee } from 'lucide-react';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-zinc-900 to-zinc-900 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
//       <div className="absolute inset-0 bg-zinc-900/90" />

//       {/* Coffee cup decorative shapes */}
//       <div className="absolute -left-20 top-40 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
//       <div className="absolute -right-20 top-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />

//       <div className="relative">
//         <div className="max-w-7xl mx-auto px-6 py-16">
//           {/* Hero Section */}
//           <div className="flex flex-col items-center mb-16 relative">
//             <div className="mb-8">
//               <Coffee className="w-16 h-16 text-amber-500/80" />
//             </div>
//             <h1 className="text-6xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
//               Buy Me A Coffee
//             </h1>
//             <p className="text-xl text-zinc-400 text-center max-w-2xl mx-auto">
//               Support my work with a virtual coffee! Your contribution helps keep the creativity flowing ☕️
//             </p>
//           </div>

//           {/* Main Content */}
//           <div className="max-w-md mx-auto">
//             <div className="relative z-10 bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50 shadow-2xl">
//               <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent opacity-50 rounded-2xl" />
//               <div className="relative">
//                 <ConnectEmbed client={client} chain={chain} />
                
//                 <div className="mt-8 flex justify-center">
//                   <BuyMeCoffee />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <footer className="mt-16 text-center">
//             <p className="text-zinc-500">
//               Powered by secure blockchain technology
//             </p>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// }

