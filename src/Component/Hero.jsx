import React from 'react'
import '../Css/HeroCss.css'
import platbtn from '../assets/play-circle.svg'
import user from '../assets/user.png'

export default function Hero() {
  return (
    <div>
         <section className="hero">
      <div className="hero-image">
        <img 
          src="https://i.postimg.cc/d18bXFVg/removal-ai-6f14fe9f-1acb-4cd9-b0f1-c9d8dbce09f9-f7b5fb9d-2ff0-426c-a7ec-958ff0a87e78-EF8-AGA.png"
          alt="sushi"
          data-aos="fade-up"
        />
        <h2 data-aos="fade-up">
          M <br />
          E <br />
          N 
        </h2>

        <div className="hero-image__overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-content-info" data-aos="fade-left">
          <h1>Good hair speaks louder than words.</h1>
          <p>Your hair isn’t just a part of you—it’s a reflection of your personality, mood, and energy. 
            So why not treat it as a symbol of renewal? Whether it’s a daring cut, a playful color, or a polished style,
             a new hairstyle can give you that much-needed spark to take on the world. </p>

          <div className="hero-content__buttons">
            {/* <button className="hero-content__order-button">Order Now</button> */}
            <button className="hero-content__play-button">
              <img src={platbtn} alt="play" />
              How to Book Appointment
            </button>
          </div>
        </div>

        <div className="hero-content__testimonial" data-aos="fade-up">
          <div className="hero-content__customer flex-center">
            <h4>24<span>k+</span></h4>
            <p>Happy Customers</p>
          </div>

          <div className="hero-content__review">
            <img src="https://i.postimg.cc/d18bXFVg/removal-ai-6f14fe9f-1acb-4cd9-b0f1-c9d8dbce09f9-f7b5fb9d-2ff0-426c-a7ec-958ff0a87e78-EF8-AGA.png" alt="user" />
            <p>"This is the best Hair cuttting Service that ever existed."</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
