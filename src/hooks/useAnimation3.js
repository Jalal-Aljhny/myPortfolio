import { useEffect, useState } from "react";

export const useAnimation = (elementRef) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (
        elementRef.current.length &&
        window.scrollY >=
          elementRef.current[0].offsetTop - (window.innerHeight * 3) / 4
      ) {
        setStyle({
          transform: "scale(1) translate(0)",
          opacity: 1,
        });
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef]);
  return style;
};
