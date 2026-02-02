import './Location.css'

function Location() {
  const address = 'Avenida Eastman 3404, Olmué, Quinta Región, Chile'
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`

  return (
    <section id="ubicacion" className="location section">
      <h2 className="section-title">Ubicación</h2>

      <div className="location-content">
        <div className="location-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>

        <div className="location-details">
          <h3 className="location-name">Avenida Eastman 3404</h3>
          <p className="location-address">Olmué, Quinta Región</p>
          <p className="location-country">Chile</p>
        </div>

        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.4684089647!2d-71.1992!3d-32.9981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU5JzUzLjIiUyA3McKwMTEnNTcuMSJX!5e0!3m2!1sen!2scl!4v1625000000000!5m2!1sen!2scl"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del evento"
          />
        </div>

        <div className="location-actions">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="location-btn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Ver en mapa
          </a>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="location-btn primary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="3 11 22 2 13 21 11 13 3 11"/>
            </svg>
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location
