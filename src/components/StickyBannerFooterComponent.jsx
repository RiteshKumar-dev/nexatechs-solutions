'use client';

export default function StickyBannerFooterComponent() {
  return (
    <div className="relative flex w-full flex-col overflow-y-auto bg-black p-1">
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl items-center justify-between gap-3 px-4 py-1 mx-auto text-center md:text-left">
        <p className="text-white text-sm sm:text-base drop-shadow-md max-w-[90%] md:max-w-[70%]">
          Trusted by <span className="font-semibold">1,200+</span> global brands and Fortune 500
          leaders. Your vision, our expertise.
        </p>

        <button className="bg-white text-black font-medium text-sm sm:text-base px-5 py-1 rounded-md shadow-md hover:bg-gray-200 transition duration-200">
          Talk to an expert
        </button>
      </div>
    </div>
  );
}
