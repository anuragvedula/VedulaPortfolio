/* Cinematic SVG conceptual visuals for technical projects */

/* ── Car Detection Gateway ─────────────────────────────── */
export function CarDetectionVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117] flex items-center justify-center relative overflow-hidden">
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
        {[...Array(10)].map((_, i) => (
          <line key={`hg-${i}`} x1="0" y1={`${i * 10}%`} x2="100%" y2={`${i * 10}%`} stroke="#8B5E3C" strokeWidth="0.5" />
        ))}
        {[...Array(10)].map((_, i) => (
          <line key={`vg-${i}`} x1={`${i * 10}%`} y1="0" x2={`${i * 10}%`} y2="100%" stroke="#8B5E3C" strokeWidth="0.5" />
        ))}
      </svg>

      <svg viewBox="0 0 320 200" className="w-full max-w-xs relative z-10" preserveAspectRatio="xMidYMid meet">
        {/* Road */}
        <rect x="0" y="130" width="320" height="70" fill="#0a0a0a" />
        <rect x="0" y="128" width="320" height="3" fill="#8B5E3C" opacity="0.5" />
        {/* Lane markers */}
        {[40, 100, 160, 220, 280].map((x) => (
          <rect key={x} x={x} y="162" width="20" height="3" fill="#8B5E3C" opacity="0.3" />
        ))}

        {/* Gate arch */}
        <rect x="130" y="60" width="8" height="70" fill="#2a1f0f" stroke="#8B5E3C" strokeWidth="0.8" strokeOpacity="0.8" />
        <rect x="182" y="60" width="8" height="70" fill="#2a1f0f" stroke="#8B5E3C" strokeWidth="0.8" strokeOpacity="0.8" />
        <rect x="130" y="58" width="60" height="6" fill="#8B5E3C" opacity="0.7" rx="1" />
        {/* Boom barrier */}
        <rect x="138" y="100" width="55" height="4" fill="#8B5E3C" opacity="0.9" rx="2" />
        <circle cx="138" cy="102" r="4" fill="#8B5E3C" />

        {/* Sensor beams */}
        <line x1="134" y1="80" x2="186" y2="80" stroke="#8B5E3C" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

        {/* Car silhouette */}
        <g transform="translate(30, 108)">
          <rect x="0" y="15" width="60" height="18" rx="3" fill="#1a1208" stroke="#8B5E3C" strokeWidth="0.6" strokeOpacity="0.7" />
          <rect x="8" y="8" width="42" height="16" rx="4" fill="#1a1208" stroke="#8B5E3C" strokeWidth="0.6" strokeOpacity="0.5" />
          <circle cx="12" cy="33" r="5" fill="#0d0d0d" stroke="#8B5E3C" strokeWidth="1" />
          <circle cx="48" cy="33" r="5" fill="#0d0d0d" stroke="#8B5E3C" strokeWidth="1" />
          {/* Headlight glow */}
          <circle cx="58" cy="22" r="3" fill="#8B5E3C" opacity="0.8" />
          <ellipse cx="70" cy="22" rx="12" ry="5" fill="#8B5E3C" opacity="0.15" />
        </g>

        {/* Detection pulse */}
        <circle cx="90" cy="120" r="18" fill="none" stroke="#8B5E3C" strokeWidth="0.8" opacity="0.3" strokeDasharray="4 4" />
        <circle cx="90" cy="120" r="10" fill="none" stroke="#8B5E3C" strokeWidth="1" opacity="0.5" />

        {/* MCU chip */}
        <rect x="240" y="50" width="55" height="50" rx="4" fill="#1a1208" stroke="#8B5E3C" strokeWidth="1" strokeOpacity="0.8" />
        <text x="267" y="70" textAnchor="middle" fill="#8B5E3C" fontSize="6" fontFamily="monospace" opacity="0.9">MCU</text>
        {[0, 1, 2, 3].map((i) => (
          <rect key={`pin-l-${i}`} x="232" y={57 + i * 10} width="8" height="3" rx="1" fill="#8B5E3C" opacity="0.6" />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <rect key={`pin-r-${i}`} x="295" y={57 + i * 10} width="8" height="3" rx="1" fill="#8B5E3C" opacity="0.6" />
        ))}
        {/* Signal lines */}
        <line x1="240" y1="75" x2="190" y2="82" stroke="#8B5E3C" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />

        {/* Labels */}
        <text x="160" y="20" textAnchor="middle" fill="#8B5E3C" fontSize="7" fontFamily="monospace" letterSpacing="2" opacity="0.6">
          VEHICLE DETECTION SYSTEM
        </text>
      </svg>

      {/* Corner badge */}
      <div className="absolute bottom-4 right-4">
        <span className="font-inter text-[9px] text-accent/50 tracking-[0.15em] uppercase">Arduino · Sensors</span>
      </div>
    </div>
  );
}

/* ── Fire Detection System ─────────────────────────────── */
export function FireDetectionVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#120800] via-[#1a0d00] to-[#0d0600] flex items-center justify-center relative overflow-hidden">
      {/* Radial heat glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,rgba(139,94,60,0.18),transparent_65%)]" />

      <svg viewBox="0 0 320 200" className="w-full max-w-xs relative z-10" preserveAspectRatio="xMidYMid meet">
        {/* Flame — stylised */}
        <ellipse cx="160" cy="135" rx="25" ry="8" fill="#8B5E3C" opacity="0.2" />
        <path d="M 160 145 C 148 130 142 118 148 105 C 150 115 155 112 158 105 C 155 95 160 80 160 80 C 163 93 168 95 165 105 C 168 112 173 115 172 105 C 178 118 172 130 160 145 Z" fill="#8B5E3C" opacity="0.75" />
        <path d="M 160 140 C 152 128 150 116 154 108 C 155 116 158 113 159 108 C 158 100 160 90 160 90 C 162 100 164 113 163 108 C 164 116 168 128 160 140 Z" fill="#C4884A" opacity="0.6" />
        <circle cx="160" cy="95" r="4" fill="#F0C070" opacity="0.5" />

        {/* Sensor module */}
        <rect x="60" y="90" width="50" height="40" rx="5" fill="#1a1208" stroke="#8B5E3C" strokeWidth="1" strokeOpacity="0.8" />
        <text x="85" y="107" textAnchor="middle" fill="#8B5E3C" fontSize="5.5" fontFamily="monospace" opacity="0.9">FLAME</text>
        <text x="85" y="117" textAnchor="middle" fill="#8B5E3C" fontSize="5.5" fontFamily="monospace" opacity="0.9">SENSOR</text>
        {/* Sensor eye */}
        <circle cx="85" cy="127" r="5" fill="#2a1208" stroke="#8B5E3C" strokeWidth="0.8" />
        <circle cx="85" cy="127" r="2" fill="#8B5E3C" opacity="0.7" />
        {/* Detection beam to flame */}
        <line x1="110" y1="115" x2="138" y2="120" stroke="#8B5E3C" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5" />

        {/* Arduino board */}
        <rect x="210" y="60" width="80" height="60" rx="5" fill="#0a1a08" stroke="#8B5E3C" strokeWidth="0.8" strokeOpacity="0.6" />
        <text x="250" y="76" textAnchor="middle" fill="#8B5E3C" fontSize="6" fontFamily="monospace" opacity="0.7">ARDUINO</text>
        {[0, 1, 2].map((i) => (
          <rect key={`apin-${i}`} x={220 + i * 18} y="112" width="8" height="8" rx="1" fill="#8B5E3C" opacity="0.4" />
        ))}
        {/* Buzzer */}
        <circle cx="270" cy="90" r="10" fill="#1a1208" stroke="#8B5E3C" strokeWidth="0.8" strokeOpacity="0.7" />
        <circle cx="270" cy="90" r="5" fill="#8B5E3C" opacity="0.3" />
        {/* Alert wave */}
        {[14, 19, 24].map((r) => (
          <circle key={r} cx="270" cy="90" r={r} fill="none" stroke="#8B5E3C" strokeWidth="0.7" opacity={0.12 + (r - 14) * 0.02} />
        ))}
        {/* Wire from sensor to board */}
        <path d="M 110 110 Q 160 140 210 90" fill="none" stroke="#8B5E3C" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.35" />

        {/* Label */}
        <text x="160" y="18" textAnchor="middle" fill="#8B5E3C" fontSize="7" fontFamily="monospace" letterSpacing="2" opacity="0.6">
          FIRE DETECTION &amp; ALERT
        </text>

        {/* Smoke particles */}
        {[148, 158, 168].map((x, i) => (
          <circle key={x} cx={x} cy={72 - i * 8} r={2 + i} fill="#8B5E3C" opacity={0.06 + i * 0.03} />
        ))}
      </svg>

      <div className="absolute bottom-4 right-4">
        <span className="font-inter text-[9px] text-accent/50 tracking-[0.15em] uppercase">Safety · Automation</span>
      </div>
    </div>
  );
}

/* ── Pneumonia CNN Detection ───────────────────────────── */
export function PneumoniaDetectionVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#060D18] via-[#0B1526] to-[#060D18] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,94,60,0.08),transparent_70%)]" />

      <svg viewBox="0 0 320 200" className="w-full max-w-xs relative z-10" preserveAspectRatio="xMidYMid meet">
        {/* X-ray lung silhouette */}
        <ellipse cx="100" cy="110" rx="30" ry="45" fill="#0e1c30" stroke="#8B5E3C" strokeWidth="0.6" strokeOpacity="0.5" />
        <ellipse cx="145" cy="110" rx="30" ry="45" fill="#0e1c30" stroke="#8B5E3C" strokeWidth="0.6" strokeOpacity="0.5" />
        {/* Lung texture */}
        {[...Array(6)].map((_, i) => (
          <path key={`lt-${i}`} d={`M ${90 + (i % 3) * 8} ${85 + Math.floor(i / 3) * 25} q 5 -10 10 0`} fill="none" stroke="#8B5E3C" strokeWidth="0.5" opacity="0.25" />
        ))}
        {[...Array(6)].map((_, i) => (
          <path key={`rt-${i}`} d={`M ${135 + (i % 3) * 8} ${85 + Math.floor(i / 3) * 25} q 5 -10 10 0`} fill="none" stroke="#8B5E3C" strokeWidth="0.5" opacity="0.25" />
        ))}
        {/* Highlight areas (pneumonia) */}
        <ellipse cx="108" cy="118" rx="12" ry="10" fill="#8B5E3C" opacity="0.18" />
        <ellipse cx="108" cy="118" rx="6" ry="5" fill="#8B5E3C" opacity="0.25" />
        {/* Scan frame */}
        <rect x="60" y="58" width="115" height="105" fill="none" stroke="#8B5E3C" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="4 3" />
        {/* Corner marks */}
        {[[60,58],[175,58],[60,163],[175,163]].map(([x,y], i) => (
          <g key={i}>
            <line x1={x} y1={y} x2={x + (i%2===0?6:-6)} y2={y} stroke="#8B5E3C" strokeWidth="1.5" opacity="0.7" />
            <line x1={x} y1={y} x2={x} y2={y + (i<2?6:-6)} stroke="#8B5E3C" strokeWidth="1.5" opacity="0.7" />
          </g>
        ))}

        {/* CNN layers */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={`cnn-${i}`}>
            <rect x={200 + i * 18} y={80 - i * 5} width="12" height={60 + i * 10} rx="2"
              fill="#0e1c30" stroke="#8B5E3C" strokeWidth="0.7" strokeOpacity={0.4 + i * 0.1} />
            {[0,1,2].map((j) => (
              <rect key={j} x={201 + i * 18} y={85 - i * 5 + j * 14} width="10" height="10" rx="1"
                fill="#8B5E3C" opacity={0.1 + j * 0.07} />
            ))}
          </g>
        ))}

        {/* Arrow from scan to CNN */}
        <line x1="177" y1="110" x2="196" y2="110" stroke="#8B5E3C" strokeWidth="1" opacity="0.5" />
        <polygon points="196,107 200,110 196,113" fill="#8B5E3C" opacity="0.5" />

        {/* Output */}
        <rect x="290" y="95" width="24" height="30" rx="4" fill="#1a0d00" stroke="#8B5E3C" strokeWidth="0.8" strokeOpacity="0.7" />
        <text x="302" y="110" textAnchor="middle" fill="#8B5E3C" fontSize="5" fontFamily="monospace" opacity="0.8">CNN</text>
        <text x="302" y="118" textAnchor="middle" fill="#C4884A" fontSize="4.5" fontFamily="monospace" opacity="0.9">+ve</text>

        <text x="160" y="18" textAnchor="middle" fill="#8B5E3C" fontSize="7" fontFamily="monospace" letterSpacing="1.5" opacity="0.6">
          PNEUMONIA DETECTION · CNN
        </text>
      </svg>

      <div className="absolute bottom-4 right-4">
        <span className="font-inter text-[9px] text-accent/50 tracking-[0.15em] uppercase">Deep Learning · Medical AI</span>
      </div>
    </div>
  );
}

/* ── ZYNQ Video Enhancer ───────────────────────────────── */
export function VideoEnhancerVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#080D10] via-[#0F1820] to-[#080D10] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(139,94,60,0.07),transparent_60%)]" />

      <svg viewBox="0 0 320 200" className="w-full max-w-xs relative z-10" preserveAspectRatio="xMidYMid meet">
        {/* CCTV Camera */}
        <rect x="18" y="75" width="36" height="24" rx="4" fill="#1a1208" stroke="#8B5E3C" strokeWidth="0.8" strokeOpacity="0.7" />
        <circle cx="22" cy="87" r="3" fill="#0d0d0d" stroke="#8B5E3C" strokeWidth="0.5" />
        <rect x="54" y="81" width="16" height="12" rx="2" fill="#1a1208" stroke="#8B5E3C" strokeWidth="0.6" />
        {/* Camera mount */}
        <line x1="36" y1="75" x2="36" y2="60" stroke="#8B5E3C" strokeWidth="0.8" opacity="0.5" />
        <rect x="28" y="56" width="16" height="4" rx="1" fill="#8B5E3C" opacity="0.4" />

        {/* Video stream arrow */}
        <line x1="70" y1="87" x2="108" y2="87" stroke="#8B5E3C" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        <polygon points="108,84 113,87 108,90" fill="#8B5E3C" opacity="0.5" />

        {/* FPGA / ZYNQ chip */}
        <rect x="113" y="60" width="94" height="64" rx="6" fill="#0d1a0a" stroke="#8B5E3C" strokeWidth="1" strokeOpacity="0.8" />
        <text x="160" y="81" textAnchor="middle" fill="#8B5E3C" fontSize="7" fontFamily="monospace" opacity="0.9" letterSpacing="1">ZYNQ</text>
        <text x="160" y="93" textAnchor="middle" fill="#8B5E3C" fontSize="5.5" fontFamily="monospace" opacity="0.6">FPGA · VIVADO</text>

        {/* Internal processing blocks */}
        {[
          { x: 120, y: 98, label: "MOT" },
          { x: 150, y: 98, label: "FLT" },
          { x: 180, y: 98, label: "ENH" },
        ].map((b) => (
          <g key={b.label}>
            <rect x={b.x} y={b.y} width="22" height="16" rx="2" fill="#1a2a18" stroke="#8B5E3C" strokeWidth="0.5" strokeOpacity="0.6" />
            <text x={b.x + 11} y={b.y + 10} textAnchor="middle" fill="#8B5E3C" fontSize="5" fontFamily="monospace" opacity="0.8">{b.label}</text>
          </g>
        ))}
        {/* Pin rows */}
        {[0,1,2,3,4,5].map((i) => (
          <rect key={`fpin-t-${i}`} x={122 + i * 13} y="56" width="7" height="4" rx="1" fill="#8B5E3C" opacity="0.4" />
        ))}
        {[0,1,2,3,4,5].map((i) => (
          <rect key={`fpin-b-${i}`} x={122 + i * 13} y="124" width="7" height="4" rx="1" fill="#8B5E3C" opacity="0.4" />
        ))}

        {/* Enhanced output arrow */}
        <line x1="207" y1="87" x2="235" y2="87" stroke="#8B5E3C" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        <polygon points="235,84 240,87 235,90" fill="#8B5E3C" opacity="0.5" />

        {/* Output monitor */}
        <rect x="240" y="65" width="68" height="50" rx="4" fill="#1a1208" stroke="#8B5E3C" strokeWidth="0.8" strokeOpacity="0.7" />
        <rect x="245" y="70" width="58" height="36" rx="2" fill="#0a1208" />
        {/* Enhanced frame lines */}
        {[0,1,2,3,4].map((i) => (
          <line key={i} x1="247" y1={73 + i * 7} x2="301" y2={73 + i * 7} stroke="#8B5E3C" strokeWidth={i === 2 ? 1.5 : 0.5} opacity={i === 2 ? 0.4 : 0.15} />
        ))}
        <text x="274" y="118" textAnchor="middle" fill="#8B5E3C" fontSize="5" fontFamily="monospace" opacity="0.5">OUTPUT</text>

        {/* Label */}
        <text x="160" y="18" textAnchor="middle" fill="#8B5E3C" fontSize="7" fontFamily="monospace" letterSpacing="1.5" opacity="0.6">
          VIDEO ENHANCEMENT · ZYNQ
        </text>
      </svg>

      <div className="absolute bottom-4 right-4">
        <span className="font-inter text-[9px] text-accent/50 tracking-[0.15em] uppercase">FPGA · Hardware Acceleration</span>
      </div>
    </div>
  );
}
