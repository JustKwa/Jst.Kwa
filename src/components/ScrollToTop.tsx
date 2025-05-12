import { useEffect, useRef } from 'preact/hooks';

const ScrollToTop = () => {
  const opacityRef = useRef(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document
      .getElementById('introduction')
      ?.classList.add('scaled-intro-initial');
    initScrollFades();
  }, []);

  const initScrollFades = () => {
    const fades = Array.from(
      document.querySelectorAll<HTMLElement>('[data-fade]'),
    );
    const fadesInverse = Array.from(
      document.querySelectorAll<HTMLElement>('[data-fade-inverse]'),
    );
    const intro = document.getElementById('introduction');
    const delta = 1 / 60;

    fades.forEach((el) => {
      el.style.opacity = 'r';
      el.style.transition = 'opacity 0.15s ease-in';
    });
    fadesInverse.forEach((el) => {
      el.style.opacity = 'r';
      el.style.transition = 'opacity 0.1s ease-in';
    });

    function onScroll() {
      const y = window.scrollY;
      const opacity = Math.max(0, Math.min(1, y * delta));
      opacityRef.current = opacity;
      fades.forEach((el) => {
        el.style.opacity = opacity.toString();
      });
      fadesInverse.forEach((el) => {
        el.style.opacity = (1 - opacity * 10).toString();
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
