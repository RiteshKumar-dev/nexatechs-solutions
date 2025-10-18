'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
      className="w-full flex flex-col items-center justify-center pt-32 pb-24"
      style={{
        background: 'radial-gradient(circle at 60% 40%, #e2e6ff 60%, #fff 100%)',
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
      <div className="text-center">
        <h1 className="font-extrabold text-5xl md:text-6xl bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-6">
          Digital Transformation–fuelled
        </h1>
        <h2 className="font-extrabold text-4xl md:text-5xl text-black mb-12">
          growth across different industries & sectors
        </h2>
        <Link href="/contact-us">
          <span className="inline-block px-8 py-2 bg-black text-white rounded-lg text-lg font-semibold shadow hover:opacity-80 transition">
            Let's Talk
          </span>
        </Link>
      </div>
    </section>
  );
}
