import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import NavBar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import Reveal from "../components/Reveal"
import { Users, BookOpen, Clock, MapPin, Music } from "../components/Icons"
import { useTilt } from "../hooks/useTilt"
import './Home.css'
import { tomes } from '../data/tomes'
import { characters, vampires } from '../data/characters'
import { arcs } from '../data/arcs'
import { lieux } from '../data/lieux'
import { musiques } from '../data/musiques'

const sections = [
    { to: "/personnages", titre: "Personnages", desc: "Humains et vampires de l'histoire", Icon: Users, total: characters.length + vampires.length },
    { to: "/tomes", titre: "Tomes", desc: "Les volumes du manga", Icon: BookOpen, total: tomes.length },
    { to: "/chronologie", titre: "Chronologie", desc: "Les grands arcs narratifs", Icon: Clock, total: arcs.length },
    { to: "/lieux", titre: "Lieux", desc: "Les décors clés de l'histoire", Icon: MapPin, total: lieux.length },
    { to: "/musiques", titre: "Musiques", desc: "Openings & endings de l'anime", Icon: Music, total: musiques.length },
]

const toutLesPersonnages = [...characters, ...vampires]
const idsPhares = ['nazuna-nanakusa', 'kou-yamori', 'kiku-hoshimi', 'anko-uguisu', 'mahiru-seki', 'akira-asai', 'midori-kohakobe']
const personnagesPhares = idsPhares
  .map((id) => toutLesPersonnages.find((p) => p.id === id))
  .filter((p): p is (typeof toutLesPersonnages)[number] => Boolean(p))

function SectionCard({ s }: { s: (typeof sections)[number] }) {
  const tilt = useTilt<HTMLAnchorElement>(6)
  return (
    <Link
      to={s.to}
      className="section-card"
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div className="section-card-top">
        <span className="icon-badge"><s.Icon size={20} /></span>
        <span className="section-card-total">{s.total}</span>
      </div>
      <h3>{s.titre}</h3>
      <p>{s.desc}</p>
    </Link>
  )
}

function PhareItem({ p }: { p: (typeof toutLesPersonnages)[number] }) {
  const tilt = useTilt<HTMLSpanElement>(14)
  return (
    <Link to={`/personnage/${p.id}`} className="phare-item">
      <span className="phare-ring" ref={tilt.ref} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}>
        <img src={p.image} alt={p.nom} loading="lazy" />
      </span>
      <span className="phare-name">{p.nom}</span>
    </Link>
  )
}

export default function Home() {
  const [tomeAffiche, setTomeAffiche] = useState(tomes[0])
  const spotlightRef = useRef<HTMLDivElement>(null)

  const choisirTome = (numero: number) => {
    const tome = tomes.find((t) => t.numero === numero)
    if (!tome) return
    setTomeAffiche(tome)
    spotlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <StarBackground />

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Wiki non-officiel</span>
          <h1>Yofukashi no Uta</h1>
          <p className="subtitle">
            Call of the Night — l'encyclopédie de l'univers de Kotoyama : personnages, vampires,
            tomes, arcs narratifs et lieux qui rythment les nuits de Kô et Nazuna.
          </p>
          <div className="hero-cta">
            <Link to="/personnages" className="btn btn-primary">Découvrir les personnages</Link>
            <Link to="/tomes" className="btn btn-ghost">Explorer les tomes</Link>
          </div>
        </div>
        <a href="#phares" className="scroll-cue" aria-label="Défiler vers le contenu">
          <span />
        </a>
      </section>

      <div className="page-hero">
        <section className="phares-section" id="phares">
          <Reveal>
            <div className="gallery-label">
              <h3>Personnages phares</h3>
              <Link to="/personnages">Tous les personnages →</Link>
            </div>
          </Reveal>
          <div className="phares-row">
            {personnagesPhares.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <PhareItem p={p} />
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="spotlight-wrap">
          <div className="spotlight" ref={spotlightRef}>
            <img src={tomeAffiche.image} alt={`Couverture ${tomeAffiche.titre}`} />
            <div className="spotlight-text">
              <span className="eyebrow">{tomeAffiche.arc}</span>
              <h2>{tomeAffiche.titre}</h2>
              <p>{tomeAffiche.description}</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="gallery-label">
            <h3>Les tomes de la série</h3>
            <Link to="/tomes">Voir tous les tomes →</Link>
          </div>
        </Reveal>
        <Reveal className="tome-strip-wrap">
          <div className="tome-strip">
            {tomes.map((tome) => (
              <button
                type="button"
                key={tome.numero}
                className={tome.numero === tomeAffiche.numero ? "tome-thumb actif" : "tome-thumb"}
                onClick={() => choisirTome(tome.numero)}
              >
                <img src={tome.image} alt={tome.titre} title={tome.titre} />
              </button>
            ))}
          </div>
        </Reveal>

        <div className="sections-nav">
          {sections.map((s, i) => (
            <Reveal key={s.to} delay={i * 70}>
              <SectionCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
