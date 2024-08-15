import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import './app.css'
import Home from "./pages/home/home.jsx";
import ListaArtigos from "./pages/listagem/listaArtigos.jsx";
import Artigo from "./pages/artigo/artigo.jsx";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import CriaArtigo from "./pages/criacaoArtigo/criaArtigo.jsx";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'artigo/:category/:id'} element={<Artigo/>}/>
                    <Route path={'listagem/:filtro'} element={<ListaArtigos/>}/>
                    <Route path={'admin/criacaoArtigo'} element={<CriaArtigo/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
