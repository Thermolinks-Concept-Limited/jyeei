import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/Img/imglogo.png";
// import element from "../images/element.png";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Swipe = function () {
  return (
    <div className=" testimonials-item">
        <div className="review_header">
            <h3>Reviews of <span className="span-yelowb"> beneficiaries</span> who have <br /> gotten placements from the JYEES</h3>
          </div>
    <div className="testimonials">
        
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
            <div class="review">
              <p>
              “The scheme not only equipped me with the essential skills and knowledge through their comprehensive training program but also connected me with industry professionals who mentored and guided me along the way. The empowerment scheme has truly transformed my life, opening doors to a fulfilling career and giving me the chance to make a meaningful contribution to my field.”
              </p>
            </div>
   
          <div className="slider">
            <div class="profile-container">
              <img
                src={img1}
                alt="  profile image"
                class="profile-img"
              />
              <div class="profile-name">
                <p class="name">Salhalu&nbsp;Junaid</p>
                <p class="job">Salhalu </p>
              </div>
            </div>
           
          </div>
        </SwiperSlide>


          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
     
      </div>
         <br />   <br />   <br />
    </div>
  );
};

export default Swipe;
