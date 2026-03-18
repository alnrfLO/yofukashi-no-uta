import NavBar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import './Home.css'
import { tomes } from '../data/tomes'

export default function Home() {
  return (
    <div className="hero" style={{ position: "relative" }}>
      <NavBar />
      <StarBackground />
      <div className="tome1">
        <img src="https://www.nautiljon.com/images/manga/00/04/mini/call_of_the_night_12040.webp?11711656487" alt="Cover tome 1" />
        <div className="ecriture">
          <h2>Tome 1</h2>
          <p>En une rencontre, la vie peut reprendre du mordant ! Impossible de résister à l'appel de la nuit !! La nuit où Kô Yamori, collégien et éternel insomniaque, décide de sortir se promener seul, il fait la rencontre de Nazuna Nanakusa, une jolie vampire. "Veille jusqu'à ce que tu sois satisfait de ta journée, Garçon !" Sa veillée seule avec elle va bouleverser le destin de Kô...</p>
        </div>
      </div>
      <div className="covers">
        {tomes.map((tome) => (
          <img key={tome.numero} src={tome.image} alt={tome.titre} />
        ))}
      </div>
    </div>
  )
}