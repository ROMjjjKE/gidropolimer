import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV = [
  { to: '/parking', label: 'Паркинги' },
  { to: '/livnevka', label: 'Ливнёвка' },
  { to: '/truby', label: 'Трубопроводы' },
];

export default function Header() {
  const { pathname } = useLocation();
  const barRef = useRef<HTMLSpanElement>(null);

  // Тонкая линия прогресса: показывает, сколько документа осталось.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return (
    <header className="hdr">
      <div className="wrap hdr__in">
        <Link to="/" className="hdr__brand" aria-label="ООО Гидрополимер, на главную">
          <span className="hdr__name">Гидрополимер</span>
          <span className="hdr__sub mono">прочистка · Минск</span>
        </Link>
        <nav className="hdr__nav" aria-label="Разделы">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} aria-current={pathname === n.to ? 'page' : undefined}>
              {n.label}
            </Link>
          ))}
          <a href="#zayavka">Заявка</a>
        </nav>
        <a className="hdr__tel" href="tel:+375447427447">+375 44 742-74-47</a>
        <span className="hdr__progress" ref={barRef} aria-hidden="true" />
      </div>
    </header>
  );
}
