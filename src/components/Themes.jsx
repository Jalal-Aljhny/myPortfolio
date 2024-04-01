import { themes } from "../assets/data";
import ThemeItem from "./ThemeItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import styles from "./Theme.module.css";
import { useEffect, useMemo, useState } from "react";
const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);

  const themeColor = useMemo(() => {
    if (localStorage.getItem("color")) {
      return localStorage.getItem("color");
    }
    return "hsl(271, 76%, 53%)";
  }, []);
  const [color, setColor] = useState(themeColor);

  const changeColor = (color) => {
    setColor(color);
    localStorage.setItem("color", color);
  };

  const theme = useMemo(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark-theme";
    }
    return "light-theme";
  }, []);
  const [themeMod, setThemeMod] = useState(theme);

  const changeTheme = () => {
    if (themeMod === "light-theme") {
      setThemeMod("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    } else {
      setThemeMod("light-theme");
      localStorage.setItem("theme", "light-theme");
    }
  };
  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
  }, [color]);
  useEffect(() => {
    document.documentElement.className = themeMod;
  }, [themeMod]);
  return (
    <div className={`${styles.themes}`}>
      <div
        className={`${styles.style__switcher} ${
          showSwitcher ? styles.style__switcher__show : ""
        }`}
      >
        <div
          className={`${styles.toggle}`}
          onClick={() => {
            setShowSwitcher(!showSwitcher);
          }}
        >
          <FaCog />
        </div>
        <div
          className={`${styles.theme__toggle}`}
          onClick={() => {
            changeTheme();
          }}
        >
          {themeMod == "light-theme" ? <BsMoon /> : <BsSun />}
        </div>
        <h3>Style Switcher</h3>
        <ul className={`${styles.style_switcher_items}`}>
          {themes.map(({ id, img, color }) => {
            return (
              <li key={id}>
                <ThemeItem img={img} color={color} changeColor={changeColor} />
              </li>
            );
          })}
        </ul>
        <div
          className={`${styles.close}`}
          onClick={() => {
            setShowSwitcher(!showSwitcher);
          }}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;
