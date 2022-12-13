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
              <h3 className="porject_title">Quiz Game</h3>
              <p className="project_description">
              Quiz Game using React and Json API.
              </p>
              <button><a href="https://quiz-nu-lilac.vercel.app/" className="button button--flex button--small project__button">Demo<AiOutlineArrowRight/></a></button>
            </div>
          </div></SwiperSlide>



        <SwiperSlide><div className="project_Content grid ">
            <img src={b1} alt="" className="portfolio_img" />
            <div className="project_data">
              <h3 className="porject_title">Developer-hub</h3>
              <p className="project_description">
              Technology used : MERN stack.
              <br/>
               Working on the website to create a platform that
               helps in learning the new tech like Blockchain, Metaverse, AR/VR and AI/ML. 
              </p>
              <button><a href="https://developerhub-zeta.vercel.app/" className="button button--flex button--small project__button">Demo<AiOutlineArrowRight/></a></button>
            </div>
          </div></SwiperSlide>



        <SwiperSlide>
          <div className="project_Content grid ">
            <img src={p2} alt="" className="portfolio_img" />
            <div className="project_data">
              <h3 className="porject_title">Header Design</h3>
              <p className="project_description">
                Simple and ease design of header.
              </p>
              <button><a href="https://sejal-jain-20.github.io/headerDesign/" className="button button--flex button--small project__button">Demo<AiOutlineArrowRight/></a></button>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="project_Content grid ">
            <img src={p1} alt="" className="portfolio_img" />
            <div className="project_data">
              <h3 className="porject_title">Responsive Website</h3>
              <p className="project_description">
               A Simple Responsive website using CSS only with no framework.</p>
              <button><a href="https://sejal-jain-20.github.io/projectgithub.io/" className="button button--flex button--small project__button">Demo<AiOutlineArrowRight/></a></button>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="project_Content grid ">
            <img src={l1} alt="" className="portfolio_img" />
            <div className="project_data">
              <h3 className="porject_title">Assignment Website</h3>
              <p className="project_description">
                Basic laptop landing page , created by online learning based internship.
              </p>
              <button><a href="https://sejal-jain-20.github.io/twowaits_Intership/" className="button button--flex button--small project__button">Demo<AiOutlineArrowRight/></a></button>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="project_Content grid ">
            <img src={g4} alt="" className="portfolio_img" />
            <div className="project_data">
              <h3 className="porject_title">Pig Game</h3>
              <p className="project_description">
                Pig-game made by using html , css, js .
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
