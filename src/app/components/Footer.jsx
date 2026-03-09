import Image from 'next/image'
import './footer.css'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">
          {/* Logo Section */}
          <div className="footer-logo-section">
            <Image
              src={'/rccg-logo.png'}
              width={100}
              height={100}
              alt='RCCG LOGO'
            />
            <p className="footer-tagline">RCCG, AMAZING LIFE</p>
          </div>

          {/* Stay Connected Section */}
          {/* <div className="footer-section">
            <h3 className="footer-title">Stay Connected</h3>
            <p className="footer-description">
              Sign up with your email address to receive updates from RCCG, King's Throne
            </p>
            <form className="footer-form">
              <input
                type="email"
                placeholder="Your email address"
                className="footer-input"
              />
              <button type="submit" className="footer-button">Subscribe</button>
            </form>
          </div> */}

          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>

            <div className="footer-info-item">
              <FaClock className="footer-icon" />
              <div>
                <p className="footer-info-text">Sundays at 09:00 am</p>
                <p className="footer-info-text">Wednesday at 7:00 pm</p>
              </div>
            </div>

            <div className="footer-info-item">
              <FaMapMarkerAlt className="footer-icon" />
              <p className="footer-info-text">
                Address goes here
              </p>
            </div>

            <div className="footer-info-item">
              <FaPhone className="footer-icon" />
              <p className="footer-info-text">+2341234567891</p>
            </div>

            <div className="footer-info-item">
              <FaEnvelope className="footer-icon" />
              <p className="footer-info-text">amazing-life@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <Link href="/" className="footer-nav-link">Home</Link>
          <span className="footer-nav-separator">•</span>
          <Link href="/about" className="footer-nav-link">About</Link>
          <span className="footer-nav-separator">•</span>
          <Link href="/ministries" className="footer-nav-link">Ministries</Link>
          <span className="footer-nav-separator">•</span>
          <Link href="/events" className="footer-nav-link">Events</Link>
          <span className="footer-nav-separator">•</span>
          <Link href="/contact" className="footer-nav-link">Contact Us</Link>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>2026 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer