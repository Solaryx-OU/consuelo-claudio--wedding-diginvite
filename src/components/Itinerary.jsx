import './Itinerary.css'

function Itinerary() {
  const events = [
    {
      time: '2:00 PM',
      title: 'Cocktail Bienvenida',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 22h8M12 17v5M17 3l-5 9-5-9M4 3h16"/>
          <path d="M6 7l6 10 6-10"/>
        </svg>
      )
    },
    {
      time: '3:00 PM',
      title: 'Ceremonia',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="7" r="4"/>
          <circle cx="15" cy="7" r="4"/>
          <path d="M9 11v6M15 11v6"/>
          <path d="M7 21l2-4 2 4M13 21l2-4 2 4"/>
        </svg>
      )
    },
    {
      time: '3:30 PM',
      title: 'Almuerzo',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8"/>
          <circle cx="12" cy="12" r="4"/>
          <line x1="3" y1="12" x2="4" y2="12"/>
          <line x1="20" y1="12" x2="21" y2="12"/>
        </svg>
      )
    },
    {
      time: '5:30 PM',
      title: 'Tecito y Compartir',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 8h1a4 4 0 0 1 0 8h-1"/>
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
          <path d="M6 1v3M10 1v3M14 1v3"/>
        </svg>
      )
    },
    {
      time: '7:00 PM',
      title: 'Carrete',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 2L8 22M16 2l-2 20"/>
          <path d="M8 7l8-5M6 12l8-5M4 17l8-5"/>
        </svg>
      )
    }
  ]

  return (
    <section id="itinerario" className="itinerary section">
      <h2 className="section-title">Itinerario</h2>

      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-time">{event.time}</div>
            <div className="timeline-connector">
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-icon">{event.icon}</div>
              <h3 className="timeline-title">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Itinerary
