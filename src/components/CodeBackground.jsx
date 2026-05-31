const BLOCKS = [
  ['public class Dev {', '  string name = "Aubin";', '}'],
  ['// skills list', 'skills.Add("PHP");', 'skills.Add("React");'],
  ['if (learning) {', '  continue;', '}'],
  ['var x = 42;', 'return x * 2;'],
  ['// TODO: ship it', 'Deploy();'],
  ['foreach (var s', '  in skills) {', '  Log(s);', '}'],
  ['await Task', '  .Delay(1000);'],
  ['int[] arr =', '  new int[256];'],
  ['try {', '  Run();', '} catch { }'],
  ['[HttpGet("/api")]', 'return Ok(data);'],
  ['using var db =', '  new DbContext();'],
  ['bool ok =', '  !IsNullOrEmpty(v);'],
]

const COLORS = {
  keyword: '#569cd6',
  string:  '#ce9178',
  comment: '#6a9955',
  method:  '#dcdcaa',
  number:  '#b5cea8',
  default: '#d4d4d4',
}

function getColor(word) {
  const w = word.replace(/[^a-zA-Z]/g, '')
  const keywords = ['public','class','string','var','if','foreach','return','await','using','new','try','catch','bool','int']
  if (word.startsWith('//'))     return COLORS.comment
  if (word.includes('"'))        return COLORS.string
  if (/^\d+$/.test(word))        return COLORS.number
  if (keywords.includes(w))      return COLORS.keyword
  if (word.endsWith('()'))       return COLORS.method
  return COLORS.default
}

function CodeLine({ text }) {
  // Ligne vide = espaceur visible
  if (!text) return <div style={{ height: '2.5em' }} />

  return (
    <div style={{ whiteSpace: 'nowrap', marginBottom: '0.3em' }}>
      {text.split(/(\s+)/).map((token, i) => (
        <span key={i} style={{ color: getColor(token.trim()) }}>
          {token}
        </span>
      ))}
    </div>
  )
}

function buildContent(blockOffset) {
  const content = []
  for (let i = 0; i < 5; i++) {
    const block = BLOCKS[(i + blockOffset) % BLOCKS.length]
    block.forEach(line => content.push(line))
    // 4 lignes vides entre chaque bloc
    content.push('', '', '', '')
  }
  return content
}

function CodeColumn({ offset, speed, fontSize, opacity, blur, blockOffset }) {
  const content = buildContent(blockOffset)

  return (
    <div style={{
      position: 'absolute',
      left: `${offset}%`,
      top: 0,
      width: '16%',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize,
      lineHeight: 1.8,
      opacity,
      filter: blur > 0 ? `blur(${blur}px)` : 'none',
      animation: `scrollCode ${speed}s linear infinite`,
    }}>
      {[...content, ...content].map((line, i) => (
        <CodeLine key={i} text={line} />
      ))}
    </div>
  )
}

// [offset%, speed(s), fontSize, opacity, blur, blockOffset]
const COLUMNS = [
  [2,  24, '12px', 0.60, 0,   0],
  [22, 38, '10px', 0.30, 1.5, 3],
  [42, 20, '13px', 0.55, 0,   6],
  [62, 44, '9px',  0.22, 2.5, 9],
  [78, 28, '11px', 0.42, 0,   2],
]

export default function CodeBackground() {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      zIndex: 0, overflow: 'hidden',
      pointerEvents: 'none',
    }} aria-hidden="true">

      <style>{`
        @keyframes scrollCode {
          from { transform: translateY(-50%); }
          to   { transform: translateY(0%); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      {COLUMNS.map((col, i) => (
        <CodeColumn
          key={i}
          offset={col[0]}
          speed={col[1]}
          fontSize={col[2]}
          opacity={col[3]}
          blur={col[4]}
          blockOffset={col[5]}
        />
      ))}

      {/* Voile allégé */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.78) 100%)',
      }} />
    </div>
  )
}
