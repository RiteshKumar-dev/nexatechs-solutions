'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const cards = [
  {
    color: 'from-[#A98DFE] to-[#6D91FF]', // purple-blue
    number: '01',
    heading: 'Build & Launch a New App or Digital Platform',
    desc: `Transform your vision into a market-ready, cloud-native, secure, and scalable digital product.`,
    tags: 'Discovery. UX Strategy. Prototypes. Enterprise-Ready Launch',
    cta: 'Get Started →',
    href: '#',
  },
  {
    color: 'from-[#9A8BFB] to-[#5EC6FF]', // blue
    number: '02',
    heading: 'Augment Your Team with Top-tier Talent',
    desc: `Expand your capabilities with flexible and dedicated engineering teams, accelerate delivery, reduce hiring overhead, and extend your in-house capabilities.`,
    tags: 'AI/ML. Frontend. Backend. Full Stack. iOS. Android. React. Flutter. Node. Python',
    cta: 'Get Started →',
    href: '#',
  },
  {
    color: 'from-[#A67BBE] to-[#FFB4E6]', // purple-pink
    number: '03',
    heading: 'Migrate. Modernize. Maintain',
    desc: `Migrate your legacy platforms with modern architecture, better performance, and built-in security—while ensuring ongoing support and enhancements.`,
    tags: 'Cloud Migration. Microservices. Serverless. DevSecOps. AI Integration',
    cta: 'Get Started →',
    href: '#',
  },
];

export default function StrategicPathSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide mb-3">
            Select Your Strategic Path
          </h2>
          <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From launching new AI initiatives to augmenting your teams or modernizing your legacy
            systems, TechAhead meets you where you are.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col md:flex-row gap-8 items-stretch">
          {cards.map((card, idx) => (
            <motion.div
              key={card.number}
              className="flex-1 relative rounded-2xl bg-white shadow-lg p-6 md:p-8 border border-gray-200 overflow-hidden hover:shadow-2xl transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Top Border */}
              <div
                className={`absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r ${card.color}`}
              />

              {/* Card Content */}
              <div className="flex flex-col items-center text-center mt-6 md:mt-8">
                <span className="text-4xl font-bold text-purple-500 mb-4">{card.number}</span>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900">
                  {card.heading}
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">{card.desc}</p>
                <div className="text-xs md:text-sm font-medium text-gray-600 mb-6">{card.tags}</div>
                <Link
                  href={card.href}
                  className="text-purple-600 font-semibold text-sm md:text-base hover:underline flex items-center gap-1"
                >
                  {card.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
