import { useEffect } from "react";

export const useWindowSize = () => {
  useEffect(() => {
    const handleSize = () => {
      document.body.style.height = `${window.innerHeight}px`;
    };
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
};
