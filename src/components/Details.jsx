import './Details.css'

function Details() {
  return (
    <section id="detalles" className="details section">
      <h2 className="section-title">Detalles</h2>

      <div className="details-grid">
        <div className="detail-card">
          <div className="detail-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <h3 className="detail-label script-font">Día</h3>
          <p className="detail-value">Febrero</p>
          <p className="detail-highlight">28</p>
          <p className="detail-subvalue">2026</p>
        </div>

        <div className="detail-card">
          <div className="detail-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h3 className="detail-label script-font">Lugar</h3>
          <p className="detail-value">Avenida Eastman 3404</p>
          <p className="detail-subvalue">Olmué, Quinta Región</p>
        </div>

        <div className="detail-card">
          <div className="detail-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h3 className="detail-label script-font">Hora</h3>
          <p className="detail-highlight">2:00</p>
          <p className="detail-subvalue">PM</p>
        </div>
      </div>

      <div className="details-note">
        <p>Por favor confirmar asistencia</p>
      </div>
    </section>
  )
}

export default Details
