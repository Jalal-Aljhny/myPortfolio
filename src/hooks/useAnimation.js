import { useEffect, useState } from "react";

export const useAnimation = (elementRef) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY >=
        elementRef.current.offsetTop - (window.innerHeight * 3) / 4
      ) {
        setStyle({
          transform: "scale(1) translate(0)",
          opacity: 1,
        });
      } else {
        setStyle({
          transform: "scale(0.5)",
          opacity: 0,
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
