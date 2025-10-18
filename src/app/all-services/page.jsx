'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import TechStack from '@/components/TechStack';

export default function HeroSection() {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);
  const crumbs = [
    { href: '/', label: 'Home' },
    ...pathParts.map((slug, idx) => ({
      href: '/' + pathParts.slice(0, idx + 1).join('/'),
      label: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    })),
  ];
  return (
    <>
      {' '}
      <section className="relative w-full min-h-[600px] flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 px-4 sm:px-6 lg:px-20 overflow-hidden mb-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2 text-base font-semibold mb-8"
        >
          {crumbs.map((crumb, idx) => (
            <span key={crumb.href} className="flex items-center">
              {idx > 0 && <span className="mx-1 text-gray-500 font-bold">›</span>}
              {idx === crumbs.length - 1 ? (
                <span className="text-gray-500 font-semibold">{crumb.label}</span>
              ) : (
                <a href={crumb.href} className="text-gray-700 hover:text-purple-500 transition">
                  {crumb.label}
                </a>
              )}
            </span>
          ))}
        </nav>
        {/* Main Content */}
        <div className="max-w-5xl text-center flex flex-col gap-6 z-10">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Elevate Your Business with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
              Full Stack Development Services
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            At TechAhead, we specialize in delivering full-stack development services tailored to
            meet the unique demands of your business. Whether you need to scale up for a project or
            fill specific skill gaps, our talent pool is ready to support your goals.
          </p>

          {/* Call to Action */}
          <div className="mt-8">
            <Link
              href="/contact-us"
              className="inline-block bg-gray-900 text-white px-10 py-2 rounded-lg font-semibold text-lg sm:text-xl hover:bg-gray-800 transition-transform transform hover:scale-105"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Floating visuals / graphics */}
        <motion.div
          className="absolute bottom-0 left-0 w-full flex justify-between px-4 md:px-20 -mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Left Image */}
          <motion.div
            className="hidden md:block w-32 h-32 bg-pink-200 rounded-full relative"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/Img2.webp"
              alt="Person illustration"
              className="absolute bottom-0 left-0 w-full h-full object-contain"
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="hidden md:block w-32 h-32 bg-purple-200 rounded-full relative"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <img
              src="/Img1.png"
              alt="Phone illustration"
              className="absolute bottom-0 right-0 w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
        {/* Optional floating statistic */}
        <div className="absolute bottom-0 right-10 md:right-20 mb-16 bg-purple-500 text-white rounded-full w-24 h-24 flex flex-col justify-center items-center shadow-lg">
          <span className="text-lg font-bold">95%</span>
          <span className="text-xs">Client Retention</span>
        </div>
      </section>
      <TechStack />
    </>
  );
}
