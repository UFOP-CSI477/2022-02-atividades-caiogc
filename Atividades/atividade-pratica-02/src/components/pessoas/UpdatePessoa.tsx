import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CidadeInterface } from "../cidades/ListCidades";
import { TipoInterface } from "../tipos_sanguineos/ListTipos";

const UpdatePessoa = () => {
    
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [cidadeId, setCidadeId] = useState(0);
    const [tipoId, setTipoId] = useState(0);

    const [ cidades, setCidades ] = useState<CidadeInterface[]>([]);
    const [ tipos, setTipos ] = useState<TipoInterface[]>([]);
 
    const { id } = useParams();

    useEffect(() => {

        api.get('/cidades')
            .then(response => {
                setCidades(response.data);
            })

        api.get('/tipos_sanguineos')
            .then(response => {
                setTipos(response.data);
            })

    },[])

    useEffect(() => {

        api.get(`/pessoas/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setCidadeId(response.data.cidade_id);
                setTipoId(response.data.cidade_id);
            })

    }, [id]);

    const handleUpdatePessoa = async (event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            nome,
            cidade_id: cidadeId,
            tipo_id: tipoId
        }

        try {
            
            await api.put('/pessoas', data);
            alert('Pessoa atualizada com sucesso');
            navigate('/pessoas');

        } catch (error) {
            alert('Erro ao atualizar Pessoa!');
            console.error(error);
        }

    }

    return(

        <div>
            <h3>Atualização de Pessoa: {nome}</h3>

            <form onSubmit={handleUpdatePessoa}>

            <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        placeholder="Nome da pessoa"
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
                <div>
                    <label htmlFor="tipo">Tipo Sanguineo</label>

                    <select 
                        name="tipo" 
                        id="tipo"
                        value={tipoId}
                        onChange={e => 
                            setTipoId(parseInt(e.target.value))
                        }
                        >

                        <option 
                            value="0" 
                            selected>Selecione:</option>

                        {
                            tipos.map(tipo => (
                                <option
                                    value={tipo.id}>{tipo.tipo}</option>
                            ))
                        }

                    </select>

                </div>

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>
                <Link to="/pessoas">Voltar</Link>
            </form>
        </div>

    );



}

export default UpdatePessoa;