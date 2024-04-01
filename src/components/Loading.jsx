import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={styles.parent}>
      <div className={`${styles.div}`}></div>
      <div className={`${styles.div} ${styles.two}`}></div>
      <div className={`${styles.div} ${styles.three}`}></div>
    </div>
  );
};

export default Loading;
