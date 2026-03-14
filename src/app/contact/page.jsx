"use client";

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTiktok, FaFacebookF, FaInstagram, FaYoutube, FaArrowRight, FaPray } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import './contact.css';
import Footer from '../components/Footer';
import Image from 'next/image';

const Contact = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      className="contact-page"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <motion.h1
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get in Touch With Us
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We'd love to hear from you. Reach out with any questions, prayer requests, or just to say hello!
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <Link href="#contact-form" className="hero-btn primary">
              Send a Message <FaPray />
            </Link>
          </motion.div>
        </motion.div>

        <Image
          src={'/contact-hero.jpg'}
          fill
          className='contact-image'
          alt='Contact hero background'
          priority
        />
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Visit Us</h2>

          <Link
            href={'#map-section'}
            className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>13 Harbour Road, Port Harcourt, Rivers State</p>
            </div>
          </Link>

          <Link
            href="tel:+2341234567891"
            className="info-card">
            <FaPhone className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>2341234567891</p>
            </div>
          </Link>

          <Link
            href="mailto:amazinglife@gmail.com"
            className="info-card"
          >
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>amazinglife@gmail.com</p>
            </div>
          </Link>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <Link href="#" target="_blank">
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form" id="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section" id='map-section'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2729440321305!2d7.0132446!3d4.7622764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cbe4f983de27%3A0xd6be63dcc917a45c!2s15%20Harbour%20Rd%2C%20Port%20Harcourt%2C%20Onne%20501101%2C%20Rivers!5e0!3m2!1sen!2sng!4v1717590000000!5m2!1sen!2sng"
          allowFullScreen
          loading="lazy"
          title="Church Location"
        />
      </div>

      <Footer />
    </motion.div>
  )
}

export default Contact;