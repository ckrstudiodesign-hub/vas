'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { NavDropdown, NavLinkItem } from '@/types';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown((prev) => (prev === label ? null : label));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const isDropdown = (item: any): item is NavDropdown => {
    return 'columns' in item;
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link href="/" className="logo" onClick={closeMobileMenu}>
            <img src="/images/logo.png" alt="VAS Consultants" className="brand-logo remove-bg-white" loading="lazy" />
            <div className="logo-text">
              <span>Corporate</span>
              <span>Services</span>
            </div>
          </Link>

          <nav className="nav-links centered-nav" aria-label="Main navigation">
            {NAVIGATION_ITEMS.map((item, idx) => {
              if (isDropdown(item)) {
                return (
                  <div key={idx} className="nav-dropdown">
                    <a href="#" aria-haspopup="true" aria-expanded="false" onClick={(e) => e.preventDefault()}>
                      {item.label} <i className="ph ph-caret-down"></i>
                    </a>
                    <div className="dropdown-content">
                      {item.columns.map((col, colIdx) => (
                        <div key={colIdx} className="dropdown-column" style={item.minWidth ? { minWidth: item.minWidth } : undefined}>
                          {col.title && <h4>{col.title}</h4>}
                          {col.links.map((link, linkIdx) => (
                            <Link key={linkIdx} href={link.href}>
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              } else {
                const navLink = item as NavLinkItem;
                return (
                  <Link key={idx} href={navLink.href} aria-current={pathname === navLink.href ? 'page' : undefined}>
                    {navLink.label}
                  </Link>
                );
              }
            })}
          </nav>

          <div className="nav-actions">
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <i className="ph ph-list"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`} aria-hidden={!mobileMenuOpen}>
        <button className="mobile-menu-close" onClick={closeMobileMenu} aria-label="Close menu">
          <i className="ph ph-x"></i>
        </button>

        <nav className="nav-links" aria-label="Mobile navigation">
          {NAVIGATION_ITEMS.map((item, idx) => {
            if (isDropdown(item)) {
              const isOpen = activeMobileDropdown === item.label;
              return (
                <div key={idx} className={`nav-dropdown ${isOpen ? 'active' : ''}`} style={{ width: '100%' }}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleMobileDropdown(item.label);
                    }}
                    aria-expanded={isOpen}
                  >
                    {item.label} <i className="ph ph-caret-down"></i>
                  </a>
                  {isOpen && (
                    <div
                      className="dropdown-content"
                      style={{
                        position: 'static',
                        transform: 'none',
                        boxShadow: 'none',
                        border: 'none',
                        padding: '10px 0 10px 15px',
                        opacity: 1,
                        visibility: 'visible',
                        flexDirection: 'column',
                        gap: '15px',
                        background: 'transparent',
                        display: 'flex',
                      }}
                    >
                      {item.columns.map((col, colIdx) => (
                        <div key={colIdx} className="dropdown-column" style={{ width: '100%' }}>
                          {col.title && (
                            <h4 style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem', marginTop: colIdx > 0 ? '12px' : '0' }}>
                              {col.title}
                            </h4>
                          )}
                          {col.links.map((link, linkIdx) => (
                            <Link
                              key={linkIdx}
                              href={link.href}
                              onClick={closeMobileMenu}
                              style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else {
              const navLink = item as NavLinkItem;
              return (
                <Link key={idx} href={navLink.href} onClick={closeMobileMenu}>
                  {navLink.label}
                </Link>
              );
            }
          })}
        </nav>
      </div>
    </>
  );
}
