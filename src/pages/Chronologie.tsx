import { Link } from "react-router-dom"
import NavBar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import Reveal from "../components/Reveal"
import { arcs } from "../data/arcs"
import { tomes } from "../data/tomes"
import './Tomes.css'
import './Chronologie.css'

export default function Chronologie() {
  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <StarBackground />
      <div className="page-container">
        <div className="page-header">
          <span className="eyebrow">Chronologie</span>
          <h1>Les arcs narratifs</h1>
          <p>Le fil de l'histoire, arc par arc, de la première rencontre nocturne jusqu'au Paradise Arc.</p>
        </div>
        <div className="timeline">
          {arcs.map((arc, index) => {
            const couvertures = arc.tomeNumeros
              .map((n) => tomes.find((t) => t.numero === n))
              .filter((t): t is (typeof tomes)[number] => Boolean(t))
            return (
              <Reveal key={arc.id} delay={Math.min(index, 5) * 60}>
                <div className="timeline-item">
                  <span className="timeline-index">{index + 1}</span>
                  <div className="timeline-card">
                    <div className="timeline-main">
                      <h2>{arc.titre}</h2>
                      <span className="tomes-range">{arc.tomes}</span>
                      <p>{arc.resume}</p>
                      <ul>
                        {arc.evenementsClefs.map((evt) => (
                          <li key={evt}>{evt}</li>
                        ))}
                      </ul>
                    </div>
                    {couvertures.length > 0 && (
                      <div className="timeline-covers">
                        {couvertures.map((tome) => (
                          <Link to="/tomes" key={tome.numero} title={tome.titre}>
                            <img src={tome.image} alt={tome.titre} loading="lazy" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}
