"use client";

import Link from 'next/link';
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import './navbar.css';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const navLinks = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'About', href: '/about' },
    { id: 3, name: 'Ministries', href: '/ministries' },
    { id: 4, name: 'Events', href: '/events' },
    { id: 5, name: 'Contact Us', href: '/contact' },
  ]

  const ministries = [
    { id: 1, name: 'Children Ministry', href: '/ministries/children' },
    { id: 2, name: 'Teens Ministry', href: '/ministries/amazing-life-teens' },
    { id: 3, name: "Men's Ministry", href: '/ministries/mens' },
    { id: 4, name: "Women's Ministry", href: '/ministries/womens' }
  ]


  return (
    <>
      <nav>
        <Link
          href={'/'}
          className='logo'>
          <Image
            src={'/rccg-logo.png'}
            alt='Logo'
            width={35}
            height={35}

          />
        </Link>

        <div className="nav-mid">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className="nav-link-wrapper"
              onMouseEnter={() => setActiveLink(link.id)}
              onMouseLeave={() => setActiveLink(null)}
            >
              <Link
                href={link.href}
                className='link'
              >
                {link.name}
              </Link>
              {link.name === 'Ministries' && activeLink === 3 && (
                <div className={'ministries-dropdown'}>
                  {ministries.map((ministry) => (
                    <Link
                      key={ministry.id}
                      href={ministry.href}
                      className='link'
                    >
                      {ministry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          href={'/live'}
          className='join-us'>
          Join us live
        </Link>

        <FiMenu
          className='menu-icon'
          onClick={toggleMenu}
        />

      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <FiX
          className='close-icon'
          onClick={toggleMenu}
        />
        <div className="menu-content">
          {navLinks.map((link) => (
            <div key={link.id}>
              <Link
                href={link.href}
                className='mobile-link'
                onClick={link.name === 'Ministries' ? () => setActiveLink(activeLink === 3 ? null : 3) : toggleMenu}
              >
                {link.name}
              </Link>
              {link.name === 'Ministries' && activeLink === 3 && (
                <div className={'mobileministries-dropdown'}>
                  {ministries.map((ministry) => (
                    <Link
                      key={ministry.id}
                      href={ministry.href}
                      className='mobile-link'
                      onClick={toggleMenu}
                    >
                      {ministry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Navbar
