import { motion } from 'framer-motion';

const popupVariants = {
  open: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { duration: 0.23 } },
  closed: { opacity: 0, y: -20, pointerEvents: 'none', transition: { duration: 0.2 } },
};

const textHover = {
  rest: { scale: 1, color: '#222' },
  hover: { scale: 1.07, color: '#7c3aed' }, // purple-600
};

export default function MegaMenuPopup({ open, onMouseEnter, onMouseLeave }) {
  return (
    <motion.div
      className="absolute left-1/2 top-full -translate-x-1/2 max-w-7xl w-[95vw] bg-white shadow-2xl rounded-xl p-8 mt-3 z-50"
      variants={popupVariants}
      animate={open ? 'open' : 'closed'}
      initial={false}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ minHeight: 380, maxHeight: 480, overflowY: 'auto' }}
    >
      <div className="flex relative h-full">
        {/* Sidebar */}
        <div className="w-1/4 flex flex-col gap-6 pr-8 h-full overflow-y-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gradient-to-tr from-purple-400 to-purple-600 text-white rounded-full p-2">
              <svg fill="none" height="32" width="32" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#C4B5FD" />
              </svg>
            </span>
            <div className="text-lg font-bold">AI & ML</div>
          </div>
          <div className="flex flex-col gap-4 text-gray-700">
            {[
              { text: 'Cloud & DevSecOps', icon: '☁️' },
              { text: 'IoT & Custom Software', icon: '🔧' },
              { text: 'Mobile App', icon: '📱' },
              { text: 'Web & Backend', icon: '🖥️' },
              { text: 'Design & Consulting', icon: '🎨' },
              { text: 'Enterprise Solution', icon: '⚙️' },
            ].map(({ text, icon }) => (
              <motion.div
                key={text}
                variants={textHover}
                initial="rest"
                whileHover="hover"
                className="flex items-center gap-3 text-base cursor-pointer transition-all"
              >
                <span>{icon}</span>
                {text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical Line: 50% height */}
        <div
          className="absolute"
          style={{
            left: '25%',
            top: '25%',
            height: '50%',
            width: '1px',
            background: '#e5e7eb', // Tailwind gray-200
            zIndex: 10,
          }}
        />

        {/* Solutions */}
        <div className="w-2/4 px-8 h-full overflow-y-auto pr-2">
          <div className="font-semibold text-lg text-gray-600 mb-4">Solutions</div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-5">
            {[
              {
                title: 'Artificial Intelligence',
                desc: 'Innovating businesses with digital technologies',
              },
              { title: 'GEN AI', desc: 'Unleashing a New Era of Innovation' },
              { title: 'Agentic AI', desc: 'Elevate your experience with AI services' },
              {
                title: 'ML Application Development',
                desc: 'Automating processes for increased efficiency',
              },
              {
                title: 'Natural Language Processing',
                desc: 'Advanced NLP solutions for enterprises',
              },
              {
                title: 'Retrieval Augmented Generation',
                desc: 'Enhancing LLMs with external knowledge',
              },
              {
                title: 'Custom LLM Development',
                desc: 'Precision LLM development for enterprises',
              },
              { title: 'ChatBot Development', desc: 'Handling multiple queries simultaneously' },
              { title: 'Data Analytics', desc: 'Transforming raw data into insights' },
              { title: 'Business Intelligence', desc: 'Visualizing trends for better forecasting' },
              {
                title: 'Microsoft Fabric Consulting',
                desc: "Data strategy, implementation, and ongoing support to maximize your data's value.",
              },
            ].map(({ title, desc }) => (
              <motion.div
                key={title}
                variants={textHover}
                initial="rest"
                whileHover="hover"
                className="mb-1 cursor-pointer"
              >
                <div className="font-bold text-base">{title}</div>
                <div className="text-gray-600 text-sm">{desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <div className="w-1/4 border-l border-gray-100 pl-8 flex flex-col gap-6 h-full overflow-y-auto pr-2">
          <div className="font-bold text-lg text-gray-600 mb-1">Engagement Models</div>
          <motion.div
            variants={textHover}
            initial="rest"
            whileHover="hover"
            className="mb-8 cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-purple-100 text-purple-700 rounded-lg p-2">
                <svg fill="none" width="18" height="18">
                  <circle cx="9" cy="9" r="9" fill="#DDD6FE" />
                </svg>
              </span>
              <div className="font-bold text-base">Staff Augmentation</div>
            </div>
            <div className="text-gray-600 text-sm ml-10">
              Access top-tier talent on demand: Dedicated, Hourly, or Flexible.
            </div>
          </motion.div>
          <motion.div
            variants={textHover}
            initial="rest"
            whileHover="hover"
            className="mb-2 cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-purple-100 text-purple-700 rounded-lg p-2">
                <svg fill="none" width="18" height="18">
                  <rect width="18" height="18" rx="4" fill="#DDD6FE" />
                </svg>
              </span>
              <div className="font-bold text-base">Project-Based Delivery</div>
            </div>
            <div className="text-gray-600 text-sm ml-10">
              End-to-end ownership of outcomes with full-cycle delivery.
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
