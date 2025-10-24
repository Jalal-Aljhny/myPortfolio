import { FaGithub } from "react-icons/fa";
import { portfolio } from "../../assets/data";
import styles from "./Portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section className="section portfolio">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <ul className={`${styles.potfolio__contaniner} grid`}>
        {portfolio.map(({ id, title, details }) => {
          return <PortfolioItem key={id} title={title} details={details} />;
        })}
      </ul>
      <a
        href="https://github.com/Jalal-Aljhny"
        target="_blank"
        className="btn"
        rel="noreferrer"
      >
        More projects on my github account
        <span className="btn__icon">
          <FaGithub style={{ scale: "1.5" }} />
        </span>
      </a>
    </section>
  );
};

export default Portfolio;
