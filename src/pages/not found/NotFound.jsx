import styles from "./NotFound.module.css";
import notFoundImg from "../../assets/images/not-found.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.not_found}>
      <div>
        <div className={styles.not_found_items}>
          <img src={notFoundImg} alt="Not Found" />
          <h1>Page Not Found</h1>
          <button
            className={styles.btn}
            onClick={() => {
              navigate("/");
            }}
          >
            go home
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
