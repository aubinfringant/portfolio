import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container section" style={{
      minHeight: '80vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      paddingTop: '6rem',
    }}>
      <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '5rem', fontWeight: 700 }}>
        404
      </p>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page introuvable</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Cette URL n'existe pas dans ce portfolio.
      </p>
      <Link to="/" style={{
        padding: '0.75rem 1.75rem', borderRadius: 'var(--radius-md)',
        background: 'var(--accent)', color: '#0f172a',
        fontFamily: 'var(--font-mono)', fontWeight: 700,
      }}>
        Retour à l'accueil
      </Link>
    </div>
  )
}
