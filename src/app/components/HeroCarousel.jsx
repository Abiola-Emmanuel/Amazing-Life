'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaLocationArrow } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { useState, useEffect } from 'react';
import './hero-carousel.css'

import 'swiper/css'
import 'swiper/css/effect-fade'

const HeroCarousel = () => {

  const [verseIndex, setVerseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVerseIndex((prev) => (prev + 1) % verses.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])


  const verses = [
    {
      text: "For where two or three gather in my name, there am I with them.",
      reference: "Matthew 18:20"
    },
    {
      text: "Love the Lord your God with all your heart and with all your soul and with all your mind.",
      reference: "Matthew 22:37"
    },
    {
      text: "Let the peace of Christ rule in your hearts... and be thankful.",
      reference: "Colossians 3:15"
    }
  ]


  const slides = [
    {
      src: '/hero-1.jpg',
      subtitle: 'Loving People',
      description: 'Join us as we worship wholeheartedly, grow in faith, and serve our community with compassion.',
      buttonText: 'Plan Your Visit',
      link: '/contact'
    },
    {
      src: '/hero-2.jpg',
      subtitle: 'Modern Worship, Timeless Truth',
      description: 'Experience powerful worship, practical teaching, and a welcoming church family.',
      buttonText: 'Join US',
      link: '/services'
    },
    {
      src: '/hero-3.jpg',
      subtitle: 'Faith, Family, Fellowship',
      description: 'Discover your purpose, build meaningful relationships, and walk your journey of faith with us.',
      buttonText: 'Get Involved',
      link: '/ministries'
    }
  ]

  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={2000}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="hero-slide">
            <Image
              src={slide.src}
              alt={slide.subtitle}
              fill
              className="hero-image"
              priority={index === 0}
              sizes="100vw"
            />

            <div className="hero-overlay" />

            <div className="hero-content">
              <p className="hero-subtitle">{slide.subtitle}</p>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-link">
                <Link href={slide.link} >{slide.buttonText}</Link>
                <FaLocationArrow className="arrow-icon" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="verse-container">
        <div className="verse-content">
          <FaQuoteRight className="verse-quote-icon" />
          <p className="verse-text">{verses[verseIndex].text}</p>
          <p className="verse-reference">{verses[verseIndex].reference}</p>
        </div>
      </div>

    </>
  )
}

export default HeroCarousel