import React from "react";
import "./Section.css";

const Section = ({ title, subtitle }) => {
  return (
    <div>
      <div className="section ">
        <div className="Section_parent" id="about">
          <h2 className="title">{title}</h2>
          <h3 className="sub-title">{subtitle}</h3>
        </div>
        <div class="about-udernline">
          <div class="about-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Section;
