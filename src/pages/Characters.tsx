import NavBar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import CharacterCard from "../components/CharacterCard"
import Reveal from "../components/Reveal"
import { Search } from "../components/Icons"
import { characters, vampires } from "../data/characters"
import './Characters.css'
import { useMemo, useState } from 'react'

const toutLesPersonnages = [...characters, ...vampires]

type Filtre = 'tous' | 'humains' | 'vampires'

export default function Characters() {
  const [recherche, setRecherche] = useState('')
  const [filtre, setFiltre] = useState<Filtre>('tous')

  const personnagesFiltres = useMemo(() => {
    return toutLesPersonnages.filter((p) => {
      const correspondFiltre =
        filtre === 'tous' || (filtre === 'vampires' ? p.estVampire : !p.estVampire)
      const correspondRecherche = p.nom.toLowerCase().includes(recherche.toLowerCase())
      return correspondFiltre && correspondRecherche
    })
  }, [recherche, filtre])

  return (
  <div style={{ position: "relative" }}>
    <NavBar />
    <StarBackground />
    <div className="characters-page">
      <div className="page-header">
        <span className="eyebrow">Casting</span>
        <h1>Personnages</h1>
        <p>Les humains et les vampires qui traversent les nuits de Yofukashi no Uta.</p>
      </div>

      <div className="filters">
        <div className="search-wrap">
          <Search size={15} className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher un personnage..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>
        <div className="filter-group">
          {(['tous', 'humains', 'vampires'] as Filtre[]).map((f) => (
            <button
              key={f}
              className={filtre === f ? "actif" : ""}
              onClick={() => setFiltre(f)}
            >
              {f === 'tous' ? 'Tous' : f === 'humains' ? 'Humains' : 'Vampires'}
            </button>
          ))}
        </div>
      </div>

      {personnagesFiltres.length === 0 ? (
        <p className="no-result">Aucun personnage ne correspond à la recherche.</p>
      ) : (
        <div className="person-grid">
          {personnagesFiltres.map((personnage, i) => (
            <Reveal key={personnage.id} delay={(i % 8) * 50}>
              <CharacterCard personnage={personnage} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  </div>
  )
}
