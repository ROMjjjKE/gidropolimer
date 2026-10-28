import { Link, useLocation } from 'react-router-dom';

const NAV = [
  { to: '/parking', label: 'Паркинги' },
  { to: '/livnevka', label: 'Ливнёвка' },
  { to: '/truby', label: 'Трубопроводы' },
];

export default function Header() {
  const { pathname } = useLocation();
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
      </div>
    </header>
  );
}
