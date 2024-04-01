import { NavLink } from "react-router-dom";
import { links } from "../assets/data";
import styles from "./NavBar.module.css";
import { useRef, useState } from "react";
import { useAnimation } from "../hooks/useAnimation2";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const refs = useRef([]);
  const animationStyle = useAnimation(refs);
  return (
    <nav className={styles.nav}>
      <div
        className={
          showMenu
            ? `${styles.nav__menu} ${styles.nav__active}`
            : styles.nav__menu
        }
      >
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li
                className={`${styles.nav__item}`}
                key={index}
                ref={(value) => {
                  refs.current[index] = value;
                }}
                style={animationStyle}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) => {
                    return isActive
                      ? `${styles.nav__link} ${styles.active__nav}`
                      : `${styles.nav__link}`;
                  }}
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  {icon}
                  <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={showMenu ? "nav__toggle animate__toggle" : "nav__toggle"}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
