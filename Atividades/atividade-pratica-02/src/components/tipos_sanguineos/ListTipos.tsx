import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"

export interface TipoInterface {
    id: number;
    tipo: string;
    fator: string;
    created_at: string;
    updated_at: string;
}

const ListTipos = () => {

    const [ tipos, setTipos ] = useState<TipoInterface[]>([]);  
    
    useEffect(() =>{

        api.get("/tipos_sanguineos")
            .then(response => {
                console.log(response.data);
                setTipos(response.data);
            })

    }, [])

    return(

        <div>

            <h2>Lista de Tipos Sanguineos</h2>

            <div>
                <Link to="/">Voltar</Link>
            </div>
            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo Sanguineo</th>
                        <th>Fator</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                    </tr>
                </thead>
                
                <tbody>
                    {tipos.map(tipo => (
                        <tr key={tipo.id}>
                            <td>{tipo.id}</td>
                            <td>{tipo.tipo}</td>
                            <td>{tipo.fator}</td>
                            <td>{tipo.created_at}</td>
                            <td>{tipo.updated_at}</td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>

        </div>

    )

}

export default ListTipos;