import React from "react";
import b1 from '../../assets/b1.jpg';
import q1 from '../../assets/q1.jpg';
import p2 from '../../assets/p2.jpg';
import p1 from '../../assets/p2.3.jpg';
import l1 from '../../assets/l1.jpg';
import g4 from '../../assets/g4.jpg';

import {AiOutlineArrowRight} from 'react-icons/ai';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../header.css";

import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Project = () => {
  return (
    <>
    <div>
      <div className="Project_section " id="project">
      <h1 className="title" >Projects</h1>
      <h3 className="sub-title" style={{marginBottom:"6rem" }}>Most recent work</h3>
      <div className="project_container container" >
      
       
     <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"> 

       <SwiperSlide><div className="project_Content grid ">
            <img src={q1} alt="" className="portfolio_img " />
            <div className="project_data">
              <h3 className="porject_title">Modern Website</h3>
              <p className="project_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illo reiciendis inventore!
              </p>
              <button><a href="https://quiz-nu-lilac.vercel.app/" className="button button--flex button--small project__button">Demo<AiOutlineArrowRight/></a></button>
            </div>
          </div></SwiperSlide>



        <SwiperSlide><div className="project_Content grid ">
            <img src={b1} alt="" className="portfolio_img" />
            <div className="project_data">
              <h3 className="porject_title">Modern Website</h3>
              <p className="project_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illo reiciendis inventore!
              </p>
              <button><a href="https://developerhub-zeta.vercel.app/" className="button button--flex button--small project__button">Demo<AiOutlineArrowRight/></a></button>
            </div>
          </div></SwiperSlide>



        <SwiperSlide>
          <div className="project_Content grid ">
            <img src={p2} alt="" className="portfolio_img" />
            <div className="project_data">
              <h3 className="porject_title">Modern Website</h3>
              <p className="project_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illo reiciendis inventore!
              </p>
              <button><a href="https://sejal-jain-20.github.io/headerDesign/" className="button button--flex button--small project__button">Demo<AiOutlineArrowRight/></a></button>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="project_Content grid ">
            <img src={p1} alt="" className="portfolio_img" />
            <div className="project_data">
              <h3 className="porject_title">Modern Website</h3>
              <p className="project_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illo reiciendis inventore!
              </p>
              <button><a href="https://sejal-jain-20.github.io/projectgithub.io/" className="button button--flex button--small project__button">Demo<AiOutlineArrowRight/></a></button>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="project_Content grid ">
            <img src={l1} alt="" className="portfolio_img" />
            <div className="project_data">
              <h3 className="porject_title">Modern Website</h3>
              <p className="project_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illo reiciendis inventore!
              </p>
              <button><a href="https://sejal-jain-20.github.io/twowaits_Intership/" className="button button--flex button--small project__button">Demo<AiOutlineArrowRight/></a></button>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="project_Content grid ">
            <img src={g4} alt="" className="portfolio_img" />
            <div className="project_data">
              <h3 className="porject_title">Modern Website</h3>
              <p className="project_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illo reiciendis inventore!
              </p>
              <button><a href="https://sejal-jain-20.github.io/piggame/" className="button button--flex button--small project__button">Demo<AiOutlineArrowRight/></a></button>
            </div>
          </div>
          </SwiperSlide>

      

      
      </Swiper>
      </div>
      </div>
    </div>
    
    </>
  );
};

export default Project;
