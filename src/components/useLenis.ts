import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    let destroy: (() => void) | null = null;
    let cancelled = false;

    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.6 });
      const onScroll = () => ScrollTrigger.update();
      lenis.on('scroll', onScroll);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      destroy = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });

    return () => {
      cancelled = true;
      if (destroy) destroy();
    };
  }, []);
}
