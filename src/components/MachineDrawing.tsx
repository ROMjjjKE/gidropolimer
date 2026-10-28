export default function MachineDrawing() {
  const ink = 'var(--ink)';
  const fill = '#ded5c4';
  return (
    <div className="draw">
      <svg viewBox="0 0 720 470" role="img" aria-labelledby="dwg-title dwg-desc">
        <title id="dwg-title">Схема комбинированной каналопромывочной машины, вид сбоку</title>
        <desc id="dwg-desc">Принципиальная схема машины: кабина, цистерна, шланговый барабан. Высота по габариту 2,30 метра.</desc>

        {/* guide lines */}
        <line x1="40" y1="170" x2="704" y2="170" stroke={ink} strokeWidth="1" strokeDasharray="6 5" opacity="0.35" />
        <line x1="40" y1="400" x2="704" y2="400" stroke={ink} strokeWidth="1.6" />
        {Array.from({ length: 22 }).map((_, i) => (
          <line key={i} x1={48 + i * 31} y1="400" x2={40 + i * 31} y2="412" stroke={ink} strokeWidth="1" opacity="0.45" />
        ))}

        {/* wheels */}
        <circle cx="160" cy="376" r="24" fill="#e8e1d3" stroke={ink} strokeWidth="1.6" />
        <circle cx="160" cy="376" r="9" fill="none" stroke={ink} strokeWidth="1" opacity="0.6" />
        <circle cx="520" cy="376" r="24" fill="#e8e1d3" stroke={ink} strokeWidth="1.6" />
        <circle cx="520" cy="376" r="9" fill="none" stroke={ink} strokeWidth="1" opacity="0.6" />

        {/* chassis */}
        <rect x="106" y="352" width="486" height="12" fill={fill} stroke={ink} strokeWidth="1.4" />

        {/* cab */}
        <path d="M70 352 L70 224 Q70 208 86 208 L228 208 L228 352 Z" fill={fill} stroke={ink} strokeWidth="1.7" />
        <path d="M88 222 L186 222 L186 264 L88 264 Z" fill="#ede7dc" stroke={ink} strokeWidth="1.1" />
        <line x1="204" y1="216" x2="204" y2="348" stroke={ink} strokeWidth="1" opacity="0.5" />
        <line x1="192" y1="290" x2="214" y2="290" stroke={ink} strokeWidth="2.2" />
        <rect x="74" y="330" width="10" height="6" fill={ink} opacity="0.7" />

        {/* tank */}
        <path d="M244 352 L244 198 Q244 188 254 188 L596 188 Q640 190 640 232 L640 352 Z" fill={fill} stroke={ink} strokeWidth="1.7" />
        <line x1="340" y1="189" x2="340" y2="352" stroke={ink} strokeWidth="0.8" opacity="0.4" />
        <line x1="440" y1="189" x2="440" y2="352" stroke={ink} strokeWidth="0.8" opacity="0.4" />
        <path d="M596 189 Q634 205 634 270 Q634 335 596 351" fill="none" stroke={ink} strokeWidth="0.9" opacity="0.45" />

        {/* equipment on top (defines overall height) */}
        <rect x="252" y="170" width="96" height="18" fill="#e8e1d3" stroke={ink} strokeWidth="1.5" />
        <circle cx="332" cy="179" r="4" fill="none" stroke={ink} strokeWidth="1.1" />

        {/* hose reel */}
        <circle cx="556" cy="266" r="42" fill="#e8e1d3" stroke={ink} strokeWidth="1.5" />
        <circle cx="556" cy="266" r="28" fill="none" stroke={ink} strokeWidth="1" opacity="0.65" />
        <path d="M556 238 A28 28 0 1 1 542 289" fill="none" stroke={ink} strokeWidth="1.1" />

        {/* annotation */}
        <line x1="556" y1="224" x2="556" y2="150" stroke={ink} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.7" />
        <text x="556" y="142" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="9" letterSpacing="1.6" fill={ink} opacity="0.75">ШЛАНГОВЫЙ БАРАБАН</text>

        {/* height dimension */}
        <line x1="46" y1="170" x2="46" y2="400" stroke={ink} strokeWidth="1.1" />
        <line x1="38" y1="170" x2="54" y2="170" stroke={ink} strokeWidth="1.4" />
        <line x1="38" y1="400" x2="54" y2="400" stroke={ink} strokeWidth="1.4" />
        <line x1="46" y1="170" x2="252" y2="170" stroke={ink} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
        <g transform="translate(30,285) rotate(-90)">
          <text textAnchor="middle" fontFamily="var(--f-mono)" fontSize="13" letterSpacing="2.4" fill={ink}>2,30 м</text>
        </g>

        <text x="70" y="440" fontFamily="var(--f-mono)" fontSize="9" letterSpacing="1.6" fill={ink} opacity="0.6">ВИД СБОКУ · ПРИНЦИПИАЛЬНАЯ СХЕМА</text>
        <text x="690" y="440" textAnchor="end" fontFamily="var(--f-mono)" fontSize="9" letterSpacing="1.6" fill={ink} opacity="0.6">ГАБАРИТ ПО ВЫСОТЕ</text>
      </svg>
      <div className="draw__cap mono">
        <span>Рис. 1</span>
        <span>Комбинированная машина · промывка + откачка</span>
      </div>
    </div>
  );
}
