import React, { useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper {
    padding-top: 50px;
    padding-bottom: 80px;
  }
  .swiper .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 220px;
    height: 320px;
    border-radius: 10px;
    /* -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0); */
    /* -webkit-box reflect: below 5px linear-gradient(transparent, transparent, #0006); */

    box-shadow: 0px 8px 12px -10px rgba(255, 255, 255, 0.7),
      0px -4px 6px -6px rgba(0, 0, 0, 0.7);
  }
`;
const slides = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
];

const FormContainer = styled.div`
  display: ${props => (props.show ? "block" : "none")};`

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSearchClick = () => {
    setShowForm(!showForm);
  }
  
  return (
    <div className="container-fluid" style={{ maxHeight:"100vh", overflow:"hidden", marginTop:"60px" }}>
      <div>
        <h1 className="text-center mt-5 mb-3 fw-bold fs-1 text-secondary">
          Rick and Morty
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          <i
            className={showForm ? "bi bi-arrow-return-left" : "bi bi-search"}
            style={{
              fontSize: "1.5rem",
              marginRight: "0.5rem",
              cursor: "pointer",
            }}
            onClick={handleSearchClick}
          ></i>

          <FormContainer show={showForm}>
            <form className="d-flex justify-content-center mb-3 mt-4">
              <input
                className="form-control-sm me-sm-2"
                type="search"
                placeholder="Enter the number..."
                size={18}
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </FormContainer>
        </div>
      </div>
      <div className="container mt-2">
        <CarouselContainer>
          <Swiper
            centeredSlides={true}
            pagination={true}
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={"auto"}
            mousewheel={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
          >
            <div>
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  style={{ backgroundImage: `url(${slide})` }}
                ></SwiperSlide>
              ))}
            </div>
          </Swiper>
        </CarouselContainer>
      </div>
    </div>
  );
};

export default Home;
