import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img from "../assets/Img/001.png";
import "../Styles/generalStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import "./styles.css";


const Hero = function () {
  return (
    <div className="container header">
      <Row className="header-body">
        <Col className="header-text" md={0}>

          <h1 className="">Jigawa Youth <span className="span-blue">Empowerment</span> and <span className="span-green">Employment</span> Initiative</h1>
          <p className="intro-text">
        Empowering youth with employable skills equips them with the necessary tools and knowledge to navigate the job market successfully.
          </p>
          <button id="primary-btn" className="btn btn-primary">Get Started</button>
            <button id="second-btn" className="btn btn-primary">See video</button>
        </Col>
        
      <Col>
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={Img} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </Col>
        
      </Row>

      <Row>

      </Row>

    


      
    </div>
  );
};

export default Hero;
