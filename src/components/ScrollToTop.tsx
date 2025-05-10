import { useEffect } from 'preact/hooks';
import initScrollFades from '@/modules/scrollFade.ts';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    initScrollFades();
  }, []);
  return null;
};

export default ScrollToTop;
