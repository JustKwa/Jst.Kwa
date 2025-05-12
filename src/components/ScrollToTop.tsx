import { useEffect, useRef } from 'preact/hooks';

const ScrollToTop = () => {
  const opacityRef = useRef(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    initScrollFades();
  }, []);

  const initScrollFades = () => {
    const fades = Array.from(
      document.querySelectorAll<HTMLElement>('[data-fade]'),
    );
    const intro = document.getElementById('introduction');
    const delta = 1 / 60;

    fades.forEach((el) => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.3s ease-in';
    });

    function onScroll() {
      const y = window.scrollY;
      const opacity = Math.max(0, Math.min(1, y * delta));
      opacityRef.current = opacity;
      fades.forEach((el) => {
        el.style.opacity = opacity.toString();
      });
      if (opacity <= 0.5) {
        intro?.classList.add('scaled-intro-in');
        intro?.classList.remove('scaled-intro-out');
        return;
      }
      intro?.classList.add('scaled-intro-out');
      intro?.classList.remove('scaled-intro-in');
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  };

  return null;
};

export default ScrollToTop;
