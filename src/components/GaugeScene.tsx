import { useEffect, useRef, useState } from 'react';

const FLOOR = 352;
const PX = 62; // пикселей на метр
const MACHINE_H = 2.3;
const TYPICAL = 3.3;
const SCENE_FROM = 3.6;
const SCENE_TO = 2.6;
const SMOOTH = 'power2.out';

const fmt = (n: number) => n.toFixed(2).replace('.', ',');

type Props = {
  h: number;
  enter?: number;
  compact?: boolean;
};

/** Разрез: перекрытие, машина 2,3 м, теневая типовая 3,3 м, зона запаса. */
function GaugeSVG({ h, enter = 1 }: Props) {
  const ceilingY = FLOOR - h * PX;
  const machineTop = FLOOR - MACHINE_H * PX;
  const typicalTop = FLOOR - TYPICAL * PX;
  const fits = h >= MACHINE_H;
  const margin = Math.round((h - MACHINE_H) * 100);
  const missing = Math.round((MACHINE_H - h) * 100);
  const typicalFits = h >= TYPICAL;
  const shift = -340 * (1 - enter);

  return (
    <svg className="gauge__svg" viewBox="0 0 620 430" role="img" aria-labelledby="gauge-title gauge-desc">
      <title id="gauge-title">Разрез паркинга: перекрытие {fmt(h)} метра, машина 2,3 метра</title>
      <desc id="gauge-desc">
        {fits
          ? `Машина проходит под перекрытием, запас ${margin} сантиметров.`
          : `Машина не проходит: не хватает ${missing} сантиметров.`}
      </desc>

      {/* ось высот */}
      <line x1="46" y1="104" x2="46" y2={FLOOR} stroke="#4a4d44" strokeWidth="1" />
      {Array.from({ length: 8 }).map((_, i) => {
        const m = i * 0.5;
        const y = FLOOR - m * PX;
        const major = i % 2 === 0;
        return (
          <g key={i}>
            <line x1={major ? 38 : 42} y1={y} x2="52" y2={y} stroke="#4a4d44" strokeWidth="1" />
            {major && (
              <text x="32" y={y + 3.5} textAnchor="end" fontFamily="var(--f-mono)" fontSize="9" fill="#9c9a8e">
                {m.toFixed(1).replace('.', ',')}
              </text>
            )}
          </g>
        );
      })}
      <text x="32" y="93" textAnchor="end" fontFamily="var(--f-mono)" fontSize="8" letterSpacing="1.2" fill="#6f7268">
        М
      </text>

      {/* пол */}
      <line x1="46" y1={FLOOR} x2="604" y2={FLOOR} stroke="#a8ac9e" strokeWidth="1.4" />
      {Array.from({ length: 19 }).map((_, i) => (
        <line key={i} x1={54 + i * 30} y1={FLOOR} x2={46 + i * 30} y2={FLOOR + 11} stroke="#6f7268" strokeWidth="1" opacity="0.7" />
      ))}

      {/* типовая машина 3,3 м: тень, которая перестаёт проходить */}
      <g opacity={typicalFits ? 0.45 : 0.9}>
        <rect
          x="120"
          y={typicalTop}
          width="420"
          height={TYPICAL * PX}
          fill="none"
          stroke={typicalFits ? '#8a8d80' : '#e06a42'}
          strokeWidth="1"
          strokeDasharray="5 6"
        />
        <text
          x="120"
          y={typicalTop - 8}
          fontFamily="var(--f-mono)"
          fontSize="8.5"
          letterSpacing="1.1"
          fill={typicalFits ? '#9c9a8e' : '#e06a42'}
        >
          {typicalFits ? 'ТИПОВАЯ 3,3 М' : 'ТИПОВАЯ 3,3 М · НЕ ПРОХОДИТ'}
        </text>
      </g>

      {/* зона запаса / нехватки */}
      {fits ? (
        <g>
          <rect x="120" y={machineTop} width="420" height={Math.max(0, machineTop - ceilingY)} fill="#e06a42" opacity="0.13" />
          <line x1="556" y1={machineTop} x2="556" y2={ceilingY} stroke="#e06a42" strokeWidth="1.4" />
          <line x1="550" y1={machineTop} x2="562" y2={machineTop} stroke="#e06a42" strokeWidth="1.4" />
          <line x1="550" y1={ceilingY} x2="562" y2={ceilingY} stroke="#e06a42" strokeWidth="1.4" />
          <text x="570" y={(machineTop + ceilingY) / 2 + 3} fontFamily="var(--f-mono)" fontSize="9" fill="#e06a42">
            {margin}
          </text>
        </g>
      ) : (
        <g>
          <rect x="120" y={ceilingY} width="420" height={Math.max(0, machineTop - ceilingY)} fill="#e06a42" opacity="0.3" />
          <text x="120" y={machineTop - 8} fontFamily="var(--f-mono)" fontSize="9" letterSpacing="1.1" fill="#e06a42">
            НЕ ХВАТАЕТ {missing} СМ
          </text>
        </g>
      )}

      {/* машина 2,3 м */}
      <g transform={`translate(${shift} 0)`}>
        <rect x="168" y="330" width="286" height="22" fill="none" stroke="#ede7dc" strokeWidth="1.4" />
        <circle cx="212" cy="352" r="17" fill="none" stroke="#ede7dc" strokeWidth="1.6" />
        <circle cx="212" cy="352" r="6" fill="none" stroke="#ede7dc" strokeWidth="1" opacity="0.6" />
        <circle cx="418" cy="352" r="17" fill="none" stroke="#ede7dc" strokeWidth="1.6" />
        <circle cx="418" cy="352" r="6" fill="none" stroke="#ede7dc" strokeWidth="1" opacity="0.6" />
        <path d="M168 330 L168 236 Q168 226 178 226 L246 226 L246 330 Z" fill="none" stroke="#ede7dc" strokeWidth="1.6" />
        <rect x="180" y="238" width="56" height="30" fill="none" stroke="#ede7dc" strokeWidth="1" opacity="0.8" />
        <path d="M256 330 L256 214 Q256 206 266 206 L400 206 Q436 208 436 250 L436 330 Z" fill="none" stroke="#ede7dc" strokeWidth="1.6" />
        <rect x="276" y="190" width="72" height="16" fill="none" stroke="#ede7dc" strokeWidth="1.3" />
        <line x1="266" y1="206" x2="266" y2="330" stroke="#ede7dc" strokeWidth="0.8" opacity="0.4" />
        <text x="212" y={machineTop - 8} fontFamily="var(--f-mono)" fontSize="9" letterSpacing="1.1" fill="#ede7dc">
          2,30 М
        </text>
      </g>

      {/* перекрытие */}
      <line x1="46" y1={ceilingY} x2="604" y2={ceilingY} stroke="#ede7dc" strokeWidth="2.4" />
      {Array.from({ length: 18 }).map((_, i) => (
        <line
          key={i}
          x1={56 + i * 31}
          y1={ceilingY}
          x2={44 + i * 31}
          y2={ceilingY - 12}
          stroke="#8a8d80"
          strokeWidth="1"
          opacity="0.75"
        />
      ))}
      <text x="604" y={ceilingY - 20} textAnchor="end" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="1.4" fill="#ede7dc">
        ПЕРЕКРЫТИЕ {fmt(h)} М
      </text>
    </svg>
  );
}

export function GaugeScene() {
  const [h, setH] = useState(SCENE_FROM);
  const [enter, setEnter] = useState(1);
  const [mode, setMode] = useState<'manual' | 'pin'>('manual');
  const stageRef = useRef<HTMLDivElement>(null);

  // Пин-сцена: скролл опускает перекрытие. На мобильных и при reduced-motion остаётся ползунок.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1100px)');
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    const tall = window.innerHeight >= 720;
    if (!desktop.matches || calm.matches || !tall) {
      // без пиннинга сцена живёт на ползунке, стартуем с типичного перекрытия
      setH(2.6);
      setEnter(1);
      return;
    }

    let killed = false;
    let cleanup: (() => void) | null = null;

    const begin = () => Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      if (killed || !stageRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      setMode('pin');

      const proxy = { p: 0 };
      const trigger = ScrollTrigger.create({
        trigger: stageRef.current,
        start: 'top top',
        end: '+=170%',
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const p = self.progress;
          proxy.p = p;
          const travel = Math.min(1, p / 0.78);
          setH(Math.round((SCENE_FROM - (SCENE_FROM - SCENE_TO) * travel) * 100) / 100);
          setEnter(Math.min(1, Math.max(0, (p - 0.5) / 0.26)));
        },
      });

      cleanup = () => trigger.kill();
    });

    // Пин-логику поднимаем, только когда раздел подходит к экрану: не мешаем первому экрану.
    let timer: number | undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          timer = window.setTimeout(begin, 60);
        }
      },
      { rootMargin: '320px 0px' }
    );
    if (stageRef.current) io.observe(stageRef.current);

    return () => {
      killed = true;
      io.disconnect();
      if (timer) clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, []);

  const fits = h >= MACHINE_H;
  const margin = Math.round((h - MACHINE_H) * 100);
  const missing = Math.round((MACHINE_H - h) * 100);
  const typicalFits = h >= TYPICAL;

  return (
    <div className={`gauge gauge--${mode}`} ref={stageRef}>
      <div className="wrap">
        <div className="cols gauge__grid">
          <div className="gauge__left">
            <div className="gauge__num-row">
              <span className="mono gauge__label">Перекрытие</span>
              <span className="gauge__num">
                {fmt(h)}
                <span className="gauge__unit">м</span>
              </span>
            </div>

            <p className={`gauge__verdict ${fits ? 'is-ok' : 'is-bad'}`}>
              <span className="mono">{fits ? 'Проходит' : 'Не проходит'}</span>
              <b>{fits ? `запас ${margin} см` : `минус ${missing} см`}</b>
            </p>

            <p className={`gauge__typical ${typicalFits ? '' : 'is-bad'}`}>
              <span className="mono">Типовая 3,3 м</span>
              <b>{typicalFits ? 'проходит' : 'не проходит'}</b>
            </p>

            {mode === 'manual' ? (
              <div className="gauge__control">
                <label className="mono gauge__control-label" htmlFor="ceiling">
                  Высота перекрытия
                </label>
                <input
                  id="ceiling"
                  className="rng"
                  type="range"
                  min={2.2}
                  max={3.6}
                  step={0.05}
                  value={h}
                  onChange={(e) => setH(Number(e.target.value))}
                />
                <div className="gauge__presets">
                  {[2.2, 2.4, 2.7, 3.2].map((p) => (
                    <button
                      key={p}
                      type="button"
                      className={`chip mono${h === p ? ' chip--on' : ''}`}
                      aria-pressed={h === p}
                      onClick={() => setH(p)}
                    >
                      {fmt(p)}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="gauge__hint mono">
                Скролл опускает перекрытие <span aria-hidden="true">↓</span>
              </p>
            )}

            <a className="gauge__cta" href="#zayavka">
              Смета по вашим цифрам
            </a>
          </div>

          <div className="gauge__right">
            <GaugeSVG h={h} enter={enter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GaugeScene;
