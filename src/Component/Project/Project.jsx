import React from "react";
import b1 from "../../assets/b1.jpg";
import q1 from "../../assets/q1.jpg";
import p2 from "../../assets/p2.jpg";
import p1 from "../../assets/p2.3.jpg";
import l1 from "../../assets/l1.jpg";
import g4 from "../../assets/g4.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import Carousel from "react-bootstrap/Carousel";
import Section from "../Section/Section";
import "./styles.css";

const Project = () => {
  const Carousel_data = [
    {
      id: 1,
      img: q1,
      title: "Quiz Game",
      description: "Quiz Game using React and Json API.",
      link: "https://quiz-nu-lilac.vercel.app/",
    },
    {
      id: 2,
      img: b1,
      title: "Developer-Hub",
      description: `Technology Used:MERN stack Web App that helps in learning new tech like BlockChain, Metaverse, AR/VR and AI/ML.`,
      link: "https://developerhub-zeta.vercel.app/",
    },
    {
      id: 3,
      img: p1,
      title: "Header Design",
      description: "Simple and easy to use header design.",
      link: "https://sejal-jain-20.github.io/projectgithub.io/",
    },
    {
      id: 4,
      img: p2,
      title: "Responsive Website",
      description:
        "A simple responsive website using HTML and CSS without any framework.",
      link: "https://sejal-jain-20.github.io/headerDesign/",
    },
    {
      id: 5,
      img: l1,
      title: "Assignment Website",
      description:
        "Basic laptop landing page, created for internship assignment.",
      link: "https://sejal-jain-20.github.io/twowaits_Intership/",
    },
    {
      id: 6,
      img: g4,
      title: "Pig Game",
      description: "Pig-Game using HTML, CSS and JS.",
      link: "https://sejal-jain-20.github.io/piggame/",
    },
  ];
  return (
    <>
      <div>
        <div className="Project_section " id="project">
          <Section title={"Projects"} subtitle={"Most recent Work"} />

          <div className="carousel_container">
            <Carousel
              className="carousel"
              speed={1000}
              interval={3000}
              pauseOnHover={true}
              controls={true}
              indicators={true}
              fade={false}
            >
             
              {Carousel_data.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    src={item.img}
                    alt=""
                    className="portfolio_img d-block w-100"
                  />
                  <Carousel.Caption>
                    <div className="project_data">
                      <h1 className="porject_title">{item.title}</h1>
                      <p className="project_description">{item.description}</p>
                      <button>
                        <a
                          href={item.link}
                          className="button button--flex button--small project__button"
                        >
                          Demo
                          <AiOutlineArrowRight />
                        </a>
                      </button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
