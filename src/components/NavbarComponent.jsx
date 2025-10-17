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
    { name: 'AI Center of Excellence', link: 'aicoe', highlight: true },
    { name: 'Case Studies', link: 'case-studies' },
    { name: 'Services', link: 'services' },
    { name: 'Industries', link: 'industries' },
    { name: 'Insights', link: 'insights' },
    { name: 'About Us', link: 'about' },
  ];

  const [active, setActive] = useState('AI Center of Excellence');
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
      {/* StickyBanner should be first */}
      <StickyBannerComponent />
      <Navbar className="bg-white shadow-sm fixed top-13 md:top-10 z-50 w-full mx-auto px-6">
        <NavBody className="bg-white text-gray-900">
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
                <Link href={item.link} passHref legacyBehavior>
                  <a
                    onClick={() => setActive(item.name)}
                    className={`text-base font-medium transition-colors duration-300 ${
                      active === item.name
                        ? 'text-purple-700'
                        : 'text-gray-800 hover:text-purple-700'
                    }`}
                  >
                    <motion.span
                      initial={{ y: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                    >
                      {item.name}
                    </motion.span>
                  </a>
                </Link>

                {active === item.name && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-purple-700 rounded origin-left"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}

                {/* Show relevant Mega Popup */}
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
          <NavbarButton
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
              <Link key={item.name} href={item.link} passHref legacyBehavior>
                <a
                  onClick={() => {
                    setActive(item.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block py-3 px-4 rounded-md text-base font-medium transition-colors duration-300 ${
                    item.highlight
                      ? 'text-purple-700 font-semibold'
                      : 'text-gray-800 hover:bg-purple-50 hover:opacity-80'
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <NavbarButton
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
