import { motion } from 'framer-motion';

const popupVariants = {
  open: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { duration: 0.23 } },
  closed: { opacity: 0, y: -20, pointerEvents: 'none', transition: { duration: 0.2 } },
};

const industries = [
  {
    name: 'Healthcare',
    icon: '❤️',
    desc: 'Uses digital twins & IoMT for personalized treatment & improved patient care',
  },
  {
    name: 'Fitness',
    icon: '🏋️‍♂️',
    desc: 'Crafting healthier lives together with smart tech solutions just for you',
  },
  {
    name: 'E-commerce',
    icon: '🛒',
    desc: 'Build your digital shopfront to drive sales & build visibility online',
  },
  {
    name: 'Construction',
    icon: '🏗️',
    desc: 'We are building tomorrow’s infrastructure today with smart construction',
  },
  {
    name: 'Aerospace & Defence',
    icon: '✈️',
    desc: 'Leverage AI to visualize real-time mission data for faster, critical decision-making',
  },
  {
    name: 'Industrial Manufacturing',
    icon: '🏭',
    desc: 'Design an app that predicts machine downtime to maximize production efficiency.',
  },
  { name: 'Telecom', icon: '📡', desc: '' },

  {
    name: 'Insurtech',
    icon: '📝',
    desc: 'Get real-time fraud alerts & transform your insurance operations with AI',
  },
  {
    name: 'Education',
    icon: '🎓',
    desc: 'Access anytime anywhere with cloud-based learning environments for all ages',
  },
  {
    name: 'Travel',
    icon: '🧳',
    desc: 'Book tours and activities instantly with mobile-friendly booking platforms',
  },
  {
    name: 'Restaurant',
    icon: '🍽️',
    desc: 'Innovate your apps, delight your guests with deliciously designed menus',
  },
  {
    name: 'Banking',
    icon: '🏦',
    desc: 'Deliver secure, seamless banking experiences to build trust and drive growth',
  },
  {
    name: 'Oil & Gas',
    icon: '💧',
    desc: 'Deploy AI for instant, remote pipeline monitoring to ensure safety and efficiency.',
  },
];

const industriesRight = [
  {
    name: 'Fintech',
    icon: '💰',
    desc: 'Integrate big data & IoT for smarter decisions with smart banking solutions',
  },
  {
    name: 'Sports',
    icon: '🚴‍♂️',
    desc: 'Effortless IoT integration for sports data in sports app development with us',
  },
  {
    name: 'Real Estate',
    icon: '🏠',
    desc: 'Monetize your real estate app with In-App purchases and seamless integration',
  },
  {
    name: 'Social Media',
    icon: '📱',
    desc: 'Drive downloads and boost your reach with a custom app development',
  },
  {
    name: 'Energy & Utilities',
    icon: '🔌',
    desc: 'Empowers customers to optimize their energy consumption.',
  },
  {
    name: 'Petrochemical',
    icon: '🧪',
    desc: 'Preserve your real-time safety monitoring and chemical inventory control.',
  },
];

export default function MegaMenuPopupIndustries({ open, onMouseEnter, onMouseLeave }) {
  return (
    <motion.div
      className="absolute left-1/2 top-full -translate-x-1/2 max-w-7xl w-[95vw] bg-white shadow-2xl rounded-xl p-8 mt-3 z-50"
      variants={popupVariants}
      animate={open ? 'open' : 'closed'}
      initial={false}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ minHeight: 380, maxHeight: 500, overflowY: 'auto' }}
    >
      <div className="flex h-full gap-6">
        {/* Left Column */}
        <div className="w-1/3 flex flex-col gap-5">
          {industries.slice(0, 7).map(({ name, icon, desc }) => (
            <div key={name} className="flex gap-4 items-start">
              <span className="bg-pink-100 p-3 rounded-lg text-xl">{icon}</span>
              <div>
                <div className="font-bold mb-1">{name}</div>
                <div className="text-gray-700 text-sm">{desc}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Middle Column */}
        <div className="w-1/3 flex flex-col gap-5">
          {industries.slice(7).map(({ name, icon, desc }) => (
            <div key={name} className="flex gap-4 items-start">
              <span className="bg-pink-100 p-3 rounded-lg text-xl">{icon}</span>
              <div>
                <div className="font-bold mb-1">{name}</div>
                <div className="text-gray-700 text-sm">{desc}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Right Column: Industry highlights & CTA */}
        <div className="w-1/3 pl-4 flex flex-col gap-4 justify-center">
          <div className="bg-pink-50 rounded-2xl p-5 flex flex-col items-center shadow-md min-h-[260px]">
            <img
              src="/industry-app-demo.png"
              alt="Industry demo"
              className="rounded-xl mb-4 w-full max-h-[136px] object-cover"
            />
            <div className="text-lg font-semibold mb-2 text-gray-700 text-center">
              Shaping the future with cutting-edge digital experiences, innovative products, and
              transformative ventures.
            </div>
            <button className="bg-black text-white font-semibold py-2 px-6 rounded-xl flex items-center gap-2 mt-2 hover:bg-gray-800 transition">
              <span>►</span> Watch Video
            </button>
          </div>
          {/* Lower right: Extra industries (matches your screenshot) */}
          <div className="flex flex-col gap-4 mt-6">
            {industriesRight.map(({ name, icon, desc }) => (
              <div key={name} className="flex gap-4 items-start">
                <span className="bg-pink-100 p-3 rounded-lg text-xl">{icon}</span>
                <div>
                  <div className="font-bold mb-1">{name}</div>
                  <div className="text-gray-700 text-sm">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
