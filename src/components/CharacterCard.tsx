import type { Character } from '../types/index'

interface Props {
  personnage: Character
}

function CharacterCard ({personnage} : Props) {
    return (
        <div className='card'>
            <img src={personnage.image} alt={personnage.nom} />
            <h3>{personnage.nom}</h3>
            <span>{personnage.estVampire ? "🧛 Vampire" : "👤 Humain"}</span>
        </div>
    )
}

export default CharacterCard