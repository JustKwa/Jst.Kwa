import { useEffect } from "preact/hooks";

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

export default ScrollToTop;
