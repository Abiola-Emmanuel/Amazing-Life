"use client";

import { IoMdTime } from "react-icons/io";
import { FaLocationDot, FaBookBible } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";
import { FaLocationArrow } from "react-icons/fa6";
import { RiLiveFill } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
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

  return (
    <div className="main-body">
      {/* Hero Belief Section */}
      <section className="believe-section">
        <div className="believe-text animate-fade-up">
          <h2>
            A Community Anchored in Christ,
            <span className="highlight"> United in Love </span>
            for People
          </h2>
          <p className="belief-description">
            Transformed by the gift of salvation, we exist to worship authentically,
            strengthen the local church, and advance God's Kingdom across the earth.
            Rooted in biblical truth, we are committed to building a Christ-centered
            community where lives are renewed, faith is strengthened, and hope is
            shared with our city and beyond.
          </p>
        </div>
      </section>

      {/* Action Cards with Icons */}
      <section className="action-cards-section">
        <div className="action-cards">
          <div className="action-card animate-on-scroll">
            <div className="card-icon-wrapper">
              <FaLocationDot className="action-icon" />
            </div>
            <h3>Find Us</h3>
            <p>We welcome you to experience the warmth of our church family and grow in faith together.</p>
            <Link href="/contact" className="action-link">
              Get Directions <MdArrowForward className="link-arrow" />
            </Link>
          </div>

          <div className="action-card animate-on-scroll delay-1">
            <div className="card-icon-wrapper">
              <IoMdTime className="action-icon" />
            </div>
            <h3>Service Times</h3>
            <p>Join us for worship every Sunday at 10:00 AM. Experience uplifting music and inspiring messages.</p>
            <Link href="/services" className="action-link">
              View Times <MdArrowForward className="link-arrow" />
            </Link>
          </div>

          <div className="action-card animate-on-scroll delay-2">
            <div className="card-icon-wrapper">
              <LuHeartHandshake className="action-icon" />
            </div>
            <h3>New Here?</h3>
            <p>Don't know where to start? We're here to help you feel at home and find your place.</p>
            <Link href="/welcome" className="action-link">
              Learn More <MdArrowForward className="link-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with Better Layout */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-left animate-slide-right">
            <div className="section-tag">
              <span className="dot"></span>
              <span>About Us</span>
            </div>
            <h2 className="gospel-title">
              We are a gospel centered, <span className="highlight">presence driven</span> church.
            </h2>
            <p className="about-description">
              A church devoted to nurturing Christ-centered families, equipping faithful disciples,
              and impacting our community through the love of Jesus.
            </p>
            <Link href="/about" className="about-link">
              Discover Our Story <FaLocationArrow className="arrow-icon" />
            </Link>
          </div>

          <div className="about-right animate-slide-left">
            <div className="image-wrapper">
              <Image
                src="/woman1-sing.jpg"
                alt="Worship at King's Throne"
                fill
                className="about-image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Watch Section */}
      <section className="watch-section">
        <div className="watch-container">
          <div className="watch-content">
            <FaBookBible className="section-icon" />
            <span className="watch-tag">POWERFUL & LIFE-CHANGING</span>
            <h2 className="watch-title">
              Watch Us <span className="live-badge">LIVE</span>
            </h2>
            <p className="watch-description">
              Join us as we dive into God's Word, discovering practical truths for everyday life.
            </p>
            <Link href="/watch" className="watch-button">
              Watch Now <RiLiveFill className="watch-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* Media Cards Section */}
      <section className="media-section">
        <div className="media-grid">
          <div className="media-card animate-on-scroll">
            <div className="media-image-wrapper">
              <Image
                src='/bible.jpg'
                alt="Bible Study"
                fill
                className="media-image"
              />
              <div className="media-overlay"></div>
            </div>
            <div className="media-text">
              <h3>Bible Study</h3>
              <p>Study guides & devotionals</p>
            </div>
          </div>

          <div className="media-card animate-on-scroll delay-1">
            <div className="media-image-wrapper">
              <Image
                src='/sermon.png'
                alt="Sermons"
                fill
                className="media-image"
              />
              <div className="media-overlay"></div>
            </div>
            <div className="media-text">
              <h3>Sermons</h3>
              <p>Watch live sermons & teachings</p>
            </div>
          </div>

          <div className="media-card animate-on-scroll delay-2">
            <div className="media-image-wrapper">
              <Image
                src='/music.jpg'
                alt="Worship Music"
                fill
                className="media-image"
              />
              <div className="media-overlay"></div>
            </div>
            <div className="media-text">
              <h3>Worship Music</h3>
              <p>Experience uplifting worship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="join-section">
        <div className="join-container">
          <Image
            src={'/join-bg.jpg'}
            fill
            alt="Join Our Church Family"
            className="join-bg"
          />
          <div className="join-overlay"></div>
          <div className="join-content">
            <h2 className="join-title">
              Join Our Amazing Church Family and <span className="highlight">Grow With Us</span>
            </h2>
            <div className="join-buttons">
              <Link href="/contact" className="join-button-primary">
                Contact Us <MdArrowForward />
              </Link>
              <Link href="/welcome" className="join-button-secondary">
                New Here? Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="ministries-section">
        <div className="ministries-header">
          <span className="section-subtitle">MINISTRIES</span>
          <h2 className="section-title">There's a place for everyone</h2>
        </div>

        <div className="ministries-grid">
          <div className="ministry-card animate-on-scroll">
            <div className="ministry-image-wrapper">
              <Image
                src={'/women-min.jpg'}
                alt="Women's Ministry"
                fill
                className="ministry-image"
              />
              <div className="ministry-overlay"></div>
            </div>
            <div className="ministry-text">
              <h3>Queens</h3>
              <Link href="/ministries/women" className="ministry-link">
                Women's Ministry
              </Link>
            </div>
          </div>

          <div className="ministry-card animate-on-scroll delay-1">
            <div className="ministry-image-wrapper">
              <Image
                src={'/min-kids.jpg'}
                alt="Children's Ministry"
                fill
                className="ministry-image"
              />
              <div className="ministry-overlay"></div>
            </div>
            <div className="ministry-text">
              <h3>J-Squad Children</h3>
              <Link href="/ministries/children" className="ministry-link">
                Children's Ministry
              </Link>
            </div>
          </div>

          <div className="ministry-card animate-on-scroll delay-2">
            <div className="ministry-image-wrapper">
              <Image
                src={'/teens-min.jpg'}
                alt="Teen Ministry"
                fill
                className="ministry-image"
              />
              <div className="ministry-overlay"></div>
            </div>
            <div className="ministry-text">
              <h3>J-Squad Teens</h3>
              <Link href="/ministries/teens" className="ministry-link">
                Amazing Life Teens
              </Link>
            </div>
          </div>

          <div className="ministry-card animate-on-scroll delay-3">
            <div className="ministry-image-wrapper">
              <Image
                src={'/men-min.jpg'}
                alt="Men's Ministry"
                fill
                className="ministry-image"
              />
              <div className="ministry-overlay"></div>
            </div>
            <div className="ministry-text">
              <h3>Kings</h3>
              <Link href="/ministries/men" className="ministry-link">
                Men's Ministry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MainBody