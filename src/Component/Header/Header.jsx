import React from "react";
import "../header.css";
import bob from "../../assets/sejalW.jpg";

const Header = () => {
  return (
    <div className="Container">
      <div className="main_header">
        <div className="main_Hero">
          <div className="G1">
            <h2 className="headline">Hi I'm Sejal Jain </h2>
            <h3>Front-end developer</h3>
            <p className="hero_content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil
              quas laborum?
            </p>
            <button> Contact me </button>
          </div>
          <div className="G2">
            <img className="mask-img" src={bob} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
