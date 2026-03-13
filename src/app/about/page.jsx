'use client'

import Image from 'next/image'
import './about.css'
import Link from 'next/link'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <div className="about-hero">
        <Image
          className='abt-bg'
          alt='About background'
          fill
          src={'/about-bg.jpg'}
          priority
        />

        <motion.div
          className="abt-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="abt-text">
          <motion.span
            className="abt-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            AMAZING LIFE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            More Than a Church,<br />We're a Family
          </motion.h1>

          <motion.p
            className="abt-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Transforming lives, supporting families, and uplifting communities
            through the hope and teachings of Jesus Christ.
          </motion.p>

          <motion.div
            className="abt-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <button className="abt-btn secondary">Join Us This Sunday</button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="about-us"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="abt-us-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            ABOUT US
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Who We <span style={{ color: '#0b1d67' }}>Are</span>
          </motion.h2>

          <div className="about-us-content">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              RCCG Amazing Life is a vibrant and friendly church located in Port Harcourt, Nigeria. We are a community of believers passionate about worship, encouraging families, and making a positive impact in our city and beyond. Our mission is to share the love of Jesus Christ and help people discover their God-given purpose.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We cherish prayer, the truth of God's Word, and the power of community. Our church provides ministries and activities for all ages, including worship services, Bible studies, youth programs, and outreach initiatives. Whether you're exploring faith or looking for a church home, we welcome you to join us on this journey of faith and transformation.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="abt-us-right"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            alt='About us'
            fill
            src={'/about-1.jpg'}
            className='abt-us-right-image'
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="our-mission"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          OUR MISSION
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          At RCCG Amazing Life, our mission is to bring hope and change through the love of Jesus Christ. We are committed to sharing the gospel, building strong families, and making a lasting difference in our community and beyond. We believe everyone has a unique purpose in God, and we strive to help individuals discover and fulfill that purpose through worship, learning, and service.
        </motion.p>
      </motion.div>

      <motion.div
        className="our-root"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="our-rt-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            fill
            className='rt-image'
            alt='Camp'
            src={'/pst-ea.webp'}
          />
        </motion.div>

        <motion.div
          className="our-rt-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Our Foundation - RCCG
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            RCCG Amazing Life is part of the worldwide family of the <b>Redeemed Christian Church Of God </b>, established in 1952 by the late Rev. Josiah Akindayomi. Today, RCCG has expanded to over 23,000 parishes globally under the leadership of Pastor Enoch A. Adeboye.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={'https://rccg.org'}
              className='rt-link'
            >
              Visit RCCG Global
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </>
  )
}

export default About