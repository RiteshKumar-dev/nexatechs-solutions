'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
      className="relative w-full flex flex-col items-center justify-center min-h-[550px] pt-10 pb-16 px-3 mt-10 bg-gradient-to-br from-white to-[#eceeff]"
      style={{
        background: 'radial-gradient(circle at 40% 40%, #edeaff 60%, #fff 100%)',
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
      {/* Main Headings */}
      <div className="w-full text-center mx-auto">
        <h1 className="font-extrabold text-neutral-900 text-[2.5rem] sm:text-5xl md:text-6xl leading-tight mb-4">
          We craft transformative digital platforms,
        </h1>
        <h1 className="font-extrabold text-neutral-900 text-[2.5rem] sm:text-5xl md:text-6xl leading-tight mb-4">
          products,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400">
            and experiences
          </span>
        </h1>
      </div>
      {/* Description */}
      <div className="text-center text-lg md:text-xl max-w-3xl mx-auto mt-5 mb-8 text-neutral-700 font-medium">
        Success Stories that turned Startups into Category Leaders and Accelerated Growth for Global
        Brands
      </div>
      {/* CTA Button */}
      <div className="mt-4">
        <Link
          href="/contact-us"
          className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg shadow hover:from-purple-600 hover:to-pink-600 transition"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
