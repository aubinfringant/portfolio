import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const { title, description, tech, github, demo, status, slug, featured } = project

  const statusColor = {
    'En ligne': 'var(--success)',
    'En cours de déploiement': 'var(--warning)',
    'En développement': 'var(--accent)',
  }[status] || 'var(--text-muted)'

  return (
    <article style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.75rem',
      display: 'flex', flexDirection: 'column', gap: '1rem',
      transition: 'all var(--transition)',
      position: 'relative', overflow: 'hidden',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'rgba(56,189,248,0.5)'
      e.currentTarget.style.transform = 'translateY(-4px)'
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(56,189,248,0.08)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)'
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = 'none'
    }}>
      {/* Ligne décorative en haut */}
      {featured && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, var(--accent), transparent)',
        }} />
      )}

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <span style={{
          fontSize: '0.72rem', fontFamily: 'var(--font-mono)',
          color: statusColor, whiteSpace: 'nowrap',
          display: 'flex', alignItems: 'center', gap: '5px',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: statusColor, display: 'inline-block' }} />
          {status}
        </span>
      </div>

      {/* Description */}
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65, flex: 1 }}>
        {description}
      </p>

      {/* Tags tech */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {tech.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      {/* Liens */}
      <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer"
             style={{ fontSize: '0.83rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}
             onMouseEnter={e => e.target.style.color = 'var(--accent)'}
             onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            GitHub →
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer"
             style={{ fontSize: '0.83rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}
             onMouseEnter={e => e.target.style.color = 'var(--accent)'}
             onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            Demo live →
          </a>
        )}
        <Link to={`/projet/${slug}`}
              style={{ marginLeft: 'auto', fontSize: '0.83rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>
          Détails →
        </Link>
      </div>
    </article>
  )
}
