import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useReveal(key: string) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = gsap.utils.toArray<HTMLElement>('.reveal');
    if (reduced) {
      nodes.forEach((n) => { n.style.opacity = '1'; });
      return;
    }
    const ctx = gsap.context(() => {
      nodes.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            delay: (i % 4) * 0.04,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          }
        );
      });
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [key]);
}
