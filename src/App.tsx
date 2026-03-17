import { BrowserRouter, Routes, Route } from "react-router-dom"
import  Home  from "./pages/Home"
import  Characters   from "./pages/Characters"
import  CharacterDetail   from "./pages/CharacterDetail"

function App () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App 