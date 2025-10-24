import { useEffect, useState } from "react";

export const useAnimation = (elementRef) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current.length) {
        setStyle({
          transform: "scale(1) translate(0)",
          opacity: 1,
        });
      }
    };
    handleScroll();
  }, [elementRef]);
  return style;
};
