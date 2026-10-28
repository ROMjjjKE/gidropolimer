import { useEffect } from 'react';

type Gsap = typeof import('gsap').default;

let gsapRef: Gsap | null = null;

/** gsap + ScrollTrigger грузим отдельным чанком после первой отрисовки: они нужны только для анимаций. */
async function loadMotion() {
  const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ]);
  if (!gsapRef) {
    gsap.registerPlugin(ScrollTrigger);
    gsapRef = gsap;
  }
  return { gsap, ScrollTrigger };
}

export function useReveal(key: string) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (reduced) {
      nodes.forEach((n) => { n.style.opacity = '1'; });
      return;
    }

    let cancelled = false;
    let revert: (() => void) | null = null;

    loadMotion().then(({ gsap, ScrollTrigger }) => {
      if (cancelled) return;
      const ctx = gsap.context(() => {
        nodes.forEach((el, i) => {
          gsap.fromTo(
            el,
            { y: 22, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.48,
              delay: (i % 4) * 0.05,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 92%', once: true },
            }
          );
        });
      });
      ScrollTrigger.refresh();
      revert = () => ctx.revert();
    });

    return () => {
      cancelled = true;
      if (revert) revert();
    };
  }, [key]);
}
