'use client';
import { useState } from 'react';
import axios from 'axios';

// Dummy testimonials data
const testimonials = [
  {
    name: 'Rohit Jesudian',
    role: 'CEO/Founder, KODA',
    image: '/Img1.png',
    text: `I just want to take a moment to thank the entire Appinventiv team for your incredible support. We truly appreciate everything you've done, and we're excited to continue working together as we grow here at KODA`,
  },
  {
    name: 'Jane Doe',
    role: 'CTO, ExampleCo',
    image: '/Img5.jpg',
    text: `Your expertise and flexibility accelerated our project timeline. The team is excellent!`,
  },
  // Add more testimonials...
];

export default function ConsultationPopup({ open = true, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    description: '',
    countryCode: '+91',
    phone: '',
    captcha: '',
  });
  const [error, setError] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [apiError, setApiError] = useState('');

  function prevTestimonial() {
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }
  function nextTestimonial() {
    setActiveIndex((i) => (i + 1) % testimonials.length);
  }

  // Validate and submit
  async function handleSubmit(e) {
    e.preventDefault();
    setError({});
    setSuccess('');
    setApiError('');
    let err = {};
    if (!form.name.trim()) err.name = 'Name required';
    if (!form.email.match(/^[\w.-]+@[\w.-]+\.\w{2,}$/)) err.email = 'Valid email required';
    if (!form.phone.match(/^\d{8,15}$/)) err.phone = 'Valid phone required';
    if (!form.captcha || form.captcha.trim() !== '9') err.captcha = 'Answer is 9';
    if (Object.keys(err).length) {
      setError(err);
      return;
    }
    setSubmitting(true);
    try {
      const res = await axios.post('/api/contact', form);
      if (res.data && res.data.status === 'ok') {
        setSuccess('Thank you! Your request was submitted successfully.');
        setForm({
          name: '',
          email: '',
          description: '',
          countryCode: '+91',
          phone: '',
          captcha: '',
        });
      } else {
        setApiError('Something went wrong. Try again.');
      }
    } catch (e) {
      setApiError('Server error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/40 flex justify-center items-center px-2 py-6 overflow-auto mt-0">
      <div className="bg-white rounded-[22px] shadow-2xl flex flex-col md:flex-row w-full max-w-5xl min-h-[560px] relative">
        {/* Left: Testimonials */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#e7f2ff] to-[#dce8fa] px-5 py-7 flex flex-col items-center justify-center rounded-t-[22px] md:rounded-l-[22px] md:rounded-tr-none">
          <div className="text-blue-700 text-lg font-bold mb-1">Leaving already?</div>
          <div className="text-gray-800 mb-7 text-sm font-semibold">
            Hear from our clients and why 3000+ businesses trust Appinventiv
          </div>
          <div className="relative w-full max-w-md min-h-[230px] bg-white rounded-2xl flex flex-col items-center justify-center pb-6 pt-8 shadow transitions-all duration-300">
            <img
              src={testimonials[activeIndex].image}
              className="w-16 h-16 rounded-full object-cover mb-2"
              alt="user"
            />
            <div className="text-lg font-bold text-gray-800">{testimonials[activeIndex].name}</div>
            <div className="text-xs italic text-gray-600 border border-gray-300 rounded px-3 py-1 mt-2 mb-2">
              {testimonials[activeIndex].role}
            </div>
            <div className="px-5 text-center text-gray-700 text-base leading-[1.5]">
              <span className="text-blue-600 text-xl mr-1">“</span>
              {testimonials[activeIndex].text}
              <span className="text-blue-600 text-xl ml-1">”</span>
            </div>
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <button
                className="bg-gray-200 hover:bg-blue-200 rounded-full p-2 transition shadow"
                onClick={prevTestimonial}
              >
                <span className="text-2xl text-gray-500">{'<'}</span>
              </button>
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <button
                className="bg-gray-200 hover:bg-blue-200 rounded-full p-2 transition shadow"
                onClick={nextTestimonial}
              >
                <span className="text-2xl text-gray-500">{'>'}</span>
              </button>
            </div>
          </div>
          <div className="flex gap-4 text-blue-700 mt-8 w-full justify-center text-center text-xs">
            <div>
              <div className="font-bold text-xl">1600+</div>
              <div>Transformation Engineers Delivered</div>
            </div>
            <div>
              <div className="font-bold text-xl">3000+</div>
              <div>Game-changing Products</div>
            </div>
          </div>
          <div className="flex gap-5 items-center justify-center mt-6 w-full">
            <img src="/Img6.png" alt="ET Award" className="h-8" />
            <img src="/Img3.png" alt="Deloitte" className="h-8" />
            <img src="/Img4.png" alt="Growth Champs" className="h-8" />
          </div>
        </div>
        {/* Right: Form */}
        <div className="bg-white w-full md:w-1/2 px-6 py-7 flex flex-col justify-center rounded-b-[22px] md:rounded-r-[22px] md:rounded-bl-none relative">
          <button
            className="absolute top-4 right-6 text-xl text-gray-500 hover:text-red-500 z-10"
            onClick={onClose}
            title="Close"
            aria-label="Close"
          >
            ×
          </button>
          <div className="text-xl font-bold text-gray-900 mb-3 leading-snug">
            Tell us what you need, and we’ll get back with a cost and timeline estimate
          </div>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 justify-between w-full">
            <input
              type="text"
              placeholder="Full name"
              className={`border-b w-full md:w-[48%] py-2 px-2 text-gray-800 rounded outline-none mb-2 ${error.name ? 'border-red-400' : 'border-gray-300'}`}
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
            <input
              type="email"
              placeholder="E-Mail ID*"
              className={`border-b w-full md:w-[48%] py-2 px-2 text-gray-800 rounded outline-none mb-2 ${error.email ? 'border-red-400' : 'border-gray-300'}`}
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
            <textarea
              rows={2}
              placeholder="Describe Your Project/Idea In Brief"
              className="border-b w-full py-2 px-2 text-gray-800 rounded outline-none mb-2 border-gray-300"
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            />
            <div className="flex gap-2 w-full items-center">
              <select
                className="border-b py-2 px-2 text-gray-800 rounded outline-none border-gray-300 max-w-[80px]"
                value={form.countryCode}
                onChange={(e) => setForm((f) => ({ ...f, countryCode: e.target.value }))}
              >
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="text"
                placeholder="Contact Number*"
                className={`border-b py-2 px-2 text-gray-800 rounded outline-none flex-1 ${error.phone ? 'border-red-400' : 'border-gray-300'}`}
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value.replace(/\D+/g, '') }))
                }
                maxLength={15}
              />
            </div>
            <div className="flex items-center gap-2 w-full font-semibold text-gray-600 py-2">
              4 + 5 =
              <input
                type="text"
                className={`border-b w-16 px-2 text-gray-800 rounded outline-none ${error.captcha ? 'border-red-400' : 'border-gray-300'}`}
                value={form.captcha}
                onChange={(e) =>
                  setForm((f) => ({ ...f, captcha: e.target.value.replace(/\D+/g, '') }))
                }
                maxLength={2}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-3 rounded-lg mt-4 w-full md:w-1/2 mx-auto transition disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Schedule Free Consultation'}
            </button>
            {error && Object.values(error).length > 0 && (
              <div className="text-red-500 text-sm mt-2 w-full">
                {Object.values(error).join(', ')}
              </div>
            )}
            {apiError && <div className="text-red-600 text-sm mt-3 w-full">{apiError}</div>}
            {success && (
              <div className="text-green-600 text-sm mt-3 w-full font-semibold">{success}</div>
            )}
          </form>
          <ul className="mt-4 text-xs text-gray-600">
            <li>
              In just <span className="font-bold text-gray-900">2 mins</span> you will get a
              response
            </li>
            <li>
              Your idea is 100% protected by our{' '}
              <span className="font-bold underline">Non Disclosure Agreement</span>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
