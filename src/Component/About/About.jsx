import React from "react";
import me from "../../assets/me.jpg";
import {FaCloudDownloadAlt}from "react-icons/fa";
import "../header.css";
import Section from "../Section/Section";
import { TbBrandTelegram } from "react-icons/tb";
const About = () => {
  return (
    <div className="Container">
      <div className="aboutme ">
        <Section title={"About Me"} subtitle={"My Introduction"} />
        <div className="about_section">
          <div className="imgsection">
            <img className="img_Intro" src={me} alt="" />
          </div>
          <div className="about_details">
            <h2 className="about_H">Front-end developer</h2>
            <p className="about_h2">
              {" "}
              I am persuing B.tech Final year with IT DEPARTMENT from Krishna
              Enggnieering college. Currently working on DSA & Development{" "}
            </p>

            <p className="about_H">
              Professionally strong and willing to contribute to an
              Organization.
            </p>
            <h2 style={{ marginBottom: ".7rem" }}> Highlights</h2>
            <ul>
              <li>C++ DSA</li>
              <li>Front-end Developement</li>
              <li>Interactive User Interface by design </li>
              <li>Better understanding of React and Js</li>
              <li>Bulid API by Json</li>
            </ul>
            <a href="SejalJAinResume.pdf" download="SejalJAinResume.pdf">
              <button>
                Download CV <FaCloudDownloadAlt size="18" />
              </button>
            </a>
            <a href="#Contact" style={{marginLeft:"10px"}}>
              <button>
                Contact me <TbBrandTelegram size="18" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
