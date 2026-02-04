'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Heart, Menu, X, User } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Wishlist', path: '/wishlist' },
  { label: 'Cart', path: '/cart' },
  { label: 'Admin', path: '/admin' },
];

interface NavbarProps {
  cartCount?: number;
}

export function Navbar({ cartCount = 0 }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo */}
          <Link href="/" className="logo-link group">
            <div className="logo-icon group-hover:animate-pulse" />
            <span className="logo-text">
              LUXE<span className="text-brand-pink">DRIVE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="nav-links hidden md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-link ${
                  pathname === link.path ? 'active' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="nav-icons hidden md:flex">
            <Link href="/auth/login" className="icon-link">
              <User size={20} />
            </Link>
            <Link href="/wishlist" className="icon-link">
              <Heart size={20} />
            </Link>
            <Link href="/cart" className="icon-link cart-icon-wrapper">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="badge">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu md:hidden">
          <div className="mobile-menu-links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-link ${
                  pathname === link.path ? 'active' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/auth/login" 
              onClick={() => setIsOpen(false)} 
              className="mobile-nav-link"
            >
              Login / Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
