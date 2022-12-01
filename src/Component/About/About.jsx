import React from "react";
import me from "../../assets/me.jpg";

import "../header.css";
const About = () => {
  return (
    <div className="Container">
      <div className="aboutme">
        <div className="about_title">
          <h2 className="title">About me</h2>
          <h3 className="sub-title"> My Introduction</h3>
        </div>
        <div className="about_section">
          <div className="">
            <img className="img_Intro" src={me} alt="" />
          </div>
          <div className="">

            <h4>heyhwjfhefeug</h4>
            <h3> hyrfvfdjvbdhvhjd</h3>
            <span>vdhvidbfk</span>
            <p className="about_p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              ea, corporis tempore repellendus voluptatem laudantium minus
              perferendis eligendi praesentium quae. Quo accusamus magnam ipsam
              sequi exercitationem repellendus illo tempora non.
            </p>
            <button>Download CV</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
