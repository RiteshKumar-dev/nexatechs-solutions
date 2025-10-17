'use client';
import React from 'react';
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative w-full flex items-center justify-center bg-gradient-to-br from-[#f7edf7] to-[#ede7fa] overflow-hidden">
      {/* Ripple Effect Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <BackgroundRippleEffect rows={8} cols={27} cellSize={56} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4 py-12 md:py-16 lg:py-26">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 md:gap-4">
          {/* Left Image */}
          <div className="flex flex-col items-center justify-center translate-y-6 -translate-x-20 md:-translate-y-4 w-full md:w-1/5">
            <motion.img
              src="/Img1.png"
              alt="App Demo"
              className="object-contain w-32 h-20 sm:w-40 sm:h-24 md:w-36 md:h-24 lg:w-44 lg:h-28"
              style={{ filter: 'drop-shadow(0 0 24px #c4b5fd88)' }}
              initial={{ scale: 0.97 }}
              animate={{ scale: [0.97, 1.05, 0.97] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center justify-center text-center w-full md:w-3/5">
            <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-extrabold text-neutral-900 leading-snug mb-6">
              Building <span className="text-purple-600">AI-Powered</span> Apps, Agents,
              <br className="hidden sm:block" />
              and Platforms
            </h1>

            <div className="text-sm sm:text-base md:text-md mt-2 mb-4 text-neutral-700 font-semibold">
              <p>Your Strategic Partner for AI, Mobile, Cloud, and Digital Transformation.</p>
              <p>Trusted by 1200+ Global Brands, Scaleups, and Startups.</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6 w-full sm:w-auto">
              <button className="bg-black text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2 rounded-md font-semibold shadow hover:bg-gray-800 transition duration-200">
                Our Work
              </button>
              <button className="bg-gradient-to-r from-pink-400 to-purple-500 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2 rounded-md font-semibold shadow hover:from-pink-500 hover:to-purple-600 transition duration-200">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex flex-col items-center justify-center translate-y-2 translate-x-20 md:translate-y-6 w-full md:w-1/5">
            <motion.img
              src="/Img2.webp"
              alt="Analytics"
              className="object-contain w-44 h-24 sm:w-52 sm:h-28 md:w-60 md:h-28 lg:w-72 lg:h-32"
              style={{ filter: 'drop-shadow(0 8px 40px #bfa9f2bb)' }}
              initial={{ scale: 0.97 }}
              animate={{ scale: [0.97, 1.05, 0.97] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
