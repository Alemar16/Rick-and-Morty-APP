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
    width: 300px;
    height: 400px;
    border-radius: 10px;
    /* -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0); */
    /* -webkit-box reflect: below 5px linear-gradient(transparent, transparent, #0006); */
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
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

const Home = () => {
  return (
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
  );
};

export default Home;
