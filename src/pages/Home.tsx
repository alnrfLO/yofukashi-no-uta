import StarBackground from "../components/StarBackground"


export default function Home() {
  return (
    <div className="hero" style={{ position  : "relative"}}>
    <StarBackground  />
        <h1 style={{position: 'relative', zIndex: 1}}>Yofukashi no uta wiki</h1>
        <p style={{position: 'relative', zIndex: 1}}>pour l insatant je ne sais pas </p>
        <button style={{position: 'relative', zIndex: 1}}>appui ici </button>
    </div>
  )
}