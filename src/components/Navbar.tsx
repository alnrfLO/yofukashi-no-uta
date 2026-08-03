import { Link, useLocation } from "react-router-dom"
import { Moon } from './Icons'
import './Navbar.css'

const liens = [
    { to: "/", label: "Accueil" },
    { to: "/personnages", label: "Personnages" },
    { to: "/tomes", label: "Tomes" },
    { to: "/chronologie", label: "Chronologie" },
    { to: "/lieux", label: "Lieux" },
    { to: "/musiques", label: "Musiques" },
]

function NavBar() {
    const { pathname } = useLocation()
    return (
        <div className="navbar">
            <Link to="/" className="brand">
                <Moon size={19} className="brand-moon" />
                <span className="brand-text">Yofukashi no Uta</span>
            </Link>
            <nav>
                {liens.map((lien) => (
                    <Link
                        key={lien.to}
                        to={lien.to}
                        className={pathname === lien.to ? "actif" : ""}
                    >
                        {lien.label}
                    </Link>
                ))}
            </nav>
        </div>
    )
}
export default NavBar
