'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiFirebase,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('Frontend');

  const tabs = ['Frontend', 'Backend', 'Database', 'Cloud Storage'];

  const techStack = {
    Frontend: {
      Programming: [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS', icon: SiCss3, color: '#1572B6' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      ],
      Frameworks: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Vue', icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      ],
    },
    Backend: {
      Programming: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
      ],
      Frameworks: [
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'Django', icon: SiDjango, color: '#092E20' },
      ],
    },
    Database: {
      Programming: [
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      ],
      Frameworks: [],
    },
    'Cloud Storage': {
      Programming: [
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      ],
      Frameworks: [],
    },
  };

  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Preferred <span className="text-gray-900">Tech Stack</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-10 mb-8 border-b-2 border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-semibold ${
              activeTab === tab
                ? 'text-gray-900 border-b-4 border-purple-500'
                : 'text-gray-500 hover:text-gray-900'
            } transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <div className="max-w-5xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {techStack[activeTab].Programming.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition"
            whileHover={{ scale: 1.1 }}
          >
            <Icon className="w-16 h-16 mb-2" color={color} />
            <span className="text-gray-700 font-medium">{name}</span>
          </motion.div>
        ))}
        {techStack[activeTab].Frameworks.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition"
            whileHover={{ scale: 1.1 }}
          >
            <Icon className="w-16 h-16 mb-2" color={color} />
            <span className="text-gray-700 font-medium">{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
