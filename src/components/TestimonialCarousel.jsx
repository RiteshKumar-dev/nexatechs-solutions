'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Akbar Ali',
    title: 'CEO',
    company: 'Headlyne App',
    image: '/Img1.png',
    quote:
      'Because of their superb work, we were able to get the best app award by Google for the year 2024 in the personal growth category.',
    videoUrl: '#',
  },
  {
    name: 'Topaz Adizes',
    title: 'CEO & Founder',
    company: 'The Skin Deep',
    image: '/Img2.webp',
    quote: 'I would recommend you to any future clients!',
    videoUrl: '#',
  },
  {
    name: 'Miles Bailey',
    title: 'Chief Officer',
    company: 'PulseX',
    image: '/Img1.png',
    quote: 'You guys handled every challenge with ease and kept our company ahead.',
    videoUrl: '#',
  },
  {
    name: 'Lara Smith',
    title: 'CTO',
    company: 'InnovateX',
    image: '/Img2.webp',
    quote: 'Their innovative solutions transformed our business.',
    videoUrl: '#',
  },
  {
    name: 'David Kim',
    title: 'Lead Developer',
    company: 'TechNova',
    image: '/Img1.png',
    quote: 'Exceptional service and timely delivery.',
    videoUrl: '#',
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const intervalRef = useRef(null);
  const total = testimonials.length;

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    startAutoScroll();
    return () => {
      stopAutoScroll();
      window.removeEventListener('resize', updateCardsPerView);
    };
  }, []);

  // Restart auto-scroll if cardsPerView changes (window resize)
  useEffect(() => {
    startAutoScroll();
    // Reset active index if no longer valid for current cardsPerView
    if (activeIndex >= Math.ceil(total / cardsPerView)) {
      setActiveIndex(0);
    }
  }, [cardsPerView]);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.ceil(total / cardsPerView));
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? Math.ceil(total / cardsPerView) - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % Math.ceil(total / cardsPerView));
  };

  return (
    <section
      className="w-full bg-gradient-to-b from-[#1a1c2e] to-[#181a2e] text-white px-6 py-20 sm:px-10 lg:px-16 mt-10 overflow-hidden"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
      aria-label="Testimonials Carousel"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-12">
        <header className="text-center max-w-4xl space-y-4">
          <h2 className="text-sm md:text-base font-semibold text-purple-500 uppercase tracking-wider">
            Built Together. Grown Together.
          </h2>
          <p className="text-3xl sm:text-4xl font-light text-gray-200 leading-relaxed">
            We’ve collaborated with global{' '}
            <span className="text-purple-400 font-semibold">
              startups, scaleups, and enterprises
            </span>{' '}
            to build next-gen digital solutions — from concept to launch and beyond.
          </p>
          <h3 className="text-base md:text-lg font-semibold opacity-90 tracking-wide text-gray-400">
            Exceeding Expectations. Delivering Excellence.
          </h3>
        </header>

        <div className="flex items-center gap-4 justify-center bg-[#2c2f50] rounded-full px-6 py-2 shadow-md">
          <span className="uppercase text-xs sm:text-sm tracking-wide text-gray-300">
            Reviewed on
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-white">Clutch</span>
          <span className="text-red-400 flex gap-1 text-lg sm:text-xl select-none">★★★★★</span>
          <span className="text-xs sm:text-sm text-gray-400 font-medium">113 REVIEWS</span>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-8"
            style={{
              width: `${(total * 100) / cardsPerView}%`,
              transform: `translateX(-${activeIndex * (100 / total)}%)`,
            }}
          >
            {testimonials.map((item, idx) => (
              <article
                key={idx}
                className="flex-shrink-0 rounded-3xl bg-[#2a2f4a] shadow-xl flex flex-col sm:flex-row h-full overflow-hidden"
                style={{ flex: `0 0 ${100 / total}%` }}
                aria-label={`Testimonial from ${item.name} at ${item.company}`}
              >
                <div className="sm:w-1/3 w-full bg-gradient-to-tr from-[#1c1f35] to-[#292f54] flex items-center justify-center p-4 sm:p-6">
                  <img
                    src={item.image}
                    alt={`${item.company} logo`}
                    className="w-full max-h-48 sm:max-h-full object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>

                <div className="sm:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center text-center sm:text-left">
                  <h4 className="text-xl sm:text-2xl font-extrabold mb-2 sm:mb-3 tracking-tight text-purple-400">
                    {item.company}
                  </h4>
                  <p className="text-sm sm:text-md font-semibold text-gray-300 mb-2 sm:mb-3">
                    {item.name}, {item.title}
                  </p>
                  <blockquote className="text-base sm:text-lg font-light italic text-gray-300 leading-relaxed mb-4 sm:mb-6 truncate">
                    “{item.quote}”
                  </blockquote>
                  <a
                    href={item.videoUrl}
                    className="inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-purple-500 hover:text-purple-400 font-semibold transition-colors text-sm sm:text-base"
                    aria-label={`Watch video testimonial from ${item.name}`}
                  >
                    <PlayCircle size={20} />
                    Watch
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="bg-[#344070] p-4 rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-lg transition"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonials"
              className="bg-[#344070] p-4 rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-lg transition"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {Array.from({ length: Math.ceil(total / cardsPerView) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to testimonials page ${idx + 1}`}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'bg-purple-500 w-8' : 'bg-gray-600 w-4'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
