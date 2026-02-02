import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Details from './components/Details'
import Itinerary from './components/Itinerary'
import Location from './components/Location'
import Confirmation from './components/Confirmation'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'detalles', 'itinerario', 'ubicacion', 'confirmar']
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />

      {/* Decorative flowers - absolutely positioned */}
      <img src="/images/flower1.svg" alt="" className="flower flower-1" aria-hidden="true" />
      <img src="/images/flower2.svg" alt="" className="flower flower-2" aria-hidden="true" />
      <img src="/images/flower3.svg" alt="" className="flower flower-3" aria-hidden="true" />
      <img src="/images/flower4.svg" alt="" className="flower flower-4" aria-hidden="true" />
      <img src="/images/flower5.svg" alt="" className="flower flower-5" aria-hidden="true" />
      <img src="/images/flower6.svg" alt="" className="flower flower-6" aria-hidden="true" />

      <main>
        <Hero />
        <Details />
        <Itinerary />
        <Location />
        <Confirmation />
      </main>

      <footer className="footer">
        <p>Con amor, Claudio & Consuelo</p>
      </footer>
    </div>
  )
}

export default App
