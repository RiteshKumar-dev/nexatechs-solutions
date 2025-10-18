'use client';
import { useRef, useEffect, useState } from 'react';

const services = [
  {
    title: 'Agentic AI, RAG & LLM Solutions',
    desc: 'We build intelligent autonomous agents, retrieval-augmented generation systems, and large language models that transform business decision-making processes.',
  },
  {
    title: 'Mobile & Web App Development',
    desc: 'We create high-performance iOS, Android, and cross-platform applications with responsive web solutions that deliver exceptional user experiences.',
  },
  {
    title: 'IoT & Wearables',
    desc: 'We develop connected device ecosystems with voice intelligence, data-driven insights, and real-time personalization for smart, responsive environments.',
  },
  {
    title: 'Cloud Modernization & DevSecOps',
    desc: 'We migrate, optimize, and secure your infrastructure with cloud-native architectures, automated deployment pipelines, and enterprise-grade security protocols.',
  },
  {
    title: 'Team Augmentation & Managed Services',
    desc: 'We accelerate development cycles with dedicated specialists, scale faster through flexible teams, and deliver fully managed development solutions.',
  },
  {
    title: 'Product Design & Strategy',
    desc: 'We create human-centric UX/UI designs through strategic discovery, consultation sessions, and comprehensive product roadmaps that drive user engagement.',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [animTrigger, setAnimTrigger] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisible(true);
          setAnimTrigger((val) => val + 1);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.2 }, // triggers when 20% of section is visible
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 bg-[#16121B] min-h-[80vh] flex flex-col items-center text-white"
    >
      <h3 className="text-lg font-bold text-purple-400 text-center uppercase mb-2 tracking-wide">
        Services We Offer
      </h3>
      <div className="text-2xl md:text-3xl font-semibold text-center mb-12 max-w-2xl mx-auto">
        Crafting digital excellence that drives
        <br />
        business transformation forward
      </div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {services.map((service, idx) => (
            <AnimatedCard
              key={animTrigger + '-' + idx}
              visible={visible}
              idx={idx}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCard({ visible, idx, title, desc }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timeout;
    if (visible) {
      timeout = setTimeout(() => setShow(true), idx * 100);
    } else {
      setShow(false);
    }
    return () => clearTimeout(timeout);
  }, [visible, idx]);

  return (
    <div
      className={`border border-purple-800/30 rounded-2xl p-6 min-h-[180px] bg-[#15101a] transition-all duration-500 ${
        show ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
      }`}
      style={{
        boxShadow: show ? '0 0 28px 0 rgba(110,78,203,0.09)' : 'none',
      }}
    >
      <div className="font-bold text-lg mb-3">{title}</div>
      <div className="text-sm text-gray-200 leading-relaxed">{desc}</div>
    </div>
  );
}
