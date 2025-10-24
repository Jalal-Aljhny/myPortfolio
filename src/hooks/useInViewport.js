import { useEffect } from "react";

const useInViewport = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("portfolio__item__show");
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
};

export default useInViewport;
