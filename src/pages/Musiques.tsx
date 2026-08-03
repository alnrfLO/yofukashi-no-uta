import { useState } from "react"
import NavBar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import Reveal from "../components/Reveal"
import { Music } from "../components/Icons"
import { musiques } from "../data/musiques"
import type { Musique } from "../types/index"
import './Tomes.css'
import './Musiques.css'

function MusiqueCard({ m }: { m: Musique }) {
  const [lecture, setLecture] = useState(false)

  return (
    <div className="musique-card">
      <div className="musique-card-top">
        <span className={m.type === 'Opening' ? "musique-type opening" : "musique-type ending"}>
          <Music size={12} /> {m.type}
        </span>
        <span className="musique-saison">{m.saison}</span>
      </div>
      <h2>{m.titre}</h2>
      <span className="musique-interprete">{m.interprete}</span>
      <p>{m.description}</p>
      {m.signification && <p className="musique-meaning">{m.signification}</p>}

      {m.youtubeId ? (
        lecture ? (
          <div className="musique-player">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${m.youtubeId}?autoplay=1`}
              title={`${m.titre} — ${m.interprete}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <button type="button" className="musique-play" onClick={() => setLecture(true)}>
            ▶ Écouter le clip
          </button>
        )
      ) : (
        <a
          className="musique-play musique-play-link"
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`Creepy Nuts ${m.titre} official`)}`}
          target="_blank"
          rel="noreferrer"
        >
          Rechercher sur YouTube ↗
        </a>
      )}

      <div className="musique-episodes">{m.episodes}</div>
    </div>
  )
}

export default function Musiques() {
  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <StarBackground />
      <div className="page-container">
        <div className="page-header">
          <span className="eyebrow">Bande originale</span>
          <h1>Openings & Endings</h1>
          <p>Les génériques de l'adaptation animée, tous interprétés par le duo Creepy Nuts.</p>
        </div>
        <div className="musiques-grid">
          {musiques.map((m, i) => (
            <Reveal key={m.id} delay={(i % 4) * 70}>
              <MusiqueCard m={m} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
