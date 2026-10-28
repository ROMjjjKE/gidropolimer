import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="cols ftr__grid">
          <div className="ftr__col">
            <span className="ftr__name">ООО «Гидрополимер»</span>
            <span className="mono mono-lc">гидродинамическая прочистка труб и ливневых систем</span>
          </div>
          <div className="ftr__col">
            <span className="mono">Связь</span>
            <a href="tel:+375447427447">+375 44 742-74-47</a>
            <a href="https://wa.me/375447427447" target="_blank" rel="noopener">WhatsApp</a>
          </div>
          <div className="ftr__col">
            <span className="mono">Разделы</span>
            <Link to="/parking">Паркинги и перекрытия</Link>
            <Link to="/livnevka">Ливнёвка и КНС</Link>
            <Link to="/truby">Трубопроводы</Link>
          </div>
          <div className="ftr__col">
            <span className="mono">География</span>
            <span>Минск</span>
            <span>Минский район</span>
            <span>Минская область</span>
          </div>
        </div>
        <div className="ftr__bottom">
          <span>© {new Date().getFullYear()} ООО «Гидрополимер»</span>
          <span>Схемы на сайте — принципиальные, не рабочие чертежи</span>
        </div>
      </div>
    </footer>
  );
}
