import { skills } from '../data/skills.js'

function SkillBar({ level }) {
  return (
    <div style={{
      display: 'flex', gap: '3px', alignItems: 'center',
    }}>
      {[1,2,3,4,5].map(i => (
        <div key={i} style={{
          width: 20, height: 4, borderRadius: 2,
          background: i <= level ? 'var(--accent)' : 'var(--border)',
          transition: 'background 0.3s',
        }} />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
          04. compétences
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.5px', marginBottom: '3rem' }}>
          Ma stack technique
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {skills.map(cat => (
            <div key={cat.category} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '1.5rem',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                color: 'var(--accent)', marginBottom: '1.2rem',
                textTransform: 'uppercase', letterSpacing: '1px',
              }}>
                {cat.category}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {cat.items.map(skill => (
                  <div key={skill.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>{skill.icon}</span> {skill.name}
                    </span>
                    <SkillBar level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
