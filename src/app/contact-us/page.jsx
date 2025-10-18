'use client';
import { useState, useEffect, useRef } from 'react';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';

// Configurations
const brandLogos = ['/Img3.png', '/Img4.png', '/Img5.jpg', '/Img6.png', '/Img7.png', '/Img8.png'];
const testimonials = [
  {
    name: 'Andy Hobbs',
    role: 'INTERNATIONAL CRICKET COUNCIL (ICC)',
    image: '/Img1.png',
    highlight:
      "It's been an absolute pleasure to work with TechAhead team through this project. I know you have all gone way over and above to deliver the app to the right quality.",
  },
  {
    name: 'Jane Doe',
    role: 'Chief Product Officer, ExampleBank',
    image: '/Img4.png',
    highlight:
      'TechAhead’s engineering team made our launch effortless. Their speed and communication throughout the project were world-class.',
  },
  {
    name: 'Michael Lee',
    role: 'VP Digital, CENGAGE',
    image: '/Img5.jpg',
    highlight:
      'We appreciate the strategic partnership and product design expertise. Their reliability and innovation helped our teams scale quickly.',
  },
];

export default function StrategicConsultSection() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    help: '',
  });

  const [err, setErr] = useState({});
  const scrollRef = useRef(null);

  // Auto-scrolling testimonial logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let scrollX = 0;
    const scrollSpeed = 0.8;
    const max = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const scroll = () => {
      scrollX += scrollSpeed;
      if (scrollX >= max) scrollX = 0;
      scrollContainer.scrollTo({ left: scrollX, behavior: 'smooth' });
    };
    const timer = setInterval(scroll, 40);
    return () => clearInterval(timer);
  }, []);

  // Form change handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErr({ ...err, [e.target.name]: '' });
  };

  // Form submit with axios
  // Form submit with axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    const missing = {};

    // Improved regex patterns for real-world inputs
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validPhone = /^\+?\d[\d\s-]{7,14}\d$/;

    if (!form.firstName.trim()) missing.firstName = 'First name required';
    if (!form.lastName.trim()) missing.lastName = 'Last name required';
    if (!form.company.trim()) missing.company = 'Company required';
    if (!validEmail.test(form.email.trim())) missing.email = 'Valid email required';
    if (!validPhone.test(form.phone.trim())) missing.phone = 'Valid phone required';
    if (!form.help.trim()) missing.help = 'Message required';

    if (Object.keys(missing).length) return setErr(missing);

    try {
      setLoading(true);
      await axios.post('/api/consultation', form);
      alert('Success! Request submitted.');
      setForm({ firstName: '', lastName: '', company: '', email: '', phone: '', help: '' });
    } catch (err) {
      alert('Form submission failed. Please retry.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-white via-gray-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 lg:px-10 rounded-3xl">
        {/* LEFT Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="font-extrabold text-3xl md:text-4xl text-slate-900 leading-tight">
              Your Strategic Partner for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                AI-powered Innovation
              </span>
            </h2>
            <p className="mt-4 mb-6 text-slate-700 text-lg font-medium">
              Join over 1,200 companies building secure and scalable digital experiences powered by
              AI and strategy.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div ref={scrollRef} className="flex overflow-x-auto gap-8 py-4 scrollbar-hide">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] bg-white shadow-lg border border-purple-100 rounded-2xl p-6 hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900">{t.name}</h3>
                    <p className="text-xs text-gray-600 font-medium">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">“{t.highlight}”</p>
              </div>
            ))}
          </div>

          {/* Brand Logos */}
          <div className="pt-8">
            <p className="text-xs font-bold text-gray-500 mb-3">TRUSTED BY GLOBAL LEADERS</p>
            <div className="flex flex-wrap gap-5 items-center">
              {brandLogos.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-8 opacity-70 hover:opacity-100 transition"
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT Section: Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-purple-100 space-y-5">
          <h2 className="font-extrabold text-2xl text-slate-900 mb-2">Book a Consultation</h2>
          <p className="text-gray-600 font-medium">
            Tell us what you're building — we'll guide you toward smarter execution.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="firstName"
                  placeholder="First Name*"
                  value={form.firstName}
                  onChange={handleChange}
                  className="inputbox"
                />
                {err.firstName && <p className="text-red-500 text-xs">{err.firstName}</p>}
              </div>
              <div>
                <input
                  name="lastName"
                  placeholder="Last Name*"
                  value={form.lastName}
                  onChange={handleChange}
                  className="inputbox"
                />
                {err.lastName && <p className="text-red-500 text-xs">{err.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="company"
                  placeholder="Company*"
                  value={form.company}
                  onChange={handleChange}
                  className="inputbox"
                />
                {err.company && <p className="text-red-500 text-xs">{err.company}</p>}
              </div>
              <div>
                <input
                  name="email"
                  placeholder="Email Address*"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="inputbox"
                />
                {err.email && <p className="text-red-500 text-xs">{err.email}</p>}
              </div>
            </div>

            <div>
              <input
                name="phone"
                placeholder="Phone Number*"
                value={form.phone}
                onChange={handleChange}
                maxLength={15}
                className="inputbox"
              />
              {err.phone && <p className="text-red-500 text-xs">{err.phone}</p>}
            </div>

            <div>
              <textarea
                name="help"
                rows="3"
                placeholder="How can we help you?*"
                value={form.help}
                onChange={handleChange}
                className="inputbox"
              />
              {err.help && <p className="text-red-500 text-xs">{err.help}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl text-white font-bold shadow-md transition-transform hover:-translate-y-[1px] 
  ${
    loading
      ? 'bg-gradient-to-r from-purple-400 to-pink-400 cursor-not-allowed'
      : 'bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 hover:shadow-lg'
  }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <FaSpinner className="animate-spin text-white text-lg" />
                  <span>Submitting...</span>
                </span>
              ) : (
                'Submit Request'
              )}
            </button>

            <p className="text-xs text-gray-500 mt-1 text-center">
              Response guaranteed within 24 hours.
            </p>
          </form>
        </div>
      </div>

      {/* Inline Styling */}
      <style>{`
        .inputbox {
          width: 100%;
          padding: 12px 14px;
          border-radius: 8px;
          border: 1.8px solid #e7ddfb;
          background: #faf9fc;
          font-size: 0.95rem;
          transition: all .2s ease;
        }
        .inputbox:focus {
          border-color: #a855f7;
          outline: none;
          background: #fff;
          box-shadow: 0 0 0 2px #f3e8ff;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; }
      `}</style>
    </section>
  );
}
