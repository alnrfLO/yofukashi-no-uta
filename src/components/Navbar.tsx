import { Link } from "react-router-dom"
import './Navbar.css'
function NavBar () {
    return (
        <div className="navbar">
            <h1> yofukashi no uta wiki</h1>
            <nav>
                <Link to="/">Accueil </Link>
                <Link to="/characters">Personnages </Link>
            </nav>
        </div>
    )
}
export default NavBar