'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

// Add category to each FAQ
const faqs = [
  {
    question: 'What software development services do you offer?',
    answer:
      'We provide full-cycle software development including mobile & web apps, cloud solutions, AI-powered tools, IoT integrations, and enterprise-grade custom software.',
    category: 'Capabilities',
  },
  {
    question: 'Do you provide dedicated teams or project-based work?',
    answer:
      'We offer both team augmentation with dedicated experts and project-based delivery, depending on your business needs and project complexity.',
    category: 'Capabilities',
  },
  {
    question: 'How do you ensure data security in your solutions?',
    answer:
      'We follow best practices in DevSecOps, encryption, secure cloud deployment, and compliance standards to safeguard your data and infrastructure.',
    category: 'Privacy & Security',
  },
  {
    question: 'Can you help with cloud migration and modernization?',
    answer:
      'Yes! Our experts design cloud-native architectures, migrate legacy systems, and optimize workloads for performance, scalability, and cost efficiency.',
    category: 'Capabilities',
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer:
      'Absolutely. We provide continuous support, monitoring, updates, and managed services to ensure your software runs smoothly and stays future-ready.',
    category: 'General',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'General', 'Capabilities', 'Privacy & Security'];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' ? true : faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white mt-5">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Side: Header, Search, FAQ */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Header */}
          <div className="text-left">
            <h2 className="text-purple-400 font-bold uppercase text-lg tracking-widest mb-2">
              Frequently asked questions
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-3 text-gray-400" />
          </div>

          {/* FAQ Accordion */}
          <div className="flex flex-col gap-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-800 transition"
                  >
                    <span className="font-medium text-lg sm:text-xl">{faq.question}</span>
                    {openIndex === idx ? (
                      <ChevronUp className="w-5 h-5 text-purple-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-500 ${
                      openIndex === idx ? 'max-h-96 py-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 mt-6">
                No FAQs match your search or category.
              </p>
            )}
          </div>
        </div>

        {/* Right Side: Category Buttons */}
        <div className="w-full lg:w-56 flex-shrink-0 flex flex-col gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
