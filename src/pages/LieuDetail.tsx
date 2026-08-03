import { Link, useParams } from "react-router-dom"
import NavBar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import { ArrowLeft, MapPin } from "../components/Icons"
import Reveal from "../components/Reveal"
import { lieux } from "../data/lieux"
import { characters, vampires } from "../data/characters"
import './CharacterDetail.css'
import './Lieux.css'

const toutLesPersonnages = [...characters, ...vampires]

export default function LieuDetail() {
  const { id } = useParams()
  const lieu = lieux.find((l) => l.id === id)

  if (!lieu) {
    return (
      <div style={{ position: "relative" }}>
        <NavBar />
        <StarBackground />
        <div className="not-found">
          <p>Lieu introuvable.</p>
          <Link className="retour" to="/lieux"><ArrowLeft size={14} /> Retour aux lieux</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <StarBackground />
      <div className="detail-page">
        <Reveal className="detail-card-wrap">
        <div className="detail-card">
          <img src={lieu.image} alt={lieu.nom} />
          <div className="detail-infos">
            <Link className="retour" to="/lieux"><ArrowLeft size={14} /> Retour aux lieux</Link>
            <span className="badge"><MapPin size={13} /> Lieu</span>
            <h1>{lieu.nom}</h1>
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
          </div>
        </div>
        </Reveal>
      </div>
    </div>
  )
}
