import { Link } from 'react-router-dom'
import type { Character } from '../types/index'
import { Droplet, User } from './Icons'
import { useTilt } from '../hooks/useTilt'
import './CharacterCard.css'

interface Props {
  personnage: Character
}

function CharacterCard({ personnage }: Props) {
    const tilt = useTilt<HTMLDivElement>(10)
    return (
        <Link to={`/personnage/${personnage.id}`} className="person-card">
            <div
                className="person-card-media"
                ref={tilt.ref}
                onMouseMove={tilt.onMouseMove}
                onMouseLeave={tilt.onMouseLeave}
            >
                <img src={personnage.image} alt={personnage.nom} loading="lazy" />
                <span className={personnage.estVampire ? "type-pill vampire" : "type-pill humain"}>
                    {personnage.estVampire ? <Droplet size={12} /> : <User size={12} />}
                    {personnage.estVampire ? "Vampire" : "Humain"}
                </span>
                {personnage.infoNonVerifiee && (
                    <span className="unverified-pill" title="Informations non confirmées à 100 %">?</span>
                )}
            </div>
            <h3>{personnage.nom}</h3>
        </Link>
    )
}

export default CharacterCard
