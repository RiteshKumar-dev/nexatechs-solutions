'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import Image from 'next/image';

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
    image: '/Img3.png',
    quote: 'You guys handled every challenge with ease and kept our company ahead.',
    videoUrl: '#',
  },
  {
    name: 'Akbar Ali',
    title: 'CEO',
    company: 'Headlyne App',
    image: '/Img4.png',
    quote:
      'Because of their superb work, we were able to get the best app award by Google for the year 2024 in the personal growth category.',
    videoUrl: '#',
  },
  {
    name: 'Topaz Adizes',
    title: 'CEO & Founder',
    company: 'The Skin Deep',
    image: '/Img5.png',
    quote: 'I would recommend you to any future clients!',
    videoUrl: '#',
  },
  {
    name: 'Miles Bailey',
    title: 'Chief Officer',
    company: 'PulseX',
    image: '/Img6.png',
    quote: 'You guys handled every challenge with ease and kept our company ahead.',
    videoUrl: '#',
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const timer = useRef(null);

  const goTo = (n) => setActive((n + total) % total);
  const handleNext = () => goTo(active + 1);
  const handlePrev = () => goTo(active - 1);

  useEffect(() => {
    if (!paused) {
      timer.current = setTimeout(() => {
        handleNext();
      }, 4000);
    }
    return () => clearTimeout(timer.current);
  }, [active, paused]);

  return (
    <section
      className="w-full bg-[#19192c] text-white px-4 py-16 mt-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold uppercase mb-2 tracking-tight">
            BUILT TOGETHER. GROWN TOGETHER.
          </h2>
          <p className="text-2xl md:text-3xl font-light mb-2 leading-relaxed max-w-4xl mx-auto md:mx-0">
            Discover how we’ve collaborated with leading startups, scaleups, and enterprises to
            build <span className="text-purple-400 font-bold">next-gen digital solutions</span>—from
            concept to launch to long-term support. Our clients’ success stories speak volumes
          </p>
          <h3 className="mt-8 tracking-wide text-lg md:text-xl font-semibold">
            EXCEEDING EXPECTATIONS, DELIVERING EXCELLENCE
          </h3>
        </div>

        {/* Clutch Reviews */}
        <div className="flex items-center gap-3 justify-center md:justify-end mb-8">
          <span className="uppercase text-xs">Reviewed on</span>
          <span className="text-2xl font-bold text-white">Clutch</span>
          <span className="text-red-400 flex gap-1 text-lg">{'★★★★★'}</span>
          <span className="text-xs text-white">113 REVIEWS</span>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${active * (100 / Math.min(total, 3))}%)` }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={item.company + idx}
                className="flex-shrink-0 w-full md:w-[32%] bg-[#253244] rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-semibold mb-1">{item.company}</h4>
                  <div className="text-sm font-bold opacity-90">
                    {item.name}, {item.title}
                  </div>
                  <blockquote className="text-base leading-relaxed opacity-90">
                    "{item.quote}"
                  </blockquote>
                  <a
                    href={item.videoUrl}
                    className="flex items-center gap-2 mt-2 text-purple-400 font-semibold hover:underline"
                  >
                    <PlayCircle size={22} />
                    Watch
                  </a>
                </div>
                <div className="flex justify-end mt-4">
                  <div className="rounded-xl overflow-hidden w-24 h-24 flex items-center">
                    <Image
                      src={item.image}
                      alt={`${item.company} logo`}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-5 mt-8">
            <button
              onClick={handlePrev}
              className="bg-[#233053] p-3 rounded-full hover:bg-purple-700 transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="bg-[#233053] p-3 rounded-full hover:bg-purple-700 transition"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${active === idx ? 'bg-purple-400 w-8' : 'bg-gray-700 w-3'}`}
                onClick={() => goTo(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
