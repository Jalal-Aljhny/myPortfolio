import { FaDownload } from "react-icons/fa";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import styles from "./About.module.css";
import Skills from "../../components/Skills";
import { Technologies, resume } from "../../assets/data";
import Resume from "../../components/Resume";
import { useRef } from "react";
import { useAnimation } from "../../hooks/useAnimation";
import { useAnimation as useAnimation1 } from "../../hooks/useAnimation1";
import { useAnimation as useAnimation3 } from "../../hooks/useAnimation3";
import cvLink from "../../assets/jalalaljhnyCV.pdf";

const About = () => {
  const resumeRef = useRef(null);
  const animationStyle = useAnimation(resumeRef);
  const infoRef = useRef(null);
  const statusRef = useRef(null);
  const animationStyle1 = useAnimation1(infoRef);
  const animationStyle2 = useAnimation1(statusRef);
  const technosRef = useRef([]);
  const animationStyle3 = useAnimation3(technosRef);
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className={`${styles.about__content} grid`}>
          <div
            className={`${styles.about_info}`}
            ref={infoRef}
            style={animationStyle1}
          >
            <h3 className="section__subtitle">Personal Info</h3>
            <ul className={`${styles.info__list} grid`}>
              <Info />
            </ul>
            <a
              href={cvLink}
              download={true}
              className="btn"
              rel="noopener noreferrer"
            >
              Download Cv
              <span className="btn__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div
            className={`${styles.stats} grid`}
            ref={statusRef}
            style={animationStyle2}
          >
            <Stats />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className={`${styles.skills}`}>
        <h3 className="section__subtitle">My Skills</h3>
        <div className={`${styles.skills__container} grid`}>
          <Skills />
        </div>
      </section>
      <div className="separator"></div>
      <section className="section">
        <h3 className="section__subtitle">Another Technologies:</h3>
        <ul className="list">
          {Technologies.map(({ title }, index) => {
            return (
              <li
                className="li"
                key={index}
                style={{ ...animationStyle3, transitionDelay: `${index / 4}s` }}
                ref={(value) => {
                  technosRef.current[index] = value;
                }}
              >
                {title}
              </li>
            );
          })}
        </ul>
      </section>
      <div className="separator"></div>
      <div className="resume">
        <h3 className="section__subtitle">Education</h3>
        <div className={`${styles.resume__container} grid`}>
          <div
            className={`${styles.resume__data}`}
            ref={resumeRef}
            style={animationStyle}
          >
            {resume.map((val) => {
              if (val.category === "education") {
                return (
                  <>
                    <Resume key={val.id} {...val} />
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
