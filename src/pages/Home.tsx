import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import MachineDrawing from '../components/MachineDrawing';
import FitTest from '../components/FitTest';
import LeadForm from '../components/LeadForm';
import { useReveal } from '../components/useReveal';

const JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ООО «Гидрополимер»',
  description:
    'Гидродинамическая прочистка ливневой канализации, трубопроводов и паркингов комбинированной каналопромывочной машиной высотой 2,3 м.',
  telephone: '+375447427447',
  url: 'https://romjjjke.github.io/gidropolimer/',
  areaServed: ['Минск', 'Минский район', 'Минская область'],
  address: { '@type': 'PostalAddress', addressCountry: 'BY', addressLocality: 'Минск' },
  knowsAbout: ['гидродинамическая прочистка канализации', 'промывка ливневой канализации', 'прочистка трубопроводов'],
};

export default function Home() {
  useReveal('home');
  return (
    <>
      <SEO
        title="Гидрополимер — прочистка под перекрытием 2,3 м, Минск"
        description="Гидродинамическая прочистка ливнёвки в закрытых паркингах, узких дворах и трубопроводов. Комбинированная машина высотой 2,3 м: промывка и откачка за один проезд. Минск и область, +375 44 742-74-47."
        path="/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="cols hero__grid">
            <div className="hero__left">
              <span className="plate mono">ООО «Гидрополимер» · Минск и область</span>
              <h1>
                Прочистка под перекрытием <em>2,3&nbsp;м</em>
              </h1>
              <p className="lead">
                Комбинированная каналопромывочная машина высотой 2,3 метра. Ливнёвка в закрытых паркингах,
                работа в узких дворах, трубопроводы с илом, песком и отложениями. Промывка и откачка — за один
                проезд.
              </p>
              <div className="hero__actions">
                <a className="btn" href="#zayavka">Заявка по параметрам объекта</a>
                <a className="tel-link" href="tel:+375447427447">+375 44 742-74-47</a>
              </div>
              <div className="hero__specs">
                <div>
                  <span className="mono">Габарит по высоте</span>
                  <b>2,30 м</b>
                </div>
                <div>
                  <span className="mono">Промывка + откачка</span>
                  <b>одна машина</b>
                </div>
                <div>
                  <span className="mono">Выезд</span>
                  <b>Минск, район, область</b>
                </div>
              </div>
            </div>
            <div className="hero__right reveal">
              <MachineDrawing />
            </div>
          </div>
        </div>
      </section>

      {/* 01 FIT TEST */}
      <section className="section section--ink" id="gabarit">
        <div className="wrap">
          <div className="cols shead">
            <div className="shead__num mono">01 / габарит</div>
            <h2 className="shead__title reveal">Проверьте свой объект до звонка</h2>
            <p className="shead__note body-s reveal">
              Ползунок — высота перекрытия вашего паркинга. Машина либо входит под неё, либо нет: третьего
              варианта у техники нет.
            </p>
          </div>
          <FitTest />
        </div>
      </section>

      {/* 02 OBJECTS */}
      <section className="section">
        <div className="wrap">
          <div className="cols shead">
            <div className="shead__num mono">02 / объекты</div>
            <h2 className="shead__title reveal">Три ситуации, где решает не мощность, а габарит</h2>
            <p className="shead__note body-s reveal">
              Мы не пишем «засор любой сложности». Пишем, что физически проходит, а что нет.
            </p>
          </div>

          <div className="objs">
            <article className="obj reveal">
              <div className="obj__num mono">01</div>
              <div className="obj__name">
                <h3>Закрытый паркинг</h3>
              </div>
              <div className="obj__body">
                <p className="body-s">
                  Перекрытие 2,3–2,6 м, трапы вдоль проездов, пандус с поворотом. Машина заходит на минус
                  первый и минус второй уровень, работает от одного трапа и не блокирует выезд.
                </p>
                <ul className="spec-list">
                  <li><span className="k">Габарит</span><span>2,30 м по высоте</span></li>
                  <li><span className="k">Доступ</span><span>один трап или люк на участок</span></li>
                  <li><span className="k">Слив шлама</span><span>в цистерну, без сброса во двор</span></li>
                </ul>
              </div>
              <div className="obj__go mono">
                <Link to="/parking">Разбор →</Link>
              </div>
            </article>

            <article className="obj reveal">
              <div className="obj__num mono">02</div>
              <div className="obj__name">
                <h3>Ливнёвка и КНС</h3>
              </div>
              <div className="obj__body">
                <p className="body-s">
                  Песок и ил в лотках после ливней и талого стока, забитые дождеприёмники и пескоуловители.
                  Промываем участок от колодца к колодцу на проезжей части и во дворах.
                </p>
                <ul className="spec-list">
                  <li><span className="k">Что уходит</span><span>песок, ил, листва, строительный смыв</span></li>
                  <li><span className="k">Точки</span><span>колодцы, трапы, дождеприёмники</span></li>
                  <li><span className="k">Сезон</span><span>после ливней и схода талых вод</span></li>
                </ul>
              </div>
              <div className="obj__go mono">
                <Link to="/livnevka">Разбор →</Link>
              </div>
            </article>

            <article className="obj reveal">
              <div className="obj__num mono">03</div>
              <div className="obj__name">
                <h3>Трубопроводы</h3>
              </div>
              <div className="obj__body">
                <p className="body-s">
                  Жир, цементное молоко, окалина, корни. Струя снимает отложения по периметру трубы, а не
                  пробивает пробку тросом, оставляя налёт на стенках.
                </p>
                <ul className="spec-list">
                  <li><span className="k">Метод</span><span>гидродинамика, промывка под давлением</span></li>
                  <li><span className="k">Диаметр</span><span>уточняем по вашей трубе перед выездом</span></li>
                  <li><span className="k">Итог</span><span>проходное сечение, а не дырка в засоре</span></li>
                </ul>
              </div>
              <div className="obj__go mono">
                <Link to="/truby">Разбор →</Link>
              </div>
            </article>
          </div>

          <div className="cols" style={{ marginTop: 'clamp(28px,3.5vw,48px)' }}>
            <div className="two-col__a reveal">
              <span className="mono muted">Дворы и благоустройство</span>
              <p className="lead" style={{ margin: 0 }}>
                Не нужно перекрывать полдвора и искать площадку под крупногабаритную технику.
              </p>
            </div>
            <div className="two-col__b reveal">
              <ul className="spec-list">
                <li><span className="k">Точка работы</span><span>один колодец вместо площадки под технику</span></li>
                <li><span className="k">Покрытие</span><span>не заезжаем на плитку и газон</span></li>
                <li><span className="k">Проезд</span><span>остаётся свободным для жильцов</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 03 METHOD */}
      <section className="section section--ink">
        <div className="wrap">
          <div className="cols shead">
            <div className="shead__num mono">03 / метод</div>
            <h2 className="shead__title reveal">Что выносит струя</h2>
            <p className="shead__note body-s reveal">
              Гидродинамика не пробивает пробку. Она снимает отложения по всему периметру трубы и гонит их к
              колодцу.
            </p>
          </div>

          <div className="cols method">
            <figure className="method__img reveal" style={{ margin: 0 }}>
              <img
                src="/gidropolimer/img/jet-1024.webp"
                srcSet="/gidropolimer/img/jet-720.webp 720w, /gidropolimer/img/jet-1024.webp 1024w"
                sizes="(max-width: 900px) 92vw, 38vw"
                alt="Струя воды под давлением внутри бетонной трубы"
                width="1024"
                height="1024"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mono">Иллюстрация: струя в трубе, не фото объекта</figcaption>
            </figure>

            <div className="method__list">
              <div className="mrow reveal">
                <span className="mrow__i mono">01</span>
                <div>
                  <h4>Песок и ил</h4>
                  <p>
                    Песчаные пробки в лотках ливнёвки после ливней и талого стока. Струя разбивает слежавшийся
                    песок и гонит его к колодцу, откуда шлам забирают в цистерну.
                  </p>
                </div>
              </div>
              <div className="mrow reveal">
                <span className="mrow__i mono">02</span>
                <div>
                  <h4>Жир и налёт</h4>
                  <p>
                    Стоки автомоек, кафе, пищевых производств. Плёнка на стенках сужает сечение: промывка
                    снимает её по кругу, а не оставляет островками вдоль трубы.
                  </p>
                </div>
              </div>
              <div className="mrow reveal">
                <span className="mrow__i mono">03</span>
                <div>
                  <h4>Цементное молоко и окалина</h4>
                  <p>
                    То, что после ремонта застывает камнем и не берётся тросом. Здесь важна не тяга, а давление
                    на стенку трубы.
                  </p>
                </div>
              </div>
              <div className="mrow reveal">
                <span className="mrow__i mono">04</span>
                <div>
                  <h4>Корни и включения</h4>
                  <p>
                    Тряпки, средства гигиены, корни из стыков. Струя выталкивает их к ближнему колодцу, а не
                    забивает глубже по сети.
                  </p>
                </div>
              </div>
              <div className="mrow reveal">
                <span className="mrow__i mono">05</span>
                <div>
                  <h4>Откачка в том же проезде</h4>
                  <p>
                    Комбинированная техника: размытый ил сразу забирается в цистерну. Грязь не уходит дальше по
                    сети и не остаётся лежать во дворе.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 PROTOCOL */}
      <section className="section">
        <div className="wrap">
          <div className="cols shead">
            <div className="shead__num mono">04 / протокол</div>
            <h2 className="shead__title reveal">Как проходит выезд</h2>
            <p className="shead__note body-s reveal">
              Порядок один для паркинга, двора и производства. Меняются параметры и доступ, а не этапы.
            </p>
          </div>
          <ol className="steps">
            <li className="reveal">
              <h4>Заявка с параметрами</h4>
              <p>
                Высота перекрытия, диаметр и материал трубы, метраж участка, точки доступа. Без этих цифр любая
                смета по телефону — гадание.
              </p>
            </li>
            <li className="reveal">
              <h4>Смета до выезда</h4>
              <p>
                Считаем по вашим цифрам. Если объект не наш по габариту или диаметру, говорим сразу, а не
                тратим ваш день на выезд бригады.
              </p>
            </li>
            <li className="reveal">
              <h4>Согласование доступа</h4>
              <p>
                Кто открывает паркинг, откуда берём воду, куда сливаем шлам, нужно ли согласование с
                управляющей компанией.
              </p>
            </li>
            <li className="reveal">
              <h4>Промывка и откачка</h4>
              <p>
                Идём по участку от колодца к колодцу. Шлам забираем в цистерну в том же проезде, без сброса на
                газон и асфальт.
              </p>
            </li>
            <li className="reveal">
              <h4>Приёмка</h4>
              <p>
                Показываем, что вышло из трубы, и проверяем проход по участку. Организациям — закрывающие
                документы.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* 05 REQUEST */}
      <section className="section" id="zayavka">
        <div className="wrap">
          <div className="cols shead">
            <div className="shead__num mono">05 / заявка</div>
            <h2 className="shead__title reveal">Четыре цифры вместо «менеджер свяжется»</h2>
            <p className="shead__note body-s reveal">
              Заполните параметры объекта — с ними отвечаем сметой в WhatsApp в рабочее время.
            </p>
          </div>

          <div className="cols form-grid">
            <div className="form-grid__left">
              <p className="lead reveal" style={{ margin: 0 }}>
                Позвонить быстрее, если объект аварийный.
              </p>
              <a className="tel-link" href="tel:+375447427447">+375 44 742-74-47</a>
              <a className="btn btn--ghost" href="https://wa.me/375447427447" target="_blank" rel="noopener">
                Написать в WhatsApp
              </a>
              <div className="callout">
                <span className="mono muted">Чего мы не обещаем</span>
                <p className="body-s" style={{ margin: 0 }}>
                  Толщину отложений и состояние трубы видно только на объекте. Поэтому мы не называем «точную
                  цену за 30 секунд» и не гарантируем результат по фотографии.
                </p>
              </div>
              <div className="callout">
                <span className="mono muted">Организациям</span>
                <p className="body-s" style={{ margin: 0 }}>
                  ООО «Гидрополимер» работает по договору: заявка, смета, акт. Для паркингов, УК, ТЦ и
                  производств.
                </p>
              </div>
            </div>
            <div className="form-grid__right reveal">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
