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
            <p className="footer-tagline">The Reedemed christian church God</p>
            <p>Amazing Life Parish Area Headquaters</p>
          </div>

          {/* Contact the Church Section */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Amazing Life</h3>
            <p className="footer-description">
              Have questions or need support? Reach out to RCCG, Amazing Life and we'll be happy to assist you.
            </p>

            <Link href="/contact" className="footer-button-link">
              <button className="footer-button">Contact Us</button>
            </Link>
          </div>
          <div className="footer-section">

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
                13 Harbour Road, Port Harcourt, Rivers State
              </p>
            </div>

            <div className="footer-info-item">
              <FaPhone className="footer-icon" />
              <Link
                href='tel:+2341234567891'
                className="footer-info-text" style={{ color: 'white' }}
              >+2341234567891
              </Link>
            </div>

            <div className="footer-info-item">
              <FaEnvelope className="footer-icon" />
              <p className="footer-info-text">amazing-life@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        {/* <div className="footer-nav">
          <Link href="/" className="footer-nav-link">Home</Link>
          <span className="footer-nav-separator">•</span>
          <Link href="/about" className="footer-nav-link">About</Link>
          <span className="footer-nav-separator">•</span>
          <Link href="/ministries" className="footer-nav-link">Ministries</Link>
          <span className="footer-nav-separator">•</span>
          <Link href="/events" className="footer-nav-link">Events</Link>
          <span className="footer-nav-separator">•</span>
          <Link href="/contact" className="footer-nav-link">Contact Us</Link>
        </div> */}

        {/* Copyright */}
        <div className="footer-copyright">
          <p> {new Date().getFullYear()} - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer