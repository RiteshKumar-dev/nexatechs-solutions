'use client';

import Link from 'next/link';

export default function StickyBannerComponent() {
  return (
    <div className="relative w-full flex flex-col overflow-y-auto">
      {/* Fixed banner at the very top */}
      <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-blue-400 to-blue-600 text-white z-50 shadow-md">
        <div className="mx-auto px-4 py-2 text-center">
          <p className="text-sm md:text-base font-medium drop-shadow-md">
            Announcing $10M seed funding from Project Mayhem Ventures.&nbsp;
            <Link href="#" className="underline hover:text-gray-200 transition duration-200">
              Read announcement
            </Link>
          </p>
        </div>
      </div>

      {/* Add padding-top equal to banner height to avoid overlap */}
      <div className="pt-12">{/* Your page content here */}</div>
    </div>
  );
}
