'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

const tags = [
  'Android',
  'App Development Cost',
  'Artificial Intelligence',
  'Automations',
  'Automobile',
  'Backend',
  'Cloud',
  'Construction',
  'Cross Platform',
  'Data Analytics',
  'Dating',
  'Design Experience',
  'DevOps',
  'Digital Transformation',
  'eCommerce',
  'Education',
  'Enterprise App',
  'Events',
  'Fintech',
  'Fitness',
  'Flutter',
  'Food',
  'Gaming',
  'Healthcare',
  'Insights',
  'Insurance',
  'Internet Of Things (IoT)',
  'iOS',
  'Logistics',
  'Mobile App',
  'PWA',
  'Python',
  'React Native',
  'Real Estate',
  'Social Media',
  'Software Development',
  'Staff Augmentation',
  'Technology',
  'Testing',
  'Travel',
  'UX/UI',
  'Web',
  'Xamarin',
];

export default function Page() {
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
    <section
      className="w-full min-h-[600px] flex flex-col items-center px-4 py-24"
      style={{
        background: 'linear-gradient(120deg, #e6e6fa 5%, #fffbe7 85%, #ffdde8 100%)',
      }}
    >
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
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-4 text-gray-900 mb-4">
        Gain Strategic Insights into Cutting-Edge <br />
        <span className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Technology
        </span>
        <span className="inline-block text-gray-900">&nbsp;and&nbsp;</span>
        <span className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Innovation
        </span>
      </h1>
      {/* Subtitle */}
      <div className="text-lg md:text-xl text-gray-700 font-medium text-center mt-6 mb-10">
        Empowering your business with the latest trends, tools, and solutions to stay ahead in the
        digital world.
      </div>
      {/* Search Input */}
      <div className="w-full max-w-3xl flex items-center mb-14">
        <div className="relative w-full">
          <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-800">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="I am looking for..."
            className="w-full pl-14 pr-6 py-5 rounded-full border border-gray-300 focus:border-purple-400 shadow text-lg font-medium outline-none transition"
          />
        </div>
      </div>
      {/* Tags */}
      <div className="flex flex-col md:flex-row items-start w-full max-w-6xl">
        <span className="text-lg font-bold mb-4 md:mb-0 md:mr-6 mt-2 md:mt-3 whitespace-nowrap min-w-[150px]">
          Search by tags:
        </span>
        <div className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-6 py-2 rounded-full bg-white border border-gray-200 shadow text-gray-700 text-base font-semibold hover:bg-purple-100 cursor-pointer transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
