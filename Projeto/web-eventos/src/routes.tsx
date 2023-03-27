import { Route, Routes, BrowserRouter } from "react-router-dom"
import App from "./App"
import CreateEvento from "./components/CreateEvento"
import EventoContent from "./components/EventoContent"
import ListCategorias from "./components/ListCategorias"
import ListEventos from "./components/ListEventos"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>

                <Route path="/eventos/create" element={<CreateEvento />} />
                <Route path="/categorias" element={<ListCategorias />} />
                <Route path="/eventos" element={<ListEventos />} />
                <Route path="/eventos/:id" element={<EventoContent />} />
            </Routes>
        
        </BrowserRouter>
    )
}

export default AppRoutes