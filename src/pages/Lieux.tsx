import { Link } from "react-router-dom"
import NavBar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import Reveal from "../components/Reveal"
import { useTilt } from "../hooks/useTilt"
import { lieux } from "../data/lieux"
import { characters, vampires } from "../data/characters"
import type { Lieu } from "../types/index"
import './Tomes.css'
import './Lieux.css'

const toutLesPersonnages = [...characters, ...vampires]

function LieuCard({ lieu }: { lieu: Lieu }) {
  const tilt = useTilt<HTMLDivElement>(5)
  return (
    <div className="lieu-card" ref={tilt.ref} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}>
      <Link to={`/lieu/${lieu.id}`} className="lieu-media-link">
        <div className="lieu-media">
          <img src={lieu.image} alt={lieu.nom} loading="lazy" />
          <h2>{lieu.nom}</h2>
        </div>
      </Link>
      <div className="lieu-body">
        <p>{lieu.description}</p>
        <div className="membres-list">
          {lieu.personnagesLies.map((nom) => {
            const personnage = toutLesPersonnages.find((p) => p.nom === nom)
            return personnage ? (
              <Link key={nom} to={`/personnage/${personnage.id}`} className="membre-tag">
                {nom}
              </Link>
            ) : (
              <span key={nom} className="membre-tag">{nom}</span>
            )
          })}
        </div>
        <Link to={`/lieu/${lieu.id}`} className="lieu-more">En savoir plus →</Link>
      </div>
    </div>
  )
}

export default function Lieux() {
  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <StarBackground />
      <div className="page-container">
        <div className="page-header">
          <span className="eyebrow">Géographie nocturne</span>
          <h1>Lieux clés</h1>
          <p>Les décors qui rythment les virées nocturnes de Kô et Nazuna.</p>
        </div>
        <div className="lieu-grid">
          {lieux.map((lieu, i) => (
            <Reveal key={lieu.id} delay={(i % 6) * 60}>
              <LieuCard lieu={lieu} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
