import { Route, Routes, BrowserRouter } from "react-router-dom"
import App from "./App"
import CreateEvento from "./components/CreateEvento"
import ListCategorias from "./components/ListCategorias"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>

                <Route path="/eventos/create" element={<CreateEvento />} />
                <Route path="/categorias" element={<ListCategorias />} />
            </Routes>
        
        </BrowserRouter>
    )
}

export default AppRoutes