import { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;