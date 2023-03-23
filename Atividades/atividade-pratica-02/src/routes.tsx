import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import ListEstados from './components/estados/ListEstados';
import CreateEstado from './components/estados/CreateEstado';

import UpdateEstado from './components/estados/UpdateEstado';
import ListCidades from './components/cidades/ListCidades';
import CreateCidade from './components/cidades/CreateCidade';
import UpdateCidade from './components/cidades/UpdateCidade';
import ListTipos from './components/tipos_sanguineos/ListTipos';
import CreatePessoa from './components/pessoas/CreatePessoa';
import ListPessoas from './components/pessoas/ListPessoas';
import UpdatePessoa from './components/pessoas/UpdatePessoa';
import CreateLocal from './components/locais/CreateLocal';
import ListLocais from './components/locais/ListLocais';
import UpdateLocal from './components/locais/UpdateLocal';
import CreateDoacao from './components/doacoes/CreateDoacao';
import ListDoacoes from './components/doacoes/ListDoacoes';
import UpdateDoacao from './components/doacoes/UpdateDoacao';

const AppRoutes = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> } />


                <Route path="/estados" element={ <ListEstados /> } />
                <Route path="/estados/create" element={ <CreateEstado /> } />
                <Route path="/estados/update/:id" element={<UpdateEstado />} />

                <Route path="/cidades" element={<ListCidades />} />
                <Route path="/cidades/create" element={ <CreateCidade /> } />
                <Route path="/cidades/update/:id" element={ <UpdateCidade /> } />

                <Route path="/tipos_sanguineos" element={<ListTipos />} />

                <Route path="/pessoas/create" element={<CreatePessoa />} />
                <Route path="/pessoas" element={<ListPessoas />} />
                <Route path="/pessoas/update/:id" element={ <UpdatePessoa /> } />

                <Route path="/locais/create" element={<CreateLocal />} />
                <Route path="/locais" element={<ListLocais />} />
                <Route path="/locais/update/:id" element={<UpdateLocal />} />

                <Route path="/doacoes/create" element={<CreateDoacao />} />
                <Route path="/doacoes/" element={<ListDoacoes />} />
                <Route path="/doacoes/update/:id" element={<UpdateDoacao />} />



            </Routes>
        </BrowserRouter>

    );

}

export default AppRoutes;