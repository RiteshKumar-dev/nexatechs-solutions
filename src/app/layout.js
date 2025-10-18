import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavbarComponent from '@/components/NavbarComponent';
import FooterComponent from '@/components/FooterComponent';
import StickyBannerFooterComponent from '@/components/StickyBannerFooterComponent';
import FaqSection from '@/components/FaqSection';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Nexatech Solutions',
  description: 'Innovative Tech Solutions for Modern Problems',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <NavbarComponent />
        <main className="flex-grow">{children}</main>
        <FaqSection />
        <FooterComponent />
        <StickyBannerFooterComponent />
      </body>
    </html>
  );
}
