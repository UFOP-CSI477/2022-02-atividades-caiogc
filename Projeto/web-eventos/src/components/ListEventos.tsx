import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../services/api"
import { CategoriaInterface } from "./ListCategorias";

export interface EventoInterface {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    dataEvento: Date;
    local: string;
    img: string;
    created_at: string;
    updated_at: string;
    categoria: CategoriaInterface;
}

const ListEventos = () => {

    const [ eventos, setEventos ] = useState<EventoInterface[]>([]);  
    
    useEffect(() =>{

        api.get('/eventos')
            .then(response => {
                console.log(response.data);
                setEventos(response.data);
            })

    }, [])

    const handleDeleteEvento = async (id: number) => {

        // Validações
        if ( !window.confirm( "Confirma exclusão do Evento?" ) ) {
            return
        }

        try {
            await api.delete('/eventos', 
            {
                data: {
                    id
                }
            });

            alert("Evento excluído com sucesso!");

            // Atualizar?
            setEventos( eventos.filter(evento => evento.id != id) );

        } catch(error) {
            alert("Erro na exclusão do Evento!");
            console.error(error);
        }

    }


    return(

        <div>

            <h2>Eventos</h2>

            <div>
                <Link to="/">Voltar</Link>
            </div>
            <div>
                <Link to="/eventos/create">Cadastrar Evento</Link>
            </div>

            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Descição</th>
                        <th>Data</th>
                        <th>Preço</th>
                        <th>Local</th>
                        <th>Img</th>                    
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                
                <tbody>
                    {eventos.map(evento => (
                        <tr key={evento.id}>
                            <td>{evento.id}</td>
                            <td>{evento.nome}</td>
                            <td>{evento.categoria.nome}</td>
                            <td>{evento.descricao}</td>
                            <td>{evento.dataEvento}</td>
                            <td>{evento.preco}</td>
                            <td>{evento.local}</td>
                            <td>{evento.img}</td>
                            <td>{evento.created_at}</td>
                            <td>{evento.updated_at}</td>
                            <td><Link 
                                to={`/eventos/update/${evento.id}`}>Atualizar</Link></td>
                            <td><button onClick={()=>{ 
                                handleDeleteEvento(evento.id)
                             }}>Excluir</button> </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>

        </div>

    )

}

export default ListEventos;