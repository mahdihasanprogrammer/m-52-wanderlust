"use client";

import Link from "next/link";
import { FaCompass, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-cyan-500/10 blur-3xl rounded-full"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-xl text-center">
        
        {/* Icon */}
        <div className="flex justify-center my-6">
          <div className="p-5 border border-cyan-400/20 rounded-full backdrop-blur-sm">
            <FaCompass className="text-cyan-400 text-4xl" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-6xl sm:text-7xl font-black text-cyan-400 leading-none">
          404
        </h1>

        {/* Heading */}
        <h2 className="my-4 text-2xl sm:text-3xl font-bold">
          Destination Not Found
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-400 leading-7 max-w-md mx-auto">
          The page you are trying to visit may have been removed,
          renamed, or is temporarily unavailable.
        </p>

        {/* Actions */}
        <div className="my-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            href="/"
            className="px-6 py-3 text-sm font-semibold rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            Back To Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm rounded-xl border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300"
          >
            <FaArrowLeft className="text-xs" />
            Go Back
          </button>
        </div>

        {/* Bottom Text */}
        <p className="text-xs text-gray-500">
          Keep exploring new places around the world.
        </p>
      </div>
    </div>
  );
}