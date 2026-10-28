import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import { useReveal } from '../components/useReveal';

export default function Parking() {
  useReveal('parking');
  return (
    <>
      <SEO
        title="Прочистка ливнёвки в закрытом паркинге — Гидрополимер, Минск"
        description="Промывка трапов и лотков ливневой канализации в подземных паркингах при перекрытии от 2,3 м. Работа от одного трапа, шлам в цистерну, без сброса во двор."
        path="/parking"
      />

      <section className="pagehead">
        <div className="wrap">
          <nav className="crumbs mono" aria-label="Хлебные крошки">
            <Link to="/">Главная</Link>
            <span>/</span>
            <span>Паркинги</span>
          </nav>
          <div className="cols ph-grid">
            <div className="ph-t">
              <span className="plate mono">Раздел 01 · закрытые паркинги</span>
              <h1>Ливнёвка в паркинге при перекрытии от 2,3 м</h1>
              <p className="lead">
                Подземный уровень — первое место, где обычная каналопромывочная техника разворачивается и
                уезжает. Наша машина проходит по высоте 2,3 м, работает от одного трапа и не перекрывает
                проезд на весь день.
              </p>
            </div>
            <div className="ph-s">
              <ul className="spec-list">
                <li><span className="k">Уровни</span><span>минус первый и минус второй</span></li>
                <li><span className="k">Доступ</span><span>трап, лоток или люк на участке</span></li>
                <li><span className="k">Слив</span><span>шлам в цистерну, не в дренаж</span></li>
              </ul>
              <a className="btn" href="#zayavka">Проверить свой паркинг</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cols two-col">
            <div className="two-col__a">
              <span className="mono muted">Что происходит в трапах</span>
              <h2 className="reveal">Песок с пандуса никуда не девается</h2>
              <p className="body-s">
                Трапы ливнёвки в паркинге стоят вдоль проездов и принимают всё, что приносит с пандуса: песок,
                грязь с колёс, противогололёдную смесь, смыв с мойки. Лоток сужается постепенно, поэтому
                проблему замечают уже по луже у стены.
              </p>
              <p className="body-s">
                Тросом такой песок не вытащить: он не пробка, а слой по всей длине. Гидродинамика разбивает
                слой и выносит его к колодцу, откуда шлам забирается в цистерну.
              </p>
            </div>
            <div className="two-col__b">
              <ul className="spec-list">
                <li><span className="k">Тип сети</span><span>лотки, трапы, дождеприёмники в полу</span></li>
                <li><span className="k">Загрязнение</span><span>песок, ил, смыв с покрытия</span></li>
                <li><span className="k">Признак</span><span>вода стоит у трапа, уходит медленно</span></li>
                <li><span className="k">Ошибка</span><span>пробить пробку и оставить налёт на стенках</span></li>
              </ul>
              <div className="callout">
                <span className="mono muted">Согласование</span>
                <p className="body-s" style={{ margin: 0 }}>
                  Для работы нужен доступ на уровень: кто открывает ворота, где можно оставить машину, во сколько
                  приезжать. Обычно это решается одним звонком управляющей компании.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap">
          <div className="cols shead">
            <div className="shead__num mono">допуски</div>
            <h2 className="shead__title reveal">Что проверяем до выезда</h2>
            <p className="shead__note body-s reveal">
              Четыре вопроса, после которых становится ясно, заедем мы или нет. Задаём их до того, как вы
              освободите проезд.
            </p>
          </div>
          <div className="cols two-col">
            <div className="two-col__a">
              <div className="mrow reveal">
                <span className="mrow__i mono">01</span>
                <div>
                  <h3>Высота перекрытия</h3>
                  <p>2,3 м и выше — машина входит. Ниже 2,3 м — не входит, и мы говорим это сразу.</p>
                </div>
              </div>
              <div className="mrow reveal">
                <span className="mrow__i mono">02</span>
                <div>
                  <h3>Пандус и ворота</h3>
                  <p>Уклон, поворот, высота проёма ворот. Смотрим по схеме паркинга или по фото проезда.</p>
                </div>
              </div>
            </div>
            <div className="two-col__b">
              <div className="mrow reveal">
                <span className="mrow__i mono">03</span>
                <div>
                  <h3>Точки доступа</h3>
                  <p>Где трапы и люки, сколько метров между ними. От этого зависит, сколько участков пройдём.</p>
                </div>
              </div>
              <div className="mrow reveal">
                <span className="mrow__i mono">04</span>
                <div>
                  <h3>Вода и слив</h3>
                  <p>Откуда берём воду и куда уходит шлам. Шлам — в цистерну, а не в дренаж паркинга.</p>
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
            <h2 className="shead__title reveal">Отвечаем то, что знаем</h2>
          </div>
          <div className="qa reveal">
            <div>
              <h3>Машины в паркинге стоят. Работать можно?</h3>
              <p>
                Да, если участок обслуживается от трапов и не требует проезда вдоль всей линии. Покажите на
                плане, где трапы и где можно встать: от этого зависит, сколько машин придётся сдвинуть, а чаще
                не приходится вообще.
              </p>
            </div>
            <div>
              <h3>Перекрытие 2,2 м. Что делать?</h3>
              <p>
                Наша машина не зайдёт, и мы не будем обещать иначе. Под такое перекрытие идут другие решения —
                скажем об этом на этапе заявки, чтобы вы не искали технику наугад.
              </p>
            </div>
            <div>
              <h3>Работаете зимой?</h3>
              <p>
                В отапливаемом паркинге — по состоянию сети. На открытых площадках и пандусах смотрим
                температуру и лёд: промывка при минусе даёт лужу, которая встанет коркой.
              </p>
            </div>
            <div>
              <h3>Нужен договор?</h3>
              <p>
                Для организации — да: заявка, смета, акт. ООО «Гидрополимер» работает с управляющими
                компаниями, ТЦ и автопарками.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" id="zayavka">
        <div className="wrap">
          <div className="cols form-grid">
            <div className="form-grid__left">
              <h2 className="reveal">Паркинг есть в списке?</h2>
              <p className="body-s" style={{ margin: 0 }}>
                Пришлите высоту перекрытия и количество уровней — ответим, заходим мы туда или нет.
              </p>
              <a className="tel-link" href="tel:+375447427447">+375 44 742-74-47</a>
              <Link className="btn btn--ghost" to="/livnevka">Раздел: ливнёвка и КНС</Link>
            </div>
            <div className="form-grid__right reveal">
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cols shead">
            <div className="shead__num mono">дальше</div>
            <h2 className="shead__title reveal">Другие разделы</h2>
          </div>
          <div className="next-links reveal">
            <Link to="/livnevka">
              <span className="mono muted">Раздел 02</span>
              <b>Ливнёвка и КНС</b>
              <span className="body-s">Песок в лотках, дождеприёмники, пескоуловители</span>
            </Link>
            <Link to="/truby">
              <span className="mono muted">Раздел 03</span>
              <b>Трубопроводы</b>
              <span className="body-s">Жир, цементное молоко, окалина, корни</span>
            </Link>
            <Link to="/">
              <span className="mono muted">Паспорт услуги</span>
              <b>Проверить габарит</b>
              <span className="body-s">Главная: ползунок по высоте перекрытия</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
