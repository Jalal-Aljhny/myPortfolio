import { useEffect, useState } from "react";

export const useAnimation = (elementRef) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const rect = elementRef.current.getBoundingClientRect();
      const isVisible =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);
      if (
        window.scrollY >=
          elementRef.current.offsetTop - (window.innerHeight * 3) / 4 &&
        isVisible
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
