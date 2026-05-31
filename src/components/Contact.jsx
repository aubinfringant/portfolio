import { useState } from 'react'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem',
    background: 'var(--bg-secondary)', border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)', color: 'var(--text-primary)',
    fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
    outline: 'none', transition: 'border-color var(--transition)',
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
          05. contact
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600, letterSpacing: '-0.5px', marginBottom: '0.75rem' }}>
          Travaillons ensemble
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Vous avez un projet, une opportunité d'alternance, ou juste envie d'échanger ?
          Je lis tous les messages.
        </p>
        <div style={{ maxWidth: 640 }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input name="name" required placeholder="Votre nom"
                value={form.name} onChange={handleChange}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
              <input name="email" type="email" required placeholder="Votre email"
                value={form.email} onChange={handleChange}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <textarea name="message" required placeholder="Votre message..."
              rows={5} value={form.message} onChange={handleChange}
              style={{ ...inputStyle, resize: 'vertical', minHeight: 140 }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />

            <button type="submit" disabled={status === 'loading'} style={{
              padding: '0.85rem 2rem', borderRadius: 'var(--radius-md)',
              background: status === 'loading' ? 'var(--border)' : 'var(--accent)',
              color: '#0f172a', fontWeight: 700,
              fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
              border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              transition: 'all var(--transition)', alignSelf: 'flex-start',
            }}>
              {status === 'loading' ? 'Envoi...' : 'Envoyer le message'}
            </button>

            {status === 'success' && (
              <p style={{ color: 'var(--success)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                ✓ Message envoyé ! Je vous réponds rapidement.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: 'var(--error)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                ✗ Erreur. Essayez par email directement.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
