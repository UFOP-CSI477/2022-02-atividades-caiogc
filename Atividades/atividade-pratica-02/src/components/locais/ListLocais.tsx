import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"
import { CidadeInterface } from "../cidades/ListCidades";


export interface LocalInterface {
    id: number;
    nome: string;
    cidade_id: number;
    created_at: string;
    updated_at: string;
    cidade: CidadeInterface
}

const ListLocais = () => {

    const [ locais, setLocais ] = useState<LocalInterface[]>([]);  
    
    useEffect(() =>{

        api.get('/locais')
            .then(response => {
                console.log(response.data);
                setLocais(response.data);
            })

    }, [])

    const handleDeleteLocal = async (id: number) => {

        // Validações
        if ( !window.confirm( "Confirma exclusão do Local?" ) ) {
            return
        }

        try {
            await api.delete('/locais', 
            {
                data: {
                    id
                }
            });

            alert("Local excluído com sucesso!");

            // Atualizar?
            setLocais( locais.filter(local => local.id != id) );

        } catch(error) {
            alert("Erro na exclusão do Local!");
            console.error(error);
        }

    }


    return(

        <div>

            <h2>Lista de Locais</h2>

            <div>
                <Link to="/">Voltar</Link>
            </div>
            <div>
                <Link to="/locais/create">Inserir Local</Link>
            </div>

            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Cidade</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                
                <tbody>
                    {locais.map(local => (
                        <tr key={local.id}>
                            <td>{local.id}</td>
                            <td>{local.nome}</td>
                            <td>{local.cidade.nome}</td>
                            <td>{local.created_at}</td>
                            <td>{local.updated_at}</td>
                            <td><Link 
                                to={`/locais/update/${local.id}`}>Atualizar</Link></td>
                            <td><button onClick={()=>{ 
                                handleDeleteLocal(local.id)
                             }}>Excluir</button> </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>

        </div>

    )

}

export default ListLocais;