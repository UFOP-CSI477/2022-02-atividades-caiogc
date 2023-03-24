import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../services/api"

export interface CategoriaInterface {
    id: number;
    nome: string;
}

const ListCategorias = () => {

    const [ categorias, setCategorias ] = useState<CategoriaInterface[]>([]);  
    
    useEffect(() =>{

        api.get('/categorias')
            .then(response => {
                console.log(response.data);
                setCategorias(response.data);
            })

    }, [])


    return(

        <div>

            <h2>Lista de Categorias</h2>

            <div>
                <Link to="/">Voltar</Link>
            </div>

            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                
                <tbody>
                    {categorias.map(categoria => (
                        <tr key={categoria.id}>
                            <td>{categoria.id}</td>
                            <td>{categoria.nome}</td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>

        </div>

    )

}

export default ListCategorias;