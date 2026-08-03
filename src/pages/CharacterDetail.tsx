import { Link, useParams } from "react-router-dom"
import NavBar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import { ArrowLeft, Droplet, User } from "../components/Icons"
import Reveal from "../components/Reveal"
import { characters, vampires } from "../data/characters"
import './CharacterDetail.css'

const toutLesPersonnages = [...characters, ...vampires]

export default function CharacterDetail() {
  const { id } = useParams()
  const personnage = toutLesPersonnages.find((p) => p.id === id)
  const estVampire = personnage?.estVampire
    ? vampires.find((v) => v.id === id)
    : undefined

  if (!personnage) {
    return (
      <div style={{ position: "relative" }}>
        <NavBar />
        <StarBackground />
        <div className="not-found">
          <p>Personnage introuvable.</p>
          <Link className="retour" to="/personnages"><ArrowLeft size={14} /> Retour aux personnages</Link>
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
          <img src={personnage.image} alt={personnage.nom} />
          <div className="detail-infos">
            <Link className="retour" to="/personnages"><ArrowLeft size={14} /> Retour aux personnages</Link>
            <span className="badge">
              {personnage.estVampire ? <Droplet size={13} /> : <User size={13} />}
              {personnage.estVampire ? "Vampire" : "Humain"}
            </span>
            <h1>{personnage.nom}</h1>
            {personnage.aussiConnuSous && (
              <p className="aka">Aussi connu(e) sous le nom de {personnage.aussiConnuSous}</p>
            )}
            {personnage.infoNonVerifiee && (
              <p className="warning-note">⚠️ Personnage secondaire : les informations ci-dessous n'ont pas pu être confirmées à 100 % et sont à prendre avec précaution.</p>
            )}
            <p>{personnage.descriptions}</p>
            <div className="stat-grid">
              <div className="stat-block">
                <span className="label">Âge</span>
                <span className="value">{personnage.age}</span>
              </div>
              <div className="stat-block">
                <span className="label">Première apparition</span>
                <span className="value">{personnage.premiereApparition}</span>
              </div>
              <div className="stat-block">
                <span className="label">Objectif</span>
                <span className="value">{personnage.objectif}</span>
              </div>
              <div className="stat-block">
                <span className="label">Personnalité</span>
                <span className="value">{personnage.personnalite.join(', ')}</span>
              </div>
              <div className="stat-block">
                <span className="label">Intérêt romantique</span>
                <span className="value">{personnage.interetRomantique || 'Aucun'}</span>
              </div>
              {estVampire && (
                <>
                  <div className="stat-block">
                    <span className="label">Pouvoir</span>
                    <span className="value">{estVampire.pouvoir}</span>
                  </div>
                  <div className="stat-block">
                    <span className="label">Objet souvenir</span>
                    <span className="value">{estVampire.objetSouvenir || 'Aucun'}</span>
                  </div>
                  <div className="stat-block">
                    <span className="label">Clan / lignée</span>
                    <span className="value">{estVampire.clan}</span>
                  </div>
                  {estVampire.creePar && (
                    <div className="stat-block">
                      <span className="label">Créé(e) par</span>
                      <span className="value">{estVampire.creePar}</span>
                    </div>
                  )}
                  {estVampire.kouhai && estVampire.kouhai.length > 0 && (
                    <div className="stat-block">
                      <span className="label">Kôhai</span>
                      <span className="value">{estVampire.kouhai.join(', ')}</span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </div>
  )
}
