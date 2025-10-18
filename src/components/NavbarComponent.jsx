'use client';
import Link from 'next/link';
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import MegaMenuPopup from '@/components/MegaMenuPopup';
import MegaMenuPopupIndustries from '@/components/MegaMenuPopupIndustries';
import StickyBannerComponent from './StickyBannerComponent';

export default function NavbarComponent() {
  const navItems = [
    { name: 'AI Center of Excellence', link: '/services/ai-center-of-excellence' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Services', link: '/all-services' },
    { name: 'Industries', link: '/industries' },
    { name: 'Insights', link: '/blog' },
    { name: 'About Us', link: '/about-us' },
  ];

  const [active, setActive] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeMegaType, setActiveMegaType] = useState(null);

  const timeoutRef = useRef();

  const handleMegaMenuOpen = (type) => {
    clearTimeout(timeoutRef.current);
    setShowMegaMenu(true);
    setActiveMegaType(type);
  };

  const handleMegaMenuClose = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMegaMenu(false);
      setActiveMegaType(null);
    }, 200);
  };

  return (
    <div className="relative w-full">
      {/* Sticky Banner */}
      <StickyBannerComponent />

      <Navbar className="fixed top-12 md:top-10 z-50 w-full mx-auto px-6 bg-white">
        <NavBody className="text-gray-900 ">
          {/* Logo */}
          <NavbarLogo
            logoSrc="/logo.png"
            title="startups"
            className="text-gray-900 font-bold text-lg tracking-wide"
          />

          {/* Desktop Links */}
          <div className="flex items-center gap-10">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative cursor-pointer group"
                onMouseEnter={() => {
                  if (item.name === 'Services') handleMegaMenuOpen('services');
                  if (item.name === 'Industries') handleMegaMenuOpen('industries');
                }}
                onMouseLeave={() => {
                  if (item.name === 'Services' || item.name === 'Industries') handleMegaMenuClose();
                }}
              >
                {/* Desktop Nav Link */}
                <Link
                  href={item.link}
                  className={`text-base font-medium transition-colors duration-300 ${
                    active === item.name ? 'text-purple-700' : 'text-gray-800 hover:text-purple-700'
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  <motion.span
                    initial={{ y: 0 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                  >
                    {item.name}
                  </motion.span>
                </Link>

                {/* Underline */}
                {active === item.name && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-purple-700 rounded origin-left"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}

                {/* Mega Menus */}
                {item.name === 'Services' && showMegaMenu && activeMegaType === 'services' && (
                  <MegaMenuPopup
                    open={showMegaMenu}
                    onMouseEnter={() => handleMegaMenuOpen('services')}
                    onMouseLeave={handleMegaMenuClose}
                  />
                )}
                {item.name === 'Industries' && showMegaMenu && activeMegaType === 'industries' && (
                  <MegaMenuPopupIndustries
                    open={showMegaMenu}
                    onMouseEnter={() => handleMegaMenuOpen('industries')}
                    onMouseLeave={handleMegaMenuClose}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <NavbarButton
            href="/contact-us"
            variant="primary"
            className="bg-black text-white px-6 py-2 rounded-md hover:opacity-80 transition"
          >
            Contact Us
          </NavbarButton>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="bg-white text-gray-900 shadow-md">
          <MobileNavHeader>
            <NavbarLogo logoSrc="/logo.png" title="Techahead" className="text-gray-900 font-bold" />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-white"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`block py-3 px-4 rounded-md text-base font-medium transition-colors duration-300 ${
                  item.highlight
                    ? 'text-purple-700 font-semibold'
                    : 'text-gray-800 hover:bg-purple-50 hover:opacity-80'
                }`}
                onClick={() => {
                  setActive(item.name);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <NavbarButton
              href="/contact-us"
              variant="primary"
              className="bg-black text-white w-full rounded-md mt-6 py-3"
            >
              Contact Us
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
