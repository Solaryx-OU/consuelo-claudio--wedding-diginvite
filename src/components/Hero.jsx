import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Feb 28, 2026 2:00 PM Santiago, Chile time (UTC-3)
    const targetDate = new Date('2026-02-28T14:00:00-03:00')

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

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
          <span className="date-year">2026</span>
        </div>

        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">Días</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">Horas</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutos</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">Segundos</span>
          </div>
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
