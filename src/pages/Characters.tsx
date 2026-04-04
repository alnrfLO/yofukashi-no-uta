import NavBar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import { characters, vampires } from "../data/characters"
import './Characters.css'
import { useState } from 'react'


const toutLesPersonnage  = [...characters, ...vampires]

export default function Characters() {
  const [selected, setSelected] = useState(toutLesPersonnage[0])
  return (
  <div style={{ position: "relative" }}>
    <NavBar />
    <StarBackground />
    <div className="characters-page">
      <div className="diagonal-section">
      {toutLesPersonnage.map((personnage) => (
        <div
          key={personnage.nom}
          className={personnage.nom === selected.nom ? "cadre actif" : "cadre flou"}
          onClick={() => setSelected(personnage)}
        >
          <img src={personnage.image} alt={personnage.nom} />
        </div>
      ))}
      </div>
      <div className="info-section">
        <h2>{selected.nom}</h2>
        <p>{selected.descriptions}</p>
        <p>Age : {selected.age}</p>
        <p>Objectif : {selected.objectif}</p>
        <p>Personnalité : {selected.personnalite.join(', ')}</p>
        <span>{selected.estVampire ? "🧛 Vampire" : "👤 Humain"}</span>
      </div>
    </div>
  </div>
  )
}