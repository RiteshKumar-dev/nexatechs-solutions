'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Page() {
  const floatTransition = {
    y: { duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center max-h-[450px] mt-16 pt-12 pb-20 px-5 sm:px-6 md:px-8 overflow-hidden">
      {/* Background (unchanged) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-400/30 rounded-full blur-3xl animate-pulse top-[-150px] left-[-100px]" />
        <div className="absolute w-[700px] h-[700px] bg-pink-400/40 rounded-full blur-3xl animate-pulse delay-500 bottom-[-200px] right-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-3xl animate-pulse top-[150px] right-[200px]" />
      </div>

      {/* Floating images */}
      <motion.img
        src="/Img1.png"
        alt="Left Top Decoration"
        className="absolute w-20 sm:w-28 md:w-32 top-6 left-4 sm:left-10 md:left-20 z-10 select-none pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={floatTransition}
        draggable={false}
      />
      <motion.img
        src="/Img2.webp"
        alt="Right Bottom Decoration"
        className="absolute w-24 sm:w-32 md:w-36 bottom-6 right-4 sm:right-10 md:right-20 z-10 select-none pointer-events-none"
        animate={{ y: [0, 25, 0] }}
        transition={floatTransition}
        draggable={false}
      />

      {/* Hero content */}
      <div className="flex flex-col items-center justify-center text-center w-full max-w-3xl z-20">
        <h1 className="text-[1.9rem] sm:text-4xl md:text-5xl lg:text-[2.6rem] font-extrabold text-neutral-900 leading-snug mb-6 px-2">
          Building <span className="text-purple-600">AI-Powered</span> Apps, Agents,
          <br className="hidden sm:block" />
          and Platforms
        </h1>

        <div className="text-xs sm:text-base md:text-md font-medium mt-1 mb-8 text-neutral-700 leading-relaxed px-3 sm:px-4 max-w-xl mx-auto">
          <p>Your Strategic Partner for AI, Mobile, Cloud, and Digital Transformation.</p>
          <p className="mt-1">Trusted by 1200+ Global Brands, Scaleups, and Startups.</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 mt-4 w-full max-w-xs sm:max-w-none z-20">
        <Link href="/case-studies" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-black text-white text-base sm:text-lg px-8 py-2 rounded-md font-semibold shadow hover:bg-gray-800 transition duration-200">
            Our Work
          </button>
        </Link>
        <Link href="/contact-us" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-gradient-to-r from-pink-400 to-purple-500 text-white text-base sm:text-lg px-8 py-2 rounded-md font-semibold shadow hover:from-pink-500 hover:to-purple-600 transition duration-200">
            Get a Quote
          </button>
        </Link>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
