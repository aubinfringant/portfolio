export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.8rem',
      color: 'var(--text-muted)',
    }}>
      <p>
        <span style={{ color: 'var(--accent)' }}>Aubin Fringant</span>
        {' '}· {year}
      </p>
      <div style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <a href="https://github.com/aubinfringant" target="_blank" rel="noopener noreferrer"
           style={{ color: 'var(--text-muted)' }}
           onMouseEnter={e => e.target.style.color = 'var(--accent)'}
           onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/aubin-fringant-600964380/" target="_blank" rel="noopener noreferrer"
           style={{ color: 'var(--text-muted)' }}
           onMouseEnter={e => e.target.style.color = 'var(--accent)'}
           onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
