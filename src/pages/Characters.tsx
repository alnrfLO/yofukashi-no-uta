import NavBar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import { characters, vampires } from "../data/characters"
import './Characters.css'
import CharacterCard from "../components/CharacterCard"


const toutLesPersonnage  = [...characters, ...vampires]

export default function Characters() {
  return (
    <div className="hero" style={{ position: "relative" }}>
      <NavBar />
      <StarBackground />
    <div className="characters-grid">
      {toutLesPersonnage.map((personnage) => (
        <CharacterCard key={personnage.nom} personnage={personnage} />
      ))}
    </div>
    </div>
  )
}