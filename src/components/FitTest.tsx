import { useId, useState } from 'react';

const FLOOR = 352;
const PX = 62; // px per meter
const MACHINE_H = 2.3;
const TYPICAL = 3.3;
const PRESETS = [2.2, 2.4, 2.7, 3.2];

const fmt = (n: number) => n.toFixed(2).replace('.', ',');

export default function FitTest() {
  const [h, setH] = useState(2.4);
  const id = useId();
  const ceilingY = FLOOR - h * PX;
  const machineTop = FLOOR - MACHINE_H * PX;
  const fits = h >= MACHINE_H;
  const marginCm = Math.round((h - MACHINE_H) * 100);
  const shortCm = Math.round((MACHINE_H - h) * 100);

  const note = fits
    ? `Машина проходит под перекрытием с запасом ${marginCm} см.`
    : `Не проходит: не хватает ${shortCm} см.`;

  return (
    <div className="cols fit">
      <div className="fit__stage">
        <svg className="fit__svg" viewBox="0 0 620 430" role="img" aria-labelledby={`${id}-t ${id}-d`}>
          <title id={`${id}-t`}>Разрез паркинга: машина высотой 2,3 м под перекрытием {fmt(h)} м</title>
          <desc id={`${id}-d`}>{note}</desc>

          {/* axis */}
          <line x1="46" y1="86" x2="46" y2={FLOOR} stroke="#4a4d44" strokeWidth="1" />
          {Array.from({ length: 9 }).map((_, i) => {
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
          <text x="32" y="74" textAnchor="end" fontFamily="var(--f-mono)" fontSize="8" letterSpacing="1.2" fill="#6f7268">М</text>

          {/* typical machine ghost */}
          <rect x="196" y={FLOOR - TYPICAL * PX} width="330" height={TYPICAL * PX} fill="none" stroke="#6f7268" strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
          <text x="530" y={FLOOR - TYPICAL * PX - 6} fontFamily="var(--f-mono)" fontSize="8" letterSpacing="1" fill="#9c9a8e">ТИПОВАЯ ≈3,3 М</text>

          {/* ceiling */}
          <line x1="46" y1={ceilingY} x2="600" y2={ceilingY} stroke="#ede7dc" strokeWidth="2" />
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1={56 + i * 28} y1={ceilingY} x2={48 + i * 28} y2={ceilingY - 9} stroke="#8a8d80" strokeWidth="1" opacity="0.8" />
          ))}
          <text x="600" y={ceilingY - 14} textAnchor="end" fontFamily="var(--f-mono)" fontSize="9.5" letterSpacing="1.4" fill="#ede7dc">
            ПЕРЕКРЫТИЕ {fmt(h)} М
          </text>

          {/* machine */}
          <g transform={`translate(190,${machineTop})`}>
            <path
              d="M0 131 L0 30 Q0 22 9 22 L96 22 L96 131 Z"
              fill={fits ? '#b9b0a0' : '#8a5a48'}
              stroke={fits ? '#ede7dc' : '#c9471d'}
              strokeWidth="1.6"
            />
            <path
              d="M104 131 L104 12 Q104 6 112 6 L246 6 Q294 6 294 40 L294 131 Z"
              fill={fits ? '#b9b0a0' : '#8a5a48'}
              stroke={fits ? '#ede7dc' : '#c9471d'}
              strokeWidth="1.6"
            />
            <rect x="110" y="0" width="52" height="7" fill={fits ? '#b9b0a0' : '#8a5a48'} stroke={fits ? '#ede7dc' : '#c9471d'} strokeWidth="1.4" />
            <circle cx="55" cy="131" r="12" fill="#2a2c26" stroke={fits ? '#ede7dc' : '#c9471d'} strokeWidth="1.4" />
            <circle cx="225" cy="131" r="12" fill="#2a2c26" stroke={fits ? '#ede7dc' : '#c9471d'} strokeWidth="1.4" />
            <circle cx="264" cy="66" r="19" fill="none" stroke={fits ? '#ede7dc' : '#c9471d'} strokeWidth="1.2" opacity="0.8" />
          </g>
          <text x="190" y={machineTop - 10} fontFamily="var(--f-mono)" fontSize="9" letterSpacing="1.3" fill={fits ? '#ede7dc' : '#c9471d'}>
            2,30 М
          </text>

          {/* floor */}
          <line x1="46" y1={FLOOR} x2="600" y2={FLOOR} stroke="#ede7dc" strokeWidth="2" />
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1={56 + i * 28} y1={FLOOR} x2={48 + i * 28} y2={FLOOR + 9} stroke="#8a8d80" strokeWidth="1" opacity="0.8" />
          ))}
        </svg>
      </div>

      <div className="fit__ctrl">
        <div className="field">
          <label htmlFor={`${id}-range`}>Высота вашего перекрытия, м</label>
          <div className="fit__num">
            {fmt(h)} <small className="mono muted">м</small>
          </div>
          <input
            id={`${id}-range`}
            className="rng"
            type="range"
            min={1.9}
            max={4.2}
            step={0.05}
            value={h}
            onChange={(e) => setH(Number(e.target.value))}
            aria-describedby={`${id}-verdict`}
          />
        </div>

        <div className="fit__verdict" id={`${id}-verdict`} aria-live="polite">
          <strong style={{ color: fits ? '#ede7dc' : '#c9471d' }}>{fits ? 'Проходит' : 'Не проходит'}</strong>
          <span className="mono muted">{fits ? `запас ${marginCm} см` : `минус ${shortCm} см`}</span>
        </div>

        <div className="fit__readout mono">
          <div>
            <span>Габарит машины</span>
            <b>2,30 м</b>
          </div>
          <div>
            <span>Типовая машина</span>
            <b>≈3,30 м</b>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setH(p)}
              className="mono"
              style={{
                background: 'transparent',
                color: h === p ? '#ede7dc' : '#b9b5a8',
                border: `1px solid ${h === p ? '#c9471d' : '#4a4d44'}`,
                padding: '8px 10px',
                letterSpacing: '.1em',
              }}
            >
              {fmt(p)} м
            </button>
          ))}
        </div>

        <p className="body-s" style={{ margin: 0 }}>
          {fits
            ? 'Скажите высоту перекрытия при заявке — этого достаточно, чтобы понять, заедет ли машина. Пандус, радиус поворота и отметку слива уточним по схеме паркинга.'
            : 'Если перекрытие ниже 2,3 м, машина не заходит. Мы скажем это сразу, а не после выезда: под перекрытием 2,2 м работают другими инструментами, и обещать «как-нибудь заедем» нечестно.'}
        </p>
      </div>
    </div>
  );
}
