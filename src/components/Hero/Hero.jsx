import React, { useRef, useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img from "../assets/Img/001.png";
import "../Styles/generalStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Hero = function () {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="container header">
      <Row className="header-body">
        <Col className="header-text" md={0}>

          <h1 className="">Jigawa Youth <span className="span-blueb">Empowerment</span> and <span className="span-greenb">Employment</span> Initiative</h1>
          <p className="intro-text">
        Empowering youth with employable skills equips them with the necessary tools and knowledge to navigate the job market successfully.
          </p>
          <button id="primary-btn" className="btn btn-primary">Get Started</button>
            <button id="second-btn" className="btn btn-primary">See video</button>
        </Col>
        
      <Col>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
<img src={Img} alt=""/>

        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </Col>
        
      </Row>

      <Row>

      </Row>

    


      
    </div>
  );
};

export default Hero;
