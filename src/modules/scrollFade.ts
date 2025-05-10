export default function initScrollFades() {
  const fades = Array.from(
    document.querySelectorAll<HTMLElement>("[data-fade]"),
  );
  const delta = 1 / 60;

  fades.forEach((el) => {
    el.style.opacity = "0";
    el.style.transition = "opacity 0.3s ease-in";
  });

  function onScroll() {
    const y = window.scrollY;
    fades.forEach((el) => {
      const scrollY = Math.max(0, Math.min(1, y * delta));
      console.log(scrollY);
      el.style.opacity = scrollY.toString();
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
initScrollFades();
