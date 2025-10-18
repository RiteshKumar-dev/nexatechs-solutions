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
      className="flex flex-col items-center justify-center min-h-[500px] w-full pt-24 pb-20 px-4"
      style={{
        background: 'radial-gradient(circle at 50% 40%, #f6f4fc 60%, #ffe5ef 100%)',
        position: 'relative',
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
      {/* Optional: SVG circles for background */}
      <svg
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none opacity-30 animate-pulse"
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="400" cy="250" r="200" stroke="#222" strokeOpacity="0.6" strokeWidth="2" />
        <circle cx="400" cy="250" r="140" stroke="#222" strokeOpacity="0.45" strokeWidth="2" />
        <circle cx="400" cy="250" r="90" stroke="#222" strokeOpacity="0.35" strokeWidth="2" />
      </svg>

      {/* End SVG */}

      <div className="relative z-10 w-full text-center">
        <div className="mb-5 text-xl font-semibold text-gray-800 tracking-wide">
          ILLUMINATING THE PATH OF
        </div>
        <h1 className="mb-5 font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl text-gray-800 uppercase">
          INNOVATION AND EXCELLENCE
        </h1>
        <div className="mb-8 text-xl text-center text-gray-700 font-medium max-w-2xl mx-auto">
          Transforming businesses with digital innovation and data-driven applications
        </div>
        <Link href="/contact-us">
          <span className="inline-block px-8 py-2 bg-black text-white rounded-lg text-lg font-semibold shadow hover:opacity-80 transition">
            Let&apos;s talk
          </span>
        </Link>
      </div>
    </section>
  );
}
