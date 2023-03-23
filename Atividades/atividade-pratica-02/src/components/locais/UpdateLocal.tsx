import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CidadeInterface } from "../cidades/ListCidades";

const UpdateLocal = () => {
    
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [cidadeId, setCidadeId] = useState(0);

    const [ cidades, setCidades ] = useState<CidadeInterface []>([]);    
 
    const { id } = useParams();
    

    useEffect(() => {

        api.get('/cidades')
            .then(response => {
                setCidades(response.data);
            })

    },[])

    useEffect(() => {

        api.get(`/locais/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setCidadeId(response.data.cidade_id);
            })

    }, [id]);

    const handleUpdateLocal = async (event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            id,
            nome,
            cidade_id: cidadeId
        }

        try {
            
            await api.put('/locais', data);
            alert('Local atualizado com sucesso');
            navigate('/locais');

        } catch (error) {
            alert('Erro ao atualizar Local!');
            console.error(error);
        }

    }

    return(

        <div>
            <h3>Atualização de Local: {nome}-{cidadeId}</h3>

            <form onSubmit={handleUpdateLocal}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        placeholder="Nome do Local"
                        onChange={e => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="cidade">Cidade</label>

                    <select 
                        name="cidade" 
                        id="cidade"
                        value={cidadeId}
                        onChange={e => 
                            setCidadeId(parseInt(e.target.value))
                        }
                        >

                        <option 
                            value="0" 
                            selected>Selecione:</option>

                        {
                            cidades.map(cidade => (
                                <option
                                    value={cidade.id}>{cidade.nome}</option>
                            ))
                        }

                    </select>

                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
                <Link to="/locais">Voltar</Link>
            </form>
        </div>

    );



}

export default UpdateLocal;