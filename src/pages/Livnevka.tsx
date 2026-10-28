import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import { useReveal } from '../components/useReveal';

const SEASON = [
  { when: 'Март — апрель', what: 'Талый сток несёт песок и противогололёдную смесь в лотки', why: 'самое плотное время: сеть забивается за 2–3 недели' },
  { when: 'Июнь — август', what: 'Ливни смывают грунт с газонов и стройплощадок', why: 'песок встаёт в лотках и у дождеприёмников' },
  { when: 'Октябрь — ноябрь', what: 'Листва и мусор закрывают решётки', why: 'вода уходит медленно, подтапливает проезды' },
];

export default function Livnevka() {
  useReveal('livnevka');
  return (
    <>
      <SEO
        title="Промывка ливневой канализации и КНС — Гидрополимер, Минск"
        description="Гидродинамическая прочистка ливневой канализации: лотки, дождеприёмники, пескоуловители, колодцы, КНС. Промывка от колодца к колодцу с откачкой шлама в цистерну. Минск и область."
        path="/livnevka"
      />

      <section className="pagehead">
        <div className="wrap">
          <nav className="crumbs mono" aria-label="Хлебные крошки">
            <Link to="/">Главная</Link>
            <span>/</span>
            <span>Ливнёвка и КНС</span>
          </nav>
          <div className="cols ph-grid">
            <div className="ph-t">
              <span className="plate mono">Раздел 02 · ливневые сети</span>
              <h1>Ливнёвка: снять песок, а не сдвинуть его</h1>
              <p className="lead">
                Лотки, дождеприёмники, пескоуловители, колодцы и камеры КНС. Идём по участку от колодца к
                колодцу, размытый шлам забираем в цистерну в том же проезде.
              </p>
            </div>
            <div className="ph-s">
              <ul className="spec-list">
                <li><span className="k">Что чистим</span><span>лотки, трапы, дождеприёмники, камеры</span></li>
                <li><span className="k">Метод</span><span>гидродинамика + откачка</span></li>
                <li><span className="k">География</span><span>Минск, район, область</span></li>
              </ul>
              <a className="btn" href="#zayavka">Параметры объекта</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cols shead">
            <div className="shead__num mono">сезон</div>
            <h2 className="shead__title reveal">Когда сеть забивается</h2>
            <p className="shead__note body-s reveal">
              Ливнёвка забивается не ровно, а волнами. Если обслуживать её раз в год, волну вы встречаете
              лужей на проезжей части.
            </p>
          </div>
          <ul className="spec-list spec-list--kv reveal" style={{ marginTop: 'clamp(22px,3vw,36px)' }}>
            {SEASON.map((s) => (
              <li key={s.when}>
                <span className="k" style={{ paddingTop: 2 }}>{s.when}</span>
                <span>
                  {s.what}
                  <br />
                  <span className="muted" style={{ fontSize: 'var(--fs-13)' }}>{s.why}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap">
          <div className="cols shead">
            <div className="shead__num mono">работа</div>
            <h2 className="shead__title reveal">Как проходит промывка участка</h2>
            <p className="shead__note body-s reveal">
              Направление движения воды задаёт колодец, а не удобство техники: иначе песок снова окажется там,
              откуда его достали.
            </p>
          </div>
          <div className="cols two-col" style={{ marginTop: 'clamp(20px,2.6vw,32px)' }}>
            <div className="two-col__a">
              <div className="mrow reveal">
                <span className="mrow__i mono">01</span>
                <div>
                  <h3>Осмотр крайних колодцев</h3>
                  <p>Смотрим уровень и характер осадка: песок, ил, строительный смыв. От этого зависит напор.</p>
                </div>
              </div>
              <div className="mrow reveal">
                <span className="mrow__i mono">02</span>
                <div>
                  <h3>Промывка от нижнего к верхнему</h3>
                  <p>Вода идёт по уклону, шлам сгоняется к точке забора, а не размазывается по трубе.</p>
                </div>
              </div>
            </div>
            <div className="two-col__b">
              <div className="mrow reveal">
                <span className="mrow__i mono">03</span>
                <div>
                  <h3>Откачка шлама</h3>
                  <p>Размытый осадок забираем в цистерну. Ничего не остаётся на асфальте и газоне.</p>
                </div>
              </div>
              <div className="mrow reveal">
                <span className="mrow__i mono">04</span>
                <div>
                  <h3>Проверка прохода</h3>
                  <p>Контрольный проход воды по участку. Если воды нет — промывка не закончена.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cols two-col">
            <div className="two-col__a">
              <span className="mono muted">дворы</span>
              <h2 className="reveal">Работа во дворе без разобранного благоустройства</h2>
              <p className="body-s">
                Крупная техника во дворе — это площадка под неё, объезд припаркованных машин и разговор с
                жильцами. Нам нужна одна точка у колодца: машина стоит, шланг идёт по лотку.
              </p>
              <p className="body-s">
                Плитка и газон остаются целыми, потому что по ним никто не ездит. Это же и есть аргумент для
                управляющей компании: меньше восстановительных работ после нас.
              </p>
            </div>
            <div className="two-col__b">
              <div className="callout">
                <span className="mono muted">КНС и камеры</span>
                <p className="body-s" style={{ margin: 0 }}>
                  Камеры насосных станций чистим от осадка перед ремонтом насоса: сначала убираем песок, потом
                  меняем оборудование. Заявку лучше ставить до аварии, а не после.
                </p>
              </div>
              <ul className="spec-list">
                <li><span className="k">Единица работы</span><span>участок между колодцами</span></li>
                <li><span className="k">Что нужно</span><span>доступ к люкам и вода на объекте</span></li>
                <li><span className="k">Результат</span><span>проход воды по участку</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" id="zayavka">
        <div className="wrap">
          <div className="cols form-grid">
            <div className="form-grid__left">
              <h2 className="reveal">Сколько метров и где люки?</h2>
              <p className="body-s" style={{ margin: 0 }}>
                Метраж между колодцами и диаметр трубы — этого достаточно, чтобы посчитать участок.
              </p>
              <a className="tel-link" href="tel:+375447427447">+375 44 742-74-47</a>
              <Link className="btn btn--ghost" to="/parking">Раздел: паркинги</Link>
            </div>
            <div className="form-grid__right reveal">
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
