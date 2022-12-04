import React from "react";
import {
  DiCodeBadge,
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiJqueryLogo,
  DiBootstrap,
  DiGit,
  DiReact,
} from "react-icons/di";
import "../header.css";

const Skills = () => {
  return (
    <div className="Container">
      <div className="Skill_sec">
        <div className="skill_title" id="skill">
          <h2 className="title">Skills</h2>
        </div>
        <div className="cards">
          <div className="card c1">
            <DiCodeBadge size={70} />
            <span>C/C++</span>
          </div>
          <div className="card c2">
            <DiHtml5 size={70} />
            <span>HTML5</span>
          </div>
          <div className="card c3">
            <DiCss3 size={70} />
            <span>Css</span>
          </div>
          <div className="card c4">
            <DiJsBadge size={80} />
            <span>Js</span>
          </div>
        

        <div className="card c5">
          <DiJqueryLogo size={70} />
          <span>Jquery</span>
        </div>
        <div className="card c6">
          <DiBootstrap size={70} />
          <span>Bootstrap</span>
        </div>
        <div className="card c7">
          <DiReact size={80} />
          <span>React</span>
        </div>
        <div className="card c8">
          <DiGit size={80} />
          <span>Git/Github</span>
        </div>

        <div className="card c9">
          <DiCodeBadge size={70} />
          <span>Problem solving</span>
          <span>(DSA)</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
