import { useState } from "react"
import NavBar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import Modal from "../components/Modal"
import Reveal from "../components/Reveal"
import { useTilt } from "../hooks/useTilt"
import { tomes } from "../data/tomes"
import { arcs } from "../data/arcs"
import type { Tome } from "../types/index"
import './Tomes.css'

const arcsAvecTomes = arcs
  .map((arc) => ({
    arc,
    tomes: arc.tomeNumeros
      .map((n) => tomes.find((t) => t.numero === n))
      .filter((t): t is Tome => Boolean(t)),
  }))
  .filter((group) => group.tomes.length > 0)

function TomeCard({ tome, onOpen }: { tome: Tome; onOpen: () => void }) {
  const tilt = useTilt<HTMLButtonElement>(8)
  return (
    <button
      type="button"
      className="tome-card"
      onClick={onOpen}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <img src={tome.image} alt={tome.titre} loading="lazy" />
      <h3>{tome.titre}</h3>
    </button>
  )
}

export default function Tomes() {
  const [tomeOuvert, setTomeOuvert] = useState<Tome | null>(null)

  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <StarBackground />
      <div className="page-container">
        <div className="page-header">
          <span className="eyebrow">Bibliographie</span>
          <h1>Les tomes</h1>
          <p>Les 20 volumes de la série, regroupés par arc. Clique sur une couverture pour lire le résumé.</p>
        </div>

        <nav className="arc-jumplist">
          {arcsAvecTomes.map(({ arc }) => (
            <a key={arc.id} href={`#${arc.id}`}>{arc.titre}</a>
          ))}
        </nav>

        {arcsAvecTomes.map(({ arc, tomes: tomesDeLArc }) => (
          <section className="arc-section" id={arc.id} key={arc.id}>
            <Reveal>
              <div className="arc-section-header">
                <h2>{arc.titre}</h2>
                <span className="arc-section-range">{arc.tomes}</span>
              </div>
            </Reveal>
            <div className="tomes-grid">
              {tomesDeLArc.map((tome, i) => (
                <Reveal key={tome.numero} delay={(i % 6) * 60}>
                  <TomeCard tome={tome} onOpen={() => setTomeOuvert(tome)} />
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      {tomeOuvert && (
        <Modal onClose={() => setTomeOuvert(null)}>
          <div className="tome-modal">
            <img src={tomeOuvert.image} alt={tomeOuvert.titre} />
            <div className="tome-modal-body">
              <span className="arc-section-range">{tomeOuvert.arc}</span>
              <h2>{tomeOuvert.titre}</h2>
              <p>{tomeOuvert.description}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
