"use client"

import Image from "next/image"
import Link from "next/link"
import { RiCheckLine } from "react-icons/ri";
import './men.css'
import Footer from "@/app/components/Footer"
import Media from "@/app/components/media";

const Men = () => {

  const benefits = [
    { id: 1, text: "Men's Bible Study" },
    { id: 2, text: "Leadership Development" },
    { id: 3, text: "Service Projects" },
    { id: 4, text: 'Disclosure and Accountability' },
    { id: 5, text: 'Workshops on family, finances, and personal growth' },
  ]

  return (
    <>
      <div className="men-hero">
        <Image
          src='/men-hero.jpg'
          fill
          alt='Men Ministry'
          className='men-bg'
          priority
        />

        <div className="men-text">
          <span className="men-badge">MEN'S MINISTRY</span>
          <h1>Forged for <span className="highlight">Greatness</span></h1>
          <p>Building strong men of faith, integrity, and purpose. Join us as we grow together in Christ.</p>
          <div className="men-actions">
            <Link href="/contact" className="men-btn">Join the Men's Ministry</Link>
          </div>
        </div>
      </div>

      <div className="men-intro">
        <div>
          <p className="strong">Strong in Faith, United in Purpose</p>
          <h2 className="men">Men's Ministry</h2>
        </div>

        <div className="introduction">

          <div className="introduction-left">
            <div className="men-description">
              <h2>Introduction</h2>
              Our Men's Ministry is dedicated to empowering men to lead with courage, wisdom, and godly character.
              Rooted in Scripture—drawing from Proverbs 27:17, <span className="scripture">"As iron sharpens iron, so one man sharpens another"</span>—we create a supportive brotherhood where men can grow together in faith and accountability.
              <br /><br />
              Through regular fellowship, heartfelt prayer, and practical, Bible-based teachings, we help men deepen their daily walk with Jesus Christ. Whether you're a husband striving to lead your family well, a father investing in your children, a professional navigating workplace challenges, or a single man seeking purpose and direction, <strong>Kings</strong> provides a space to build authentic relationships, confront real-life issues, and discover your God-given role as a leader.
            </div>
          </div>

          <div className="introduction-right">
            <Image
              src={'/men-intro.jpg'}
              fill
              className="intro-right-image"
              alt="Men introduction background"
            />
          </div>

        </div>
      </div>

      <div className="goal-container">
        <span className="goal-subtitle">OUR MISSION</span>
        <h2 className="goal-title">Men of Strength, Rooted in Faith</h2>
        <p className="goal-text">Building strong, responsible, and spiritually grounded men who positively influence their families and communities.</p>

      </div>

      <div className="benefits">

        <div className="ben-left">
          <Image
            src={'/what-we.jpg'}
            alt="Men background"
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

export default Men