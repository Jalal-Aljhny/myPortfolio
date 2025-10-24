import { FaHeart } from "react-icons/fa";
const Footer = () => {
  const styles = {
    footer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItem: "center",
      paddingBlock: "16px",
      backgroundColor: "var(--container-color)",
      color: "var(--dark-title-color)",
      fontWeight: "var(--font-600)",
      lineHeight: "1.7",
      position: "absolute",
      bottom: "0",
    },
    img: {
      color: "var(--first-color)",
      lineHeight: "1.8",
      scale: "1.4",
      marginInline: "5px",
    },
    span: {
      fontWeight: "var(--font-700)",
      color: "var(--first-color)",
      fontFamily: "var( --secound-font)",
      marginInline: "5px",
    },
  };
  return (
    <footer className="footer" style={styles.footer}>
      Made with
      <div className="img" style={styles.img}>
        <FaHeart />
      </div>
      by
      <span className="span" style={styles.span}>
        Jalal Aljhny
      </span>
      &#9400; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
