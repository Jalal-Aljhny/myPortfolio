import { useRef } from "react";
import styles from "./Portfolio.module.css";
import useInViewport from "../../hooks/useInViewport";
import parse from "html-react-parser";
import PropTypes from "prop-types";
const PortfolioItem = ({ title, id, details }) => {
  const technosRef = useRef();
  useInViewport(technosRef);
  return (
    <>
      <li key={id} ref={technosRef} className={`${styles.portfolio__item}`}>
        <h3>{title}</h3>
        <p>Features :</p>
        <ul className={`${styles.features}`}>
          {details.userStory && parse(details.userStory)}
          {details.features && parse(details.features)}
        </ul>
        <p>Made with : </p>
        <ul className={`${styles.technologies}`}>
          {details.technologies.map((technology) => {
            return <li key={`${technology}-${id}`}>{technology}</li>;
          })}
        </ul>
        <ul className={`${styles.icons}`}>
          {details.icons.map((icon, index) => {
            return <li key={`${index}-${id}`}>{icon}</li>;
          })}
        </ul>
        <div className={`${styles.links}`}>
          <a href={details.viewProject} target="_blank" rel="noreferrer">
            View project
          </a>
          <a href={details.viewCode} target="_blank" rel="noreferrer">
            View code on github
          </a>
        </div>
      </li>
    </>
  );
};

export default PortfolioItem;
PortfolioItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  details: PropTypes.object,
};
