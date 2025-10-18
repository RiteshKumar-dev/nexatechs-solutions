'use client';
import { useEffect, useRef, useState } from 'react';

const logos = [
  '/Img3.png',
  '/Img4.png',
  '/Img5.jpg',
  '/Img6.png',
  '/Img7.png',
  '/Img8.png',
  '/Img1.png',
  '/Img2.webp',
];

const stats = [
  { value: 2500, display: '2,500+', label: 'Apps & Digital Products Delivered' },
  { value: 100, display: '100+', label: 'App Development Agency & B2B Provider Awards' },
  { value: 1200, display: '1,200+', label: 'Global Brands & Fast Growing Startups Trust us' },
  { value: 15, display: '15+', label: 'Years of Proven Success in the Industry' },
  { value: 250, display: '250+', label: 'In-house AI, Cloud, Web, and Mobile Experts' },
];

export default function TrustedBrandsSection() {
  const marqueeRef = useRef(null);
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Infinite marquee animation
  useEffect(() => {
    const node = marqueeRef.current;
    if (!node) return;

    let x = 0;
    let isPaused = false;

    const animate = () => {
      if (!isPaused) {
        x -= 1;
        node.style.transform = `translateX(${x}px)`;
        if (x <= -node.scrollWidth / 2) x = 0;
      }
      requestAnimationFrame(animate);
    };

    node.addEventListener('mouseenter', () => (isPaused = true));
    node.addEventListener('mouseleave', () => (isPaused = false));

    animate();
  }, []);

  // Count-up animation using IntersectionObserver
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started) {
          started = true;
          const duration = 1500;
          const startTime = performance.now();

          const animateCounts = (now) => {
            const progress = Math.min(1, (now - startTime) / duration);
            setCounts(stats.map((s) => Math.floor(progress * s.value)));
            if (progress < 1) requestAnimationFrame(animateCounts);
            else setCounts(stats.map((s) => s.value));
          };

          requestAnimationFrame(animateCounts);
        }
      },
      { threshold: 0.2 }, // triggers when 20% visible (works on mobile)
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-[#141527] to-[#203049] text-white py-16 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-teal-400 text-2xl md:text-3xl font-bold mb-3 text-center">
          Trusted By
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl mb-10 max-w-3xl">
          Empowering Global Brands and Startups to Drive Innovation and Success with our
          unparalleled expertise and commitment to excellence
        </p>

        <div className="w-full overflow-hidden mb-12">
          <div
            ref={marqueeRef}
            className="flex gap-10 sm:gap-14 items-center will-change-transform"
            style={{ width: 'max-content', minHeight: '56px' }}
          >
            {[...logos, ...logos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Brand logo"
                className="h-12 sm:h-14 object-contain opacity-80 hover:opacity-100 transition"
                style={{ maxWidth: 140 }}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full border-t border-white/10 pt-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-3">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                {`${counts[i].toLocaleString()}${stat.display.replace(/[0-9,]+/, '')}`}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-200 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
