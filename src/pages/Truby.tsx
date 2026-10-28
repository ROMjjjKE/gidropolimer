import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import { useReveal } from '../components/useReveal';

export default function Truby() {
  useReveal('truby');
  return (
    <>
      <SEO
        title="Гидродинамическая прочистка трубопроводов — Гидрополимер, Минск"
        description="Прочистка трубопроводов от засоров, ила, песка и отложений: жир, цементное молоко, окалина, корни. Подбор давления и насадки под диаметр и материал трубы. Минск и область."
        path="/truby"
      />

      <section className="pagehead">
        <div className="wrap">
          <nav className="crumbs mono" aria-label="Хлебные крошки">
            <Link to="/">Главная</Link>
            <span>/</span>
            <span>Трубопроводы</span>
          </nav>
          <div className="cols ph-grid">
            <div className="ph-t">
              <span className="plate mono">Раздел 03 · трубопроводы</span>
              <h1>Труба держит не пробку, а слой на стенках</h1>
              <p className="lead">
                Засор редко появляется за один день. Сначала сечение сужается отложениями, потом хватает одной
                тряпки. Гидродинамика снимает слой по периметру, а не пробивает отверстие в центре.
              </p>
            </div>
            <div className="ph-s">
              <ul className="spec-list">
                <li><span className="k">Материал</span><span>чугун, сталь, ПВХ, бетон</span></li>
                <li><span className="k">Давление</span><span>подбираем под трубу, не «на максимум»</span></li>
                <li><span className="k">Стоки</span><span>бытовые, жировые, производственные</span></li>
              </ul>
              <a className="btn" href="#zayavka">Параметры трубы</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cols shead">
            <div className="shead__num mono">признаки</div>
            <h2 className="shead__title reveal">Что видно по стоку</h2>
            <p className="shead__note body-s reveal">
              По поведению воды можно понять, где проблема и насколько запущено. Это дешевле, чем ждать аварии.
            </p>
          </div>
          <ul className="spec-list spec-list--kv reveal" style={{ marginTop: 'clamp(22px,3vw,36px)' }}>
            <li>
              <span className="k">Уходит медленно, но уходит</span>
              <span>Сечение сужено отложениями. Промывка ещё работает как профилактика.</span>
            </li>
            <li>
              <span className="k">Булькает и возвращается</span>
              <span>Воздух в системе: засор близко и уже плотный. Само не пройдёт.</span>
            </li>
            <li>
              <span className="k">Стоит полностью</span>
              <span>Пробка. Здесь нужна не профилактика, а промывка с разбором участка.</span>
            </li>
            <li>
              <span className="k">Запах в помещении</span>
              <span>Разрыв водяного затвора или подсос воздуха: смотрим не только трубу, но и сифоны.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap">
          <div className="cols two-col">
            <div className="two-col__a">
              <span className="mono muted">давление</span>
              <h2 className="reveal">Почему «на максимум» — плохая идея</h2>
              <p className="body-s">
                Старая чугунная труба и тонкий ПВХ ведут себя по-разному. Избыточное давление на рыхлом стыке
                превращает засор в протечку в перекрытии — и это уже другой ремонт по другой смете.
              </p>
              <p className="body-s">
                Поэтому в заявке мы спрашиваем диаметр, материал и год постройки участка. На объекте подбираем
                насадку и напор под конкретную трубу.
              </p>
            </div>
            <div className="two-col__b">
              <div className="mrow reveal">
                <span className="mrow__i mono">01</span>
                <div>
                  <h4>Промывка по ходу движения стока</h4>
                  <p>Снимаем слой в направлении, куда труба и так несёт воду: шлам уходит к колодцу.</p>
                </div>
              </div>
              <div className="mrow reveal">
                <span className="mrow__i mono">02</span>
                <div>
                  <h4>Шлам в цистерну</h4>
                  <p>Комбинированная техника забирает размытое сразу. Иначе грязь встанет в следующем колодце.</p>
                </div>
              </div>
              <div className="mrow reveal">
                <span className="mrow__i mono">03</span>
                <div>
                  <h4>Проверка прохода</h4>
                  <p>Контрольный сброс воды. Если уходит медленно — причина не в засоре, а в уклоне или стыке.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cols shead">
            <div className="shead__num mono">вопросы</div>
            <h2 className="shead__title reveal">Коротко о главном</h2>
          </div>
          <div className="qa reveal">
            <div>
              <h4>Разрушит ли струя старую трубу?</h4>
              <p>
                Риск есть у любой техники, если давить без разбора. Поэтому напор и насадку подбираем по
                материалу и состоянию участка, а не по принципу «чем сильнее, тем лучше».
              </p>
            </div>
            <div>
              <h4>Можно ли промыть квартиру?</h4>
              <p>
                Внутренние разводки в квартирах мы не обслуживаем: для них нужен сантехник с тросом и доступом к
                стояку. Наш профиль — наружные сети, лотки, паркинги, производства.
              </p>
            </div>
            <div>
              <h4>Что делать, если после промывки снова забивается?</h4>
              <p>
                Значит, причина не в отложениях: просадка трубы, обратный уклон, корни в стыке. Скажем об этом
                честно и не будем продавать вторую промывку как решение.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" id="zayavka">
        <div className="wrap">
          <div className="cols form-grid">
            <div className="form-grid__left">
              <h2 className="reveal">Диаметр, материал, метраж</h2>
              <p className="body-s" style={{ margin: 0 }}>
                Три параметра — и мы говорим, берёмся ли за участок и каким давлением.
              </p>
              <a className="tel-link" href="tel:+375447427447">+375 44 742-74-47</a>
              <Link className="btn btn--ghost" to="/">Паспорт услуги</Link>
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
