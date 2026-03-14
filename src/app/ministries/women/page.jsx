"use client"

import Image from "next/image"
import Link from "next/link"
import { RiCheckLine } from "react-icons/ri";
import './women.css'
import Footer from "@/app/components/Footer"
import Media from "@/app/components/media";

const Women = () => {

  const benefits = [
    { id: 1, text: "Women's Bible Study" },
    { id: 2, text: "Mentorship and Support Groups" },
    { id: 3, text: "Community Outreach & Service Projects" },
    { id: 4, text: "Workshops on family, wellness, and personal growth" },
    { id: 5, text: "Prayer Meetings and Spiritual Retreats" },
  ]

  return (
    <>
      <div className="women-hero">
        <Image
          src='/women-hero.jpg'
          fill
          alt='Women Ministry'
          className='women-bg'
          priority
        />

        <div className="women-text">
          <span className="women-badge">WOMEN'S MINISTRY</span>
          <h1>Empowered for <span className="highlight">Purpose</span></h1>
          <p>Building strong women of faith, integrity, and purpose. Join us as we grow together in Christ.</p>
          <div className="women-actions">
            <Link href="/contact" className="women-btn">Join the Women's Ministry</Link>
          </div>
        </div>
      </div>

      <div className="women-intro">
        <div>
          <p className="strong">Strong in Faith, United in Purpose</p>
          <h2 className="women">Women's Ministry</h2>
        </div>

        <div className="introduction">

          <div className="introduction-left">
            <div className="women-description">
              <h2>Introduction</h2>
              <div className="ministry-description">
                <p>
                  Our Women's Ministry is dedicated to empowering women to lead with courage, wisdom, and godly character.
                  Rooted in Scripture—drawing from <span className="scripture">Proverbs 31:25, "She is clothed with strength and dignity; she can laugh at the days to come"</span>—we create a supportive sisterhood where women can grow together in faith and accountability.
                </p>

                <p>
                  Through regular fellowship, heartfelt prayer, and practical, Bible-based teachings, we help women deepen their daily walk with Jesus Christ. Whether you're a wife striving to nurture your family, a mother investing in your children, a professional navigating workplace challenges, or a single woman seeking purpose and direction.
                </p>
              </div>
            </div>
          </div>

          <div className="introduction-right">
            <Image
              src={'/women-intro.jpg'}
              fill
              className="intro-right-image"
              alt="Women introduction background"
            />
          </div>

        </div>
      </div>

      <div className="goal-container">
        <span className="goal-subtitle">OUR MISSION</span>
        <h2 className="goal-title">Women of Strength, Rooted in Faith</h2>
        <p className="goal-text">Building strong, responsible, and spiritually grounded women who positively influence their families and communities.</p>
      </div>

      <div className="benefits">

        <div className="ben-left">
          <Image
            src={'/women-what.jpg'}
            alt="Women background"
            fill
            className="benefits-bg"
          />
        </div>

        <div className="ben-right">

          <h2>What we do</h2>

          <div className="ben-list">
            {benefits.map((benefit) => (
              <div className="ben-item" key={benefit.id}>
                <RiCheckLine className="check-icon" />
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Media />

      <Footer />
    </>
  )
}

export default Women