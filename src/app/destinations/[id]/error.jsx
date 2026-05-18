"use client";

import Link from "next/link";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";

export default function ErrorPage({
  error,
  reset,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-red-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-cyan-400/10 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl text-center">
        
        {/* Icon */}
        <div className="flex justify-center my-6">
          <div className="p-5 border border-red-400/20 rounded-full backdrop-blur-sm">
            <FaExclamationTriangle className="text-red-400 text-4xl" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-5xl sm:text-6xl font-black text-red-400 leading-none">
          Oops!
        </h1>

        {/* Heading */}
        <h2 className="my-4 text-2xl sm:text-3xl font-bold">
          Something Went Wrong
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-400 leading-7 max-w-md mx-auto">
          An unexpected error occurred while loading this page.
          Please try again or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="my-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button
            onClick={() => reset()}
            className="px-6 py-3 text-sm font-semibold rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm rounded-xl border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300"
          >
            <FaArrowLeft className="text-xs" />
            Back To Home
          </Link>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500">
          If the problem continues, please contact support.
        </p>
      </div>
    </div>
  );
}