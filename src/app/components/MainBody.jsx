"use client";

import { IoMdTime } from "react-icons/io";
import { FaLocationDot, FaBookBible } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";
import { FaLocationArrow } from "react-icons/fa6";
import { RiLiveFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import './main-body.css'


const MainBody = () => {
  return (
    <div className="believe">
      <div className="believe-text">
        <h2>A Community Anchored in Christ,
          <span>United in Love </span> for People</h2>

        <p>Transformed by the gift of salvation, we exist to worship authentically, strengthen the local church, and advance God’s Kingdom across the earth. Rooted in biblical truth, we are committed to building a Christ-centered community where lives are renewed, faith is strengthened, and hope is shared with our city and beyond.</p>
      </div>

      <div className="action-cards">

        <div className="action-card">
          <FaLocationDot className="action-icon" />
          <h3>Find Us</h3>
          <p>We welcome you to experience the warmth of our church family and grow in faith together.</p>
          <Link href="/contact" className="action-link">Get Directions</Link>
        </div>

        <div className="action-card">
          <IoMdTime className="action-icon" />
          <h3>Service Times</h3>
          <p>Join us for worship every Sunday at 10:00 AM. Experience uplifting music, inspiring messages, and a welcoming community.</p>
          <Link href="/services" className="action-link">View Service Times</Link>
        </div>

        <div className="action-card">
          <LuHeartHandshake className="action-icon" />
          <h3>New Here?</h3>
          <p>Don&apos;t know where to start? Were here to help you feel at home. Visit our welcome desk or contact us for more information.</p>
          <Link href="/welcome" className="action-link">Learn More</Link>
        </div>

      </div>

      <div className="about">

        <div className="about-left">

          <h2><span className="dot"></span> About Us</h2>

          <h2 className="gospel">We are a gospel centered, presence driven church.</h2>

          <p className="devoted">
            A church devoted to nurturing Christ-centered families, equipping faithful disciples, and impacting our community through the love of Jesus.
          </p>

          <Link href="/about" className="about-link">Learn More <FaLocationArrow className="arrow-icon" />
          </Link>
        </div>

        <div className="about-right">
          <Image
            src="/woman1-sing.jpg"
            alt="Woman"
            fill
            className="about-image"
          />
        </div>

      </div>

      <div className="watch">
        <div className="watch-top">
          <FaBookBible className="watch-icon" />
        </div>

        <div className="watch-bottom">
          <h3>POWERFUL & LIFE-CHANGING</h3>

          <h2>Watch Us <span className="live-dot"></span> <span style={{ color: 'red' }}>Live</span></h2>

          <p>Join us as we dive into God’s Word, discovering <br /> practical truths for everyday life.</p>
        </div>

        <div className="watch-link">
          <Link href="/watch" className="watch-link-text">Watch Now <RiLiveFill className="watch-link-icon" />
          </Link>
        </div>
      </div>

      <div className="media">

        <div className="media-card">
          <div className="media-overlay"></div>
          <Image
            src='/bible.jpg'
            alt="Media Image"
            fill
            className="media-card-image"
          />
          <div className="media-text">
            <h3>Bible Study</h3>
            <p>Study guides, and devotionals </p>
          </div>
        </div>

        <div className="media-card">
          <div className="media-overlay"></div>
          <Image
            src='/sermon.png'
            alt="Media Image"
            fill
            className="media-card-image"
          />
          <div className="media-text">
            <h3>Sermons</h3>
            <p>Watch live sermons and teachings</p>
          </div>
        </div>

        <div className="media-card">
          <div className="media-overlay"></div>
          <Image
            src='/music.jpg'
            alt="Media Image"
            fill
            className="media-card-image"
          />
          <div className="media-text">
            <h3>Worship Music</h3>
            <p>Experience uplifting worship music</p>
          </div>
        </div>

      </div>

      <div className="join">
        <Image
          src={'/join-bg.jpg'}
          fill
          alt="Join Us Background"
          className="join-bg"
        />
        <div className="join-overlay"></div>
        <div className="join-text">
          <h2>Join Amazing Life Family and grow with us now</h2>

          <div className="join-actions">
            <Link href="/contact" className="join-link1">Contact Us <FaLocationArrow /></Link>
            <Link href="/welcome" className="join-link2">New Here?</Link>
          </div>
        </div>
      </div>

      <div className="ministries">
        <div className="min-top">
          <h3>MINISTRIES</h3>
          <h2 className="title">There is a place for everyone</h2>
        </div>

        <div className="min-cards">
          <div className="min-card">
            <div className="min-overlay"></div>
            <Image
              src={'/women-min.jpg'}
              alt="Min-image"
              fill
              className="min-image"
            />
            <div className="min-text">
              <h2>Queens</h2>
              <p>Women ministry</p>
            </div>
          </div>
          <div className=" min-card">
            <div className="min-overlay"></div>
            <Image
              src={'/min-kids.jpg'}
              alt="Min-image"
              fill
              className="min-image"
            />
            <div className="min-text">
              <h2>J-Squad Children</h2>
              <p>Children ministry</p>
            </div>
          </div>
          <div className="min-card">
            <div className="min-overlay"></div>
            <Image
              src={'/teens-min.jpg'}
              alt="Min-image"
              fill
              className="min-image"
            />
            <div className="min-text">
              <h2>J-Squad Teens</h2>
              <p>Amazing Life Teens</p>
            </div>

          </div>
          <div className="min-card">
            <div className="min-overlay"></div>
            <Image
              src={'/men-min.jpg'}
              alt="Min-image"
              fill
              className="min-image"
            />
            <div className="min-text">
              <h2>Kings </h2>
              <p>Men's Ministry</p>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default MainBody
