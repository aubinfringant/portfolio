import { useState } from 'react'
import { training } from '../data/training.js'

function StepItem({ step, index, isLast }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ display: 'flex', gap: '1rem', position: 'relative' }}>
      {/* Ligne verticale de la timeline */}
      {!isLast && (
        <div style={{
          position: 'absolute', left: '11px', top: '24px',
          width: '2px', bottom: '-8px',
          background: 'var(--border)',
        }} />
      )}

      {/* Numéro / pastille */}
      <div onClick={() => setOpen(o => !o)} style={{
        width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
        background: step.highlight ? 'var(--accent)' : 'var(--bg-secondary)',
        border: `2px solid ${step.highlight ? 'var(--accent)' : 'var(--border)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
        color: step.highlight ? '#0f172a' : 'var(--text-muted)',
        cursor: 'pointer', zIndex: 1, marginTop: '2px',
        boxShadow: step.highlight ? '0 0 10px var(--accent-glow)' : 'none',
        transition: 'all var(--transition)',
      }}>
        {index + 1}
      </div>

      {/* Contenu */}
      <div style={{ flex: 1, paddingBottom: '1.2rem' }}>
        <div onClick={() => setOpen(o => !o)} style={{
          cursor: 'pointer', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
        }}>
          <span style={{
            fontSize: '0.92rem', fontWeight: step.highlight ? 600 : 400,
            color: step.highlight ? 'var(--text-primary)' : 'var(--text-secondary)',
            transition: 'color var(--transition)',
          }}>
            {step.label}
          </span>
          <span style={{
            color: 'var(--text-muted)', fontSize: '0.75rem',
            transform: open ? 'rotate(90deg)' : 'rotate(0)',
            transition: 'transform var(--transition)', flexShrink: 0,
          }}>▶</span>
        </div>

        {/* Détail dépliable */}
        <div style={{
          maxHeight: open ? '200px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}>
          <p style={{
            marginTop: '0.5rem', fontSize: '0.85rem',
            color: 'var(--text-secondary)', lineHeight: 1.7,
          }}>
            {step.detail}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '0.5rem' }}>
            {step.tags.map(t => (
              <span key={t} className="tag" style={{ fontSize: '0.7rem' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TrainingBlock({ block }) {
  const [expanded, setExpanded] = useState(true)

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
    }}>
      {/* En-tête du bloc */}
      <div onClick={() => setExpanded(o => !o)} style={{
        padding: '1.5rem 1.75rem',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer', gap: '1rem',
        borderBottom: expanded ? '1px solid var(--border)' : 'none',
        transition: 'border var(--transition)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            fontSize: '1.6rem', lineHeight: 1,
            filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.1))',
          }}>
            {block.icon}
          </span>
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
              color: block.color, marginBottom: '2px', letterSpacing: '0.5px',
            }}>
              {block.period} · {block.language}
            </p>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {block.title}
            </h3>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
          {/* Badge nombre d'étapes */}
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
            color: 'var(--text-muted)',
          }}>
            {block.steps.length} étapes
          </span>
          <span style={{
            color: 'var(--text-muted)',
            transform: expanded ? 'rotate(90deg)' : 'rotate(0)',
            transition: 'transform var(--transition)',
          }}>▶</span>
        </div>
      </div>

      {/* Timeline des étapes */}
      <div style={{
        maxHeight: expanded ? '2000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.5s ease',
      }}>
        <div style={{ padding: '1.5rem 1.75rem' }}>
          {block.steps.map((step, i) => (
            <StepItem
              key={i}
              step={step}
              index={i}
              isLast={i === block.steps.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Training() {
  return (
    <section id="training" className="section">
      <div className="container">
        <p style={{
          fontFamily: 'var(--font-mono)', color: 'var(--accent)',
          fontSize: '0.85rem', marginBottom: '0.5rem',
        }}>
          03 · formation
        </p>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600,
          letterSpacing: '-0.5px', marginBottom: '0.75rem',
        }}>
          TP & Projets de formation
        </h2>
        <p style={{
          color: 'var(--text-secondary)', marginBottom: '3rem',
          maxWidth: 560, lineHeight: 1.7,
        }}>
          Progression réelle sur l'année — de la première variable Python
          au projet full-stack collaboratif en mode Agile.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {training.map(block => (
            <TrainingBlock key={block.id} block={block} />
          ))}
        </div>
      </div>
    </section>
  )
}
