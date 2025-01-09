import React from 'react'
import arrowvertical from '../assets/arrow-vertical.svg'
import arrowhori from '../assets/arrow-horizontal.svg'


export default function Trending() {
  return (
    <div>
       <section className="trending" id="food">
      <section className="trending-sushi">
        <div className="trending__content" data-aos="fade-right">
          <p className="sushi__subtitle">What’s Trending </p>
  
          <h3 className="sushi__title">Hair Styling
          </h3>
          <p className="sushi__description">Style your hair, style your confidence.
          </p>
  
          <ul className="trending__list flex-between">
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Hair cutting</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Hair Straitning</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Hair Color</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Curly hair</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Hair Smothning</p>
            </li>
            {/* <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p></p>
            </li> */}
          </ul>
        </div>
        <div className="trending__image flex-center">
          <img src="https://i.postimg.cc/d18bXFVg/removal-ai-6f14fe9f-1acb-4cd9-b0f1-c9d8dbce09f9-f7b5fb9d-2ff0-426c-a7ec-958ff0a87e78-EF8-AGA.png" alt="sushi-5" data-aos="fade-left" />
  
          <div className="trending__arrow trending__arrow-left">
            <img src={arrowvertical} alt="arrow vertical" />
          </div>
  
          <div className="trending__arrow trending__arrow-bottom">
            <img src={arrowhori} alt="arrow horizontal" />
          </div>
        </div>

      </section>

      <div className="trending__discover" data-aos="zoom-in">
        <p>Discover</p>
      </div>

      <section className="trending-drinks">
        <div className="trending__image flex-center">
          <img src="https://i.postimg.cc/d18bXFVg/removal-ai-6f14fe9f-1acb-4cd9-b0f1-c9d8dbce09f9-f7b5fb9d-2ff0-426c-a7ec-958ff0a87e78-EF8-AGA.png" alt="sushi-4" data-aos="fade-right" />
  
          <div className="trending__arrow trending__arrow-top">
            <img src={arrowhori} alt="arrow horizontal" />
          </div>
  
          <div className="trending__arrow trending__arrow-right">
            <img src={arrowvertical} alt="arrow vertical" />
          </div>
        </div>

        <div className="trending__content" data-aos="fade-left">
          <p className="sushi__subtitle">What’s Trending </p>
  
          <h3 className="sushi__title">Hair Styling
          </h3>
          <p className="sushi__description">Style your hair, style your confidence.
          </p>
  
          <ul className="trending__list flex-between">
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Oruncha</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>
                Sakura Tea</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Aojiru</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Ofukucha</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Kombu-cha</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="assets/check.svg" alt="check" />
              </div>
              <p>Mugicha</p>
            </li>
          </ul>
        </div>
      </section>
    </section>
    </div>
  )
}
