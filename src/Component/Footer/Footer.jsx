import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import{CgMail} from "react-icons/cg"
// import { FaLinkedin } from "react-icons/fa";
import Social from "../Social/Social";
import './../header.css';

const Footer = () => {
  return (
    <div className="footersec-container">
    <div className="social_icons_footer">
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
    <div className="bottom-bar">
        <div className="copyright-text">
            ©️ Copyright 2022 Sejal Jain| All Rights Reserved
        </div>
    </div>
</div>
  )
}

export default Footer