import type { Character } from '../types/index'

interface Props {
  personnage: Character
}

function CharacterCard ({personnage} : Props) {
    return (
        <div>
            <h3>{personnage.nom}</h3>
            <img src={personnage.image} alt={personnage.nom} />
            <span>{personnage.estVampire ? "🧛 Vampire" : "👤 Humain"}</span>
        </div>
    )
}

export default CharacterCard