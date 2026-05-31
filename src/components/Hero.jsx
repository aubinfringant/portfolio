import { useEffect, useState } from 'react'

const roles = [
  'Développeur Python',
  'Développeur PHP',
  'Étudiant BTS SIO SLAM',
  'Passionné de code',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // Effet machine à écrire
  useEffect(() => {
    const role = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 30)
      } else {
        setRoleIndex(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 2rem', position: 'relative', overflow: 'hidden',
    }}>
      {/* Grille décorative en arrière-plan */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} aria-hidden="true" />

      {/* Halo lumineux */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
        zIndex: 0,
      }} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Badge statut */}
        <div className="animate-fade-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 14px', borderRadius: 'var(--radius-xl)',
          background: 'var(--accent-glow)', border: '1px solid rgba(56,189,248,0.3)',
          fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
          color: 'var(--accent)', marginBottom: '2rem',
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: 'var(--success)', display: 'inline-block',
            boxShadow: '0 0 6px var(--success)',
          }} />
          Disponible pour alternance · 2025-2026
        </div>

        {/* Titre principal */}
        <h1 className="animate-fade-up-delay-1" style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 600, lineHeight: 1.1,
          fontFamily: 'var(--font-sans)', letterSpacing: '-1px',
          marginBottom: '1rem',
        }}>
          Aubin{' '}
          <span style={{ color: 'var(--accent)' }}>Fringant</span>
        </h1>

        {/* Rôle avec effet machine à écrire */}
        <p className="animate-fade-up-delay-2" style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '2em',
        }}>
          <span style={{ color: 'var(--accent)' }}>$ </span>
          {displayed}
          <span style={{
            display: 'inline-block', width: '2px', height: '1.1em',
            background: 'var(--accent)', marginLeft: '2px',
            verticalAlign: 'middle',
            animation: 'blink 1s step-end infinite',
          }} />
        </p>

        {/* Courte description */}
        <p className="animate-fade-up-delay-3" style={{
          maxWidth: '520px', color: 'var(--text-secondary)',
          fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem',
        }}>
          En BTS SIO option SLAM, je construis des projets concrets en
          Python, PHP et React. J'aime comprendre comment ça marche sous le capot.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay-4"
             style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            padding: '0.75rem 1.75rem', borderRadius: 'var(--radius-md)',
            background: 'var(--accent)', color: '#0f172a',
            fontWeight: 600, fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
            transition: 'all var(--transition)',
          }}
          onMouseEnter={e => { e.target.style.background='var(--accent-dim)'; e.target.style.transform='translateY(-2px)' }}
          onMouseLeave={e => { e.target.style.background='var(--accent)'; e.target.style.transform='translateY(0)' }}>
            Voir mes projets
          </a>
          <a href="#contact" style={{
            padding: '0.75rem 1.75rem', borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)', color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
            transition: 'all var(--transition)',
          }}
          onMouseEnter={e => { e.target.style.borderColor='var(--accent)'; e.target.style.color='var(--accent)' }}
          onMouseLeave={e => { e.target.style.borderColor='var(--border)'; e.target.style.color='var(--text-primary)' }}>
            Me contacter
          </a>
        </div>
      </div>
    </section>
  )
}
