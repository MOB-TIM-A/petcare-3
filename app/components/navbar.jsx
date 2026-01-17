'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import GooeyNav from './GooeyNav/GooeyNav';

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/assets/logo.svg');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
        setLogoSrc('/assets/logo-white.svg');
      } else {
        setScrolled(false);
        setLogoSrc('/assets/logo.svg');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      setMobileOpen(false);
    }
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/service', label: 'Our Service' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      <header
        className={`w-full sticky top-0 z-30 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md text-white' : 'bg-white text-black'
          }`} >
        <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
          <div className="text-lg font-bold flex items-center">
            <Image src={logoSrc} alt="petcare" width={120} height={40} priority />
          </div>
          <nav className="hidden md:block">
            <ul className="md:space-x-5 flex flex-col md:flex-row space-y-3 md:space-y-0">
              {navLinks.slice(0, 4).map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-medium hover:text-[#FF9900] ${
                      pathname === href ? 'text-[#FF9900]' : ''
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center">
            <Link
              href="/contact"
              className="bg-white border border-black text-black py-2 px-4 rounded-3xl hover:bg-[#FF9900] duration-300 transition-all ease-in-out"
            >
              Contact Us
            </Link>
            <button
              className="md:hidden text-2xl bg-transparent border-none cursor-pointer hover:text-[#FF9900] ml-3"
              onClick={() => setMobileOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dialog */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
          onClick={handleBackdropClick}
        >
          <div className="bg-white text-black h-full flex flex-col items-end p-6 border w-full">
            <button
              className="text-2xl mb-4 hover:text-[#FF9900]"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>
            <ul className="grid justify-center gap-3 text-end w-full">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-medium hover:text-primary block ${pathname === href ? 'text-[#FF9900]' : ''
                      }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
