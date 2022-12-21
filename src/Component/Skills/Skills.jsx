import React from "react";
import {
  DiCodeBadge,
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiBootstrap,
  DiGit,
  DiReact,
} from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import "../header.css";
import Section from "../Section/Section";

const Skills = () => {
  const cards_data = [
    {
      id: 1,
      icon: <DiCodeBadge size={70} />,
      title: "C/C++",
    },
    {
      id: 2,
      icon: <DiHtml5 size={70} />,
      title: "HTML5",
    },
    {
      id: 3,
      icon: <DiCss3 size={70} />,
      title: "Css",
    },
    {
      id: 4,
      icon: <DiJsBadge size={80} />,
      title: "Js",
    },
    {
      id: 5,
      icon: <VscJson size={70} />,
      title: "JSON",
    },
    {
      id: 6,
      icon: <DiBootstrap size={70} />,
      title: "Bootstrap",
    },
    {
      id: 7,
      icon: <DiReact size={80} />,
      title: "React",
    },
    {
      id: 8,
      icon: <DiGit size={80} />,
      title: "Git/Github",
    },
    {
      id: 9,
      icon: <DiCodeBadge size={70} />,
      title: "Problem solving",
      subtitle: "(DSA)",
    },
  ];
  return (
    <div className="Container">
      <div className="skill_sec" id="skill">
        <Section title={"Skills"} subtitle={"My Skills"} />
        <div className="cards">
          {cards_data.map((card) => {
            return (
              <div className={`card c${card.id}`} key={card.id}>
                {card.icon}
                <span>{card.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );


};

export default Skills;
