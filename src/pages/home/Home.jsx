import { Link } from "react-router-dom";
// import photo from "../../../../../../Pictures/Personal_photo.png";
import photo from "../../assets/images/portfolio-photo.jpg";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Home.module.css";
import { useRef } from "react";
import { useAnimation } from "../../hooks/useAnimation1";
const Home = () => {
  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const styleAnimation1 = useAnimation(imgRef);
  const styleAnimation2 = useAnimation(contentRef);
  return (
    <section className={`${styles.home} grid section`}>
      <img
        src={photo}
        alt="Personal photo"
        loading="lazy"
        ref={imgRef}
        style={styleAnimation1}
      />
      <div
        className={styles.home__content}
        ref={contentRef}
        style={styleAnimation2}
      >
        <h1>
          <span>I&apos;m Jalal Aljhny. </span>
          <br /> front-end developer
        </h1>
        <p className={styles.info}>
          As a dedicated Informatics Technology student specializing in Software
          Engineering at Tishreen University, I excel in Front End Development
          using JavaScript and React. My passion for staying updated with the
          latest trends and advancements in front-end development ensures that I
          can consistently deliver exceptional results.
        </p>
        <Link to="/about" className="btn">
          More About Me
          <span className="btn__icon">
            <FaArrowRight />
          </span>
        </Link>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
