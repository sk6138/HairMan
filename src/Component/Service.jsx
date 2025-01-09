import React from 'react'
import arrow from '../assets/arrow-right.svg'

export default function Service() {
  return (
    <div>
        <section className="popular-foods" id="menu">
      <h2 className="popular-foods__title" data-aos="flip-up">Popular Service </h2>

      <div className="popular-foods__filters sushi__hide-scrollbar" data-aos="fade-up">
        <button className="popular-foods__filter-btn active">
        <img src="https://i.postimg.cc/d18bXFVg/removal-ai-6f14fe9f-1acb-4cd9-b0f1-c9d8dbce09f9-f7b5fb9d-2ff0-426c-a7ec-958ff0a87e78-EF8-AGA.png" alt="" />
          Hair</button>
        
        <button className="popular-foods__filter-btn">
          <img src="https://i.postimg.cc/d18bXFVg/removal-ai-6f14fe9f-1acb-4cd9-b0f1-c9d8dbce09f9-f7b5fb9d-2ff0-426c-a7ec-958ff0a87e78-EF8-AGA.png" alt="" />
          Face
        </button>
        <button className="popular-foods__filter-btn">
          <img src="https://i.postimg.cc/d18bXFVg/removal-ai-6f14fe9f-1acb-4cd9-b0f1-c9d8dbce09f9-f7b5fb9d-2ff0-426c-a7ec-958ff0a87e78-EF8-AGA.png" alt="" />
          Beard
        </button>
        <button className="popular-foods__filter-btn">
          <img src="https://i.postimg.cc/d18bXFVg/removal-ai-6f14fe9f-1acb-4cd9-b0f1-c9d8dbce09f9-f7b5fb9d-2ff0-426c-a7ec-958ff0a87e78-EF8-AGA.png" alt="" />
          Massage
        </button>
        <button className="popular-foods__filter-btn">All</button>
      </div>

      <div className="popular-foods__catalogue" data-aos="fade-up">
        <article className="popular-foods__card">
          <img className="popular-foods__card-image" src="https://i.postimg.cc/d18bXFVg/removal-ai-6f14fe9f-1acb-4cd9-b0f1-c9d8dbce09f9-f7b5fb9d-2ff0-426c-a7ec-958ff0a87e78-EF8-AGA.png" alt="sushi-12" />
          <h4 className="popular-foods__card-title">Mullet Hair Cut</h4>

          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              {/* <img src="assets/star.svg" alt="star" /> */}
              <p>4 Inch</p> 
            </div>
            <br />
            <p className="popular-foods__card-price">$21.00</p>
          </div>
        </article>

        <article className="popular-foods__card active-card">
          <img className="popular-foods__card-image" src="https://i.postimg.cc/d18bXFVg/removal-ai-6f14fe9f-1acb-4cd9-b0f1-c9d8dbce09f9-f7b5fb9d-2ff0-426c-a7ec-958ff0a87e78-EF8-AGA.png" alt="sushi-12" />
          <h4 className="popular-foods__card-title">Mullet Hair Cut</h4>

          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              {/* <img src="assets/star.svg" alt="star" /> */}
              <p>4 Inch</p> 
            </div>
            <br />
            <p className="popular-foods__card-price">$21.00</p>
          </div>
        </article>

        <article className="popular-foods__card">
          <img className="popular-foods__card-image" src="https://i.postimg.cc/d18bXFVg/removal-ai-6f14fe9f-1acb-4cd9-b0f1-c9d8dbce09f9-f7b5fb9d-2ff0-426c-a7ec-958ff0a87e78-EF8-AGA.png" alt="sushi-12" />
          <h4 className="popular-foods__card-title">Mullet Hair Cut</h4>

          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              {/* <img src="assets/star.svg" alt="star" /> */}
              <p>4 Inch</p> 
            </div>
            <br />
            <p className="popular-foods__card-price">$21.00</p>
          </div>
        </article>
      </div>

      <button className="popular-foods__button">
        Explore More
        <img src={arrow}  alt="arrow-right" />
      </button>
    </section>
    </div>
  )
}
