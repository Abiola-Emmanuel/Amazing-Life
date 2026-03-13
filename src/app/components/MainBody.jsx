"use client";

import { IoMdTime } from "react-icons/io";
import { FaLocationDot, FaBookBible } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";
import { FaLocationArrow } from "react-icons/fa6";
import { RiLiveFill } from "react-icons/ri";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './main-body.css'
import Footer from "./Footer";

const MainBody = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
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

  const cardItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="main-body"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Belief Section */}
      <motion.section
        className="believe-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <div className="believe-text">
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A Community Anchored in Christ,
            <span className="highlight"> United in Love </span>
            for People
          </motion.h2>
          <motion.p
            className="belief-description"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transformed by the gift of salvation, we exist to worship authentically,
            strengthen the local church, and advance God's Kingdom across the earth.
            Rooted in biblical truth, we are committed to building a Christ-centered
            community where lives are renewed, faith is strengthened, and hope is
            shared with our city and beyond.
          </motion.p>
        </div>
      </motion.section>

      {/* Action Cards with Icons */}
      <motion.section
        className="action-cards-section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="action-cards">
          <motion.div
            className="action-card"
            variants={cardItem}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -15,
              boxShadow: "0 20px 40px rgba(11, 29, 103, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="card-icon-wrapper"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FaLocationDot className="action-icon" />
            </motion.div>
            <h3>Find Us</h3>
            <p>We welcome you to experience the warmth of our church family and grow in faith together.</p>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/contact" className="action-link">
                Get Directions <MdArrowForward className="link-arrow" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="action-card"
            variants={cardItem}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{
              y: -15,
              boxShadow: "0 20px 40px rgba(11, 29, 103, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="card-icon-wrapper"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <IoMdTime className="action-icon" />
            </motion.div>
            <h3>Service Times</h3>
            <p>Join us for worship every Sunday at 10:00 AM. Experience uplifting music and inspiring messages.</p>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/services" className="action-link">
                View Times <MdArrowForward className="link-arrow" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="action-card"
            variants={cardItem}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              y: -15,
              boxShadow: "0 20px 40px rgba(11, 29, 103, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="card-icon-wrapper"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <LuHeartHandshake className="action-icon" />
            </motion.div>
            <h3>New Here?</h3>
            <p>Don't know where to start? We're here to help you feel at home and find your place.</p>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/welcome" className="action-link">
                Learn More <MdArrowForward className="link-arrow" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="about-container">
          <motion.div
            className="about-left"
            variants={slideRight}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="section-tag"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <motion.span
                className="dot"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.span>
              <span>About Us</span>
            </motion.div>

            <motion.h2
              className="gospel-title"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We are a gospel centered, <span className="highlight">presence driven</span> church.
            </motion.h2>

            <motion.p
              className="about-description"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A church devoted to nurturing Christ-centered families, equipping faithful disciples,
              and impacting our community through the love of Jesus.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/about" className="about-link">
                Discover Our Story <FaLocationArrow className="arrow-icon" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-right"
            variants={slideLeft}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="image-wrapper"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/woman1-sing.jpg"
                alt="Worship at King's Throne"
                fill
                className="about-image"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Live Watch Section */}
      <motion.section
        className="watch-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleUp}
        transition={{ duration: 0.8 }}
      >
        <div className="watch-container">
          <div className="watch-content">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaBookBible className="section-icon" />
            </motion.div>

            <motion.span
              className="watch-tag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              POWERFUL & LIFE-CHANGING
            </motion.span>

            <motion.h2
              className="watch-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Watch Us <motion.span
                className="live-badge"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >LIVE</motion.span>
            </motion.h2>

            <motion.p
              className="watch-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Join us as we dive into God's Word, discovering practical truths for everyday life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/watch" className="watch-button">
                Watch Now <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <RiLiveFill className="watch-icon" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Media Cards Section */}
      <motion.section
        className="media-section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="media-grid">
          <motion.div
            className="media-card"
            variants={cardItem}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <div className="media-image-wrapper">
              <Image
                src='/bible.jpg'
                alt="Bible Study"
                fill
                className="media-image"
              />
              <div className="media-overlay"></div>
            </div>
            <motion.div
              className="media-text"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3>Bible Study</h3>
              <p>Study guides & devotionals</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="media-card"
            variants={cardItem}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="media-image-wrapper">
              <Image
                src='/sermon.png'
                alt="Sermons"
                fill
                className="media-image"
              />
              <div className="media-overlay"></div>
            </div>
            <motion.div
              className="media-text"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3>Sermons</h3>
              <p>Watch live sermons & teachings</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="media-card"
            variants={cardItem}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="media-image-wrapper">
              <Image
                src='/music.jpg'
                alt="Worship Music"
                fill
                className="media-image"
              />
              <div className="media-overlay"></div>
            </div>
            <motion.div
              className="media-text"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3>Worship Music</h3>
              <p>Experience uplifting worship</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Join Section */}
      <motion.section
        className="join-section"
      >
        <div className="join-container">
          <Image
            src={'/join-bg.jpg'}
            fill
            alt="Join Our Church Family"
            className="join-bg"
          />
          <div className="join-overlay"></div>
          <motion.div
            className="join-content"
          >
            <motion.h2
              className="join-title"
            >
              Join Our Amazing Church Family and <span className="highlight">Grow With Us</span>
            </motion.h2>

            <motion.div
              className="join-buttons"
              initial="hidden"
              whileInView="visible"
            >
              <motion.div
              >
                <Link href="/contact" className="join-button-primary">
                  Contact Us <MdArrowForward />
                </Link>
              </motion.div>

              <motion.div>
                <Link href="/welcome" className="join-button-secondary">
                  New Here? Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Ministries Section */}
      <motion.section
        className="ministries-section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="ministries-header">
          <motion.span
            className="section-subtitle"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            MINISTRIES
          </motion.span>
          <motion.h2
            className="section-title"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            There's a place for everyone
          </motion.h2>
        </div>

        <div className="ministries-grid">
          <motion.div
            className="ministry-card"
            variants={cardItem}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <div className="ministry-image-wrapper">
              <Image
                src={'/women-min.jpg'}
                alt="Women's Ministry"
                fill
                className="ministry-image"
              />
              <div className="ministry-overlay"></div>
            </div>
            <motion.div
              className="ministry-text"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3>Queens</h3>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/ministries/women" className="ministry-link">
                  Women's Ministry
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="ministry-card"
            variants={cardItem}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="ministry-image-wrapper">
              <Image
                src={'/min-kids.jpg'}
                alt="Children's Ministry"
                fill
                className="ministry-image"
              />
              <div className="ministry-overlay"></div>
            </div>
            <motion.div
              className="ministry-text"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3>J-Squad Children</h3>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/ministries/children" className="ministry-link">
                  Children's Ministry
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="ministry-card"
            variants={cardItem}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="ministry-image-wrapper">
              <Image
                src={'/teens-min.jpg'}
                alt="Teen Ministry"
                fill
                className="ministry-image"
              />
              <div className="ministry-overlay"></div>
            </div>
            <motion.div
              className="ministry-text"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3>J-Squad Teens</h3>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/ministries/teens" className="ministry-link">
                  Amazing Life Teens
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="ministry-card"
            variants={cardItem}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <div className="ministry-image-wrapper">
              <Image
                src={'/men-min.jpg'}
                alt="Men's Ministry"
                fill
                className="ministry-image"
              />
              <div className="ministry-overlay"></div>
            </div>
            <motion.div
              className="ministry-text"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <h3>Kings</h3>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/ministries/men" className="ministry-link">
                  Men's Ministry
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </motion.div>
  )
}

export default MainBody