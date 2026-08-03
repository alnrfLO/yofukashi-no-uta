import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Characters from "./pages/Characters"
import CharacterDetail from "./pages/CharacterDetail"
import Tomes from "./pages/Tomes"
import Chronologie from "./pages/Chronologie"
import Lieux from "./pages/Lieux"
import LieuDetail from "./pages/LieuDetail"
import Musiques from "./pages/Musiques"

function AnimatedRoutes() {
    const location = useLocation()
    return (
        <div key={location.pathname} className="route-fade">
            <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/personnages" element={<Characters />} />
                <Route path="/personnage/:id" element={<CharacterDetail />} />
                <Route path="/tomes" element={<Tomes />} />
                <Route path="/chronologie" element={<Chronologie />} />
                <Route path="/lieux" element={<Lieux />} />
                <Route path="/lieu/:id" element={<LieuDetail />} />
                <Route path="/musiques" element={<Musiques />} />
            </Routes>
        </div>
    )
}

function App() {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    )
}

export default App
