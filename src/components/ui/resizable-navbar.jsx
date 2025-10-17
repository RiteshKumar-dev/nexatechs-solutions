'use client';
import { cn } from '@/lib/utils';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import React, { useRef, useState } from 'react';

// 🔹 MAIN NAVBAR WRAPPER (fixed + white background)
export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        'fixed inset-x-0 top-0 z-40 w-full bg-white shadow-md dark:bg-neutral-950', // ✅ fixed + bg-white
        className,
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { visible }) : child,
      )}
    </motion.div>
  );
};

// 🔹 DESKTOP NAVBAR BODY
export const NavBody = ({ children, className }) => {
  return (
    <motion.div
      animate={{
        y: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        'relative z-[60] mx-auto hidden w-full max-w-screen-xl flex-row items-center justify-between px-6 py-3 lg:flex',
        'bg-white shadow-md rounded-none dark:bg-neutral-950', // ✅ white background, no rounding
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

// 🔹 NAV ITEMS
export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-neutral-600 transition duration-200 hover:text-neutral-800 lg:flex lg:space-x-2',
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full bg-gray-100 dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

// 🔹 MOBILE NAV CONTAINER
export const MobileNav = ({ children, className }) => {
  return (
    <motion.div
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        'relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-4 py-3 lg:hidden',
        'bg-white shadow-md rounded-none dark:bg-neutral-950', // ✅ white bg + flat
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

// 🔹 MOBILE NAV HEADER
export const MobileNavHeader = ({ children, className }) => {
  return (
    <div className={cn('flex w-full flex-row items-center justify-between', className)}>
      {children}
    </div>
  );
};

// 🔹 MOBILE MENU (slide-down)
export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 bg-white px-6 py-8 shadow-md dark:bg-neutral-950 rounded-none',
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 🔹 TOGGLE ICON (mobile)
export const MobileNavToggle = ({ isOpen, onClick }) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white cursor-pointer" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white cursor-pointer" onClick={onClick} />
  );
};

// 🔹 LOGO
export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black dark:text-white"
    >
      <img src="https://assets.aceternity.com/logo-dark.png" alt="logo" width={30} height={30} />
      <span className="font-medium">Startup</span>
    </a>
  );
};

// 🔹 BUTTON
export const NavbarButton = ({
  href,
  as: Tag = 'a',
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  const baseStyles =
    'px-4 py-2 rounded-none text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center';

  const variantStyles = {
    primary: 'bg-black text-white dark:bg-white dark:text-black shadow-md',
    secondary:
      'bg-transparent border border-neutral-300 text-neutral-700 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800',
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
