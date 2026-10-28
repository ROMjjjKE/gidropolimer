import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'gabarit', label: 'Габарит' },
  { id: 'objekty', label: 'Объекты' },
  { id: 'metod', label: 'Метод' },
  { id: 'protokol', label: 'Выезд' },
  { id: 'zayavka', label: 'Заявка' },
];

/** Липкий указатель разделов: показывает, где человек находится в документе. */
export default function SectionNav() {
  const [active, setActive] = useState('gabarit');

  useEffect(() => {
    const nodes = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-46% 0px -46% 0px', threshold: [0, 0.2, 0.6] }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="secnav" aria-label="Разделы страницы">
      <div className="wrap secnav__in">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`secnav__link mono${active === s.id ? ' is-active' : ''}`}
            aria-current={active === s.id ? 'true' : undefined}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
