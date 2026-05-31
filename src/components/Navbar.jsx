import { useState, useEffect } from 'react'

const links = [
  { href: '/#about',    label: 'À propos',   id: 'about'    },
  { href: '/#projects', label: 'Projets',     id: 'projects' },
  { href: '/#training', label: 'Formation',   id: 'training' },  // ← ajouter
  { href: '/#skills',   label: 'Compétences', id: 'skills'   },
  { href: '/#contact',  label: 'Contact',     id: 'contact'  },
]

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen,      setMenuOpen]      = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Ferme le menu et bloque le scroll du body quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  const isMobile = () => window.innerWidth < 768

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled || menuOpen ? 'rgba(15,23,42,0.97)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all var(--transition-slow)',
      }}>
        {/* Logo */}
        <a href="/" style={{
          fontFamily: 'var(--font-mono)', fontWeight: 700,
          color: 'var(--accent)', fontSize: '1.1rem',
          letterSpacing: '-0.5px', textDecoration: 'none',
        }}>
          AF<span style={{ color: 'var(--text-muted)' }}>.dev</span>
        </a>

        {/* Liens desktop — cachés sous 768px */}
        <ul style={{
          display: 'flex', gap: '2rem', listStyle: 'none',
          fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
        }} className="nav-desktop">
          {links.map(l => {
            const isActive = activeSection === l.id
            return (
              <li key={l.href}>
                <a href={l.href} style={{
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  transition: 'color var(--transition)', textDecoration: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => {
                  if (activeSection !== l.id)
                    e.currentTarget.style.color = 'var(--text-secondary)'
                }}>
                  <span style={{ color: 'var(--accent)' }}>~/</span>{l.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Burger — visible sous 768px */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          className="nav-burger"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '4px', display: 'none', flexDirection: 'column',
            gap: '5px', justifyContent: 'center', alignItems: 'center',
          }}>
          {/* 3 barres animées */}
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '2px',
              background: 'var(--text-primary)', borderRadius: '2px',
              transition: 'all 0.25s ease',
              transform: menuOpen
                ? i === 0 ? 'translateY(7px) rotate(45deg)'
                : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                : 'opacity 0 scaleX(0)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Menu mobile — overlay plein écran */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 99,
        background: 'rgba(15,23,42,0.98)',
        backdropFilter: 'blur(16px)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', gap: '2.5rem',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity 0.3s ease',
      }} aria-hidden={!menuOpen}>
        {links.map((l, i) => {
          const isActive = activeSection === l.id
          return (
            <a key={l.href} href={l.href} onClick={handleLinkClick}
               style={{
                 fontFamily: 'var(--font-mono)',
                 fontSize: '1.6rem', fontWeight: 500,
                 color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                 textDecoration: 'none',
                 transition: `color var(--transition), transform 0.3s ${i * 0.05}s`,
                 transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
               }}
               onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
               onMouseLeave={e => {
                 if (activeSection !== l.id)
                   e.currentTarget.style.color = 'var(--text-primary)'
               }}>
              <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>~/</span>{l.label}
            </a>
          )
        })}
      </div>

      {/* CSS responsive injecté */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: flex !important; }
        }
      `}</style>
    </>
  )
}