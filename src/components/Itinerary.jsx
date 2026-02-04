import { Martini, Heart, UtensilsCrossed, Coffee, Music } from 'lucide-react'
import './Itinerary.css'

function Itinerary() {
  const events = [
    {
      time: '2:00 PM',
      title: 'Cocktail Bienvenida',
      icon: <Martini strokeWidth={1.5} />
    },
    {
      time: '3:00 PM',
      title: 'Ceremonia',
      icon: <Heart strokeWidth={1.5} />
    },
    {
      time: '3:30 PM',
      title: 'Almuerzo',
      icon: <UtensilsCrossed strokeWidth={1.5} />
    },
    {
      time: '5:30 PM',
      title: 'Tecito y Compartir',
      icon: <Coffee strokeWidth={1.5} />
    },
    {
      time: '7:00 PM',
      title: 'Carrete',
      icon: <Music strokeWidth={1.5} />
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
