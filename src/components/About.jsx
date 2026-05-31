export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
          01. à propos
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.5px', marginBottom: '2.5rem' }}>
          Qui je suis
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Je m'appelle <strong style={{ color: 'var(--text-primary)' }}>Aubin Fringant</strong>, étudiant en
              BTS SIO option SLAM. J'ai découvert le code en septembre et depuis je ne m'arrête plus.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              En quelques mois, j'ai appris Python de zéro, maîtrisé la POO, et construit
              une application full-stack en PHP avec une vraie API REST. Ce qui me motive :
              comprendre comment les choses fonctionnent, pas juste les faire marcher.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Actuellement en recherche d'alternance pour la deuxième année de BTS SIO.
            </p>

            {/* Infos clés */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem',
              marginTop: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
            }}>
              {[
                ['Formation', 'BTS SIO SLAM'],
                ['Année', '1ère année'],
                ['Moyenne', '16/20'],
                ['Statut', 'Recherche alternance/stage'],
              ].map(([k, v]) => (
                <div key={k}>
                  <span style={{ color: 'var(--accent)' }}>{k} : </span>
                  <span style={{ color: 'var(--text-secondary)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal décoratif */}
          <div style={{
            background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)', overflow: 'hidden',
          }}>
            <div style={{
              padding: '12px 16px', borderBottom: '1px solid var(--border)',
              display: 'flex', gap: '8px', alignItems: 'center',
            }}>
              {['#ff5f57','#febc2e','#28c840'].map(c => (
                <span key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
              ))}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: 8 }}>
                aubin@portfolio ~ bash
              </span>
            </div>
            <div style={{ padding: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', lineHeight: 2 }}>
              {[
                ['$', 'whoami', null],
                [null, 'aubin-fringant', 'var(--text-primary)'],
                ['$', 'cat skills.txt', null],
                [null, 'Python, PHP, JS, HTML/CSS', 'var(--success)'],
                [null, 'POO, API REST, SQL, Git', 'var(--success)'],
                ['$', 'echo $OBJECTIF', null],
                [null, '"Apprendre. Construire. Livrer."', 'var(--accent)'],
              ].map(([prompt, text, color], i) => (
                <div key={i} style={{ display: 'flex', gap: '8px' }}>
                  {prompt && <span style={{ color: 'var(--accent)' }}>{prompt}</span>}
                  <span style={{ color: color || 'var(--text-secondary)', paddingLeft: prompt ? 0 : '1.2rem' }}>
                    {text}
                  </span>
                </div>
              ))}
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: 'var(--accent)' }}>$</span>
                <span style={{
                  display: 'inline-block', width: '8px', height: '1em',
                  background: 'var(--accent)', animation: 'blink 1s step-end infinite',
                  verticalAlign: 'middle',
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
