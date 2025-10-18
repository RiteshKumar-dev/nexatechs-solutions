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
    <section className="relative w-full flex flex-col items-center justify-center min-h-[550px] mt-14 pt-10 pb-16 px-3 overflow-hidden">
      {/* Animated Gradient Circle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-400/30 rounded-full blur-3xl animate-pulse top-[-150px] left-[-100px]" />
        <div className="absolute w-[700px] h-[700px] bg-pink-400/40 rounded-full blur-3xl animate-pulse delay-500 bottom-[-200px] right-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-3xl animate-pulse top-[150px] right-[200px]" />
      </div>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center justify-center gap-2 text-base font-semibold mb-8 z-10"
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

      {/* Headings */}
      <div className="w-full text-center mx-auto">
        <h1 className="font-extrabold text-neutral-900 text-[2.6rem] sm:text-5xl md:text-6xl leading-tight mb-4 drop-shadow-sm">
          Transforming Businesses with Scalable
        </h1>
        <h1 className="font-extrabold text-neutral-900 text-[2.6rem] sm:text-5xl md:text-6xl leading-tight mb-4">
          and Secure{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 animate-gradient-x bg-[length:200%_200%]">
            Enterprise AI Solutions
          </span>
        </h1>
      </div>

      {/* Description */}
      <div className="text-center text-lg md:text-xl max-w-3xl mx-auto mt-5 mb-8 text-neutral-700 font-medium z-10">
        From Agentic AI and Copilots to GenAI Platforms and AIoT Integrations, we build <br />
        responsible AI solutions designed to scale with your vision and accelerate business
        transformation.
      </div>

      {/* CTA Button */}
      <div className="mt-4 z-10">
        <Link
          href="/contact-us"
          className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg shadow-lg hover:brightness-110 transition-all duration-300"
        >
          Talk to an AI Specialist
        </Link>
      </div>

      {/* Custom Keyframe Styles */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
