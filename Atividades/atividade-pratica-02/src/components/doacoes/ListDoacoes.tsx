import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api";
import { LocalInterface } from "../locais/ListLocais";
import { PessoaInterface } from "../pessoas/ListPessoas";

export interface DoacaoInterface {
    id: number;
    pessoa_id: number;
    local_id: number;
    created_at: string;
    updated_at: string;
    pessoa: PessoaInterface;
    local: LocalInterface;
}

const ListDoacoes = () => {

    const [ doacoes, setDoacoes ] = useState<DoacaoInterface[]>([]);  
    
    useEffect(() =>{

        api.get('/doacoes')
            .then(response => {
                console.log(response.data);
                setDoacoes(response.data);
            })

    }, [])

    const handleDeleteDoacao = async (id: number) => {

        // Validações
        if ( !window.confirm( "Confirma exclusão da Doação?" ) ) {
            return
        }

        try {
            await api.delete('/doacoes', 
            {
                data: {
                    id
                }
            });

            alert("Doação excluída com sucesso!");

            // Atualizar?
            setDoacoes( doacoes.filter(pessoa => pessoa.id != id) );

        } catch(error) {
            alert("Erro na exclusão da Doação!");
            console.error(error);
        }

    }


    return(

        <div>

            <h2>Lista de Doações</h2>

            <div>
                <Link to="/">Voltar</Link>
            </div>
            <div>
                <Link to="/doacoes/create">Cadastrar Doação</Link>
            </div>

            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Pessoa</th>
                        <th>Local</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                
                <tbody>
                    {doacoes.map(doacao => (
                        <tr key={doacao.id}>
                            <td>{doacao.id}</td>
                            <td>{doacao.pessoa.nome}</td>
                            <td>{doacao.local.nome}</td>
                            <td>{doacao.created_at}</td>
                            <td>{doacao.updated_at}</td>
                            <td><Link 
                                to={`/doacoes/update/${doacao.id}`}>Atualizar</Link></td>
                            <td><button onClick={()=>{ 
                                handleDeleteDoacao(doacao.id)
                             }}>Excluir</button> </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>

        </div>

    )

}

export default ListDoacoes;