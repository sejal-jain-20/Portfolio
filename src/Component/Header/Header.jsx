import React from "react";
import "../header.css";
import bob from "../../assets/sejalW.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { CgMail } from "react-icons/cg";
import Social from "../Social/Social";

const Header = () => {
  return (
    <div className="Container hi">
      <div className="main_header" id="home">
        <div className="main_Hero">
          <div className="social-icons" id="social_dir">
            <Social
              color="#0b83ee"
              icon={<CgMail />}
              link="https://mail.google.com/mail/u/0/#inbox?compose=new"
            />
            <Social
              color="#0D2636"
              icon={<FaGithub />}
              link="https://github.com/sejal-jain-20"
            />
            <Social
              color="#E84C88"
              icon={<FaInstagram />}
              link="https://www.instagram.com/sejal_2012_jain/"
            />
            <Social
              color="#0A66C2"
              icon={<FaLinkedin />}
              link="https://www.linkedin.com/in/sejal-jain20/"
            />
          </div>
          <div className="G1">
            <h2 className="headline">Hi I'm Sejal Jain </h2>
            <h3>Front-end developer</h3>
            <p className="hero_content" style={{ margin: "1.5rem 0" }}>
              I am a React developer. I like to do new challenges and my aim is
              to always give my best.
            </p>
            <a href="#Contact">
              <button>
                Contact me <TbBrandTelegram />
              </button>
            </a>
          </div>
          <div className="image_G2">
            <div className="image_G2_back"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
