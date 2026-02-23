"use client";

import Link from 'next/link';
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import './navbar.css';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

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
            <Link
              key={link.id}
              href={link.href}
              className='link'
            >
              {link.name}
            </Link>
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
            <Link
              key={link.id}
              href={link.href}
              className='mobile-link'
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

    </>
  )
}

export default Navbar
