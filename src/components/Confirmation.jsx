import { useState } from 'react'
import './Confirmation.css'

function Confirmation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formBody = new URLSearchParams({
      'form-name': 'rsvp',
      ...formData
    }).toString()

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError('Hubo un problema al enviar tu confirmación. Por favor, intenta de nuevo.')
      }
    } catch (err) {
      setError('Error de conexión. Por favor, verifica tu conexión e intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="confirmar" className="confirmation section">
        <div className="confirmation-success">
          <div className="success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h2 className="script-font">¡Gracias!</h2>
          <p>Hemos recibido tu confirmación.</p>
          <p className="success-subtext">Nos vemos el 28 de febrero</p>
        </div>
      </section>
    )
  }

  return (
    <section id="confirmar" className="confirmation section">
      <h2 className="section-title">Confirmar Asistencia</h2>

      <form
        className="confirmation-form"
        name="rsvp"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="rsvp" />
        <p hidden>
          <label>
            No llenar: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>

        {error && <p className="form-error">{error}</p>}

        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="guests">Número de invitados</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1 persona</option>
              <option value="2">2 personas</option>
              <option value="3">3 personas</option>
              <option value="4">4 personas</option>
            </select>
          </div>

          <div className="form-group">
            <label>¿Asistirás?</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === 'yes'}
                  onChange={handleChange}
                  required
                />
                Sí
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attendance === 'no'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje (opcional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Escríbenos un mensaje..."
          />
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Confirmar asistencia'}
        </button>
      </form>
    </section>
  )
}

export default Confirmation
