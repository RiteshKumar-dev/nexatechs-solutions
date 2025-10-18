'use client';
import React from 'react';
import Link from 'next/link';

export default function GetInTouch() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background waves */}
      <div className="absolute inset-0">
        <img
          src="/Img10.jpg"
          alt="Background waves"
          className="w-full h-full object-contain opacity-40 animate-bounce"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <span className="text-sm font-semibold text-black uppercase tracking-wide">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Ready to{' '}
          <span className="text-gradient bg-clip-text text-transparent bg-purple-500">
            transform your vision
          </span>{' '}
          into reality?
        </h2>
        <p className="text-lg sm:text-xl text-gray-700">Let’s get started on your project!</p>
        <Link href="/contact-us">
          <button className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-500 transition-all">
            Request A Proposal
          </button>
        </Link>
      </div>
    </section>
  );
}
