import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project  = projects.find(p => p.slug === slug)

  if (!project) return (
    <div className="container section" style={{ minHeight: '60vh' }}>
      <p style={{ color: 'var(--text-secondary)' }}>Projet introuvable.</p>
      <Link to="/" style={{ color: 'var(--accent)' }}>← Retour</Link>
    </div>
  )

  return (
    <div className="container section" style={{ minHeight: '80vh', paddingTop: '8rem' }}>
      <Link to="/" style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
        color: 'var(--text-secondary)', display: 'inline-block', marginBottom: '2rem',
      }}
      onMouseEnter={e => e.target.style.color = 'var(--accent)'}
      onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
        ← Retour aux projets
      </Link>

      <h1 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>
        {project.title}
      </h1>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
      </div>

      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 680, marginBottom: '2rem' }}>
        {project.longDescription}
      </p>

      <div style={{ display: 'flex', gap: '1rem' }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
             style={{
               padding: '0.7rem 1.5rem', borderRadius: 'var(--radius-md)',
               border: '1px solid var(--border)', color: 'var(--text-primary)',
               fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
             }}>
            GitHub →
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
             style={{
               padding: '0.7rem 1.5rem', borderRadius: 'var(--radius-md)',
               background: 'var(--accent)', color: '#0f172a',
               fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700,
             }}>
            Demo live →
          </a>
        )}
      </div>
    </div>
  )
}
