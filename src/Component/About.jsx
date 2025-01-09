import React from 'react'
import arrow from '../assets/arrow-up-right.svg'

export default function About() {
  return (
    <div>
        <section className="about-us" id="about-us">
      <div className="about-us__image">
        <div className="about-us__image-sushi3">
          <img src="https://i.postimg.cc/d18bXFVg/removal-ai-6f14fe9f-1acb-4cd9-b0f1-c9d8dbce09f9-f7b5fb9d-2ff0-426c-a7ec-958ff0a87e78-EF8-AGA.png" alt="hair" data-aos="fade-right" />
        </div>

        <button className="about-us__button">
          Learn More

          <img src={arrow} alt="learn more" />
        </button>

        <div className="about-us__image-sushi2">
          <img src="https://i.postimg.cc/d18bXFVg/removal-ai-6f14fe9f-1acb-4cd9-b0f1-c9d8dbce09f9-f7b5fb9d-2ff0-426c-a7ec-958ff0a87e78-EF8-AGA.png" alt="sushi"  data-aos="fade-right" />
        </div>
      </div>

      <div className="about-us__content"  data-aos="fade-left">
        <p className="sushi__subtitle">About Us </p>
        <h3 className="sushi__title">Our mission is to bring true precision and style to your hair.</h3>
             
        <p className="sushi__description">
        We will continue to provide the experience of Omotenashi, the mindset of hospitality, 
        through our expert haircuts and personalized services for our valued customers
        </p>
      </div>
    </section>
    </div>
  )
}
