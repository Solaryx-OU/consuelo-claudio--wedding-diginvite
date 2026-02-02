import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="hero-content">
        <h2 className="hero-subtitle">Ceremonia Civil</h2>

        <div className="hero-names">
          <span className="hero-name script-font">Claudio</span>
          <span className="hero-ampersand script-font">&</span>
          <span className="hero-name script-font">Consuelo</span>
        </div>

        <div className="hero-invitation">
          <p>Con cariño te invitamos a celebrar</p>
          <p>nuestra unión</p>
        </div>

        <div className="hero-date">
          <span className="date-number">28</span>
          <span className="date-month">Febrero</span>
          <span className="date-year">2025</span>
        </div>

        <div className="hero-cta">
          <span className="script-font">¡Te esperamos!</span>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
