import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { PessoaInterface } from "../pessoas/ListPessoas";
import { LocalInterface } from "../locais/ListLocais";

const CreateDoacao = () => {
    
    const navigate = useNavigate();

    const [pessoaId, setPessoaId] = useState(0);
    const [localId, setLocalId] = useState(0);

    const [ pessoas, setPessoas ] = useState<PessoaInterface[]>([]);
    const [ locais, setLocais ] = useState<LocalInterface[]>([]);

    useEffect(() => {

        api.get('/pessoas')
            .then(response => {
                setPessoas(response.data);
            })
        api.get('/locais')
            .then(response => {
                setLocais(response.data);
            })

    })

    const handleNewDoacao = async (event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            pessoa_id: pessoaId,
            local_id: localId
        }

        try {
            
            await api.post('/doacoes', data);
            alert('Doação cadastrada com sucesso');
            navigate('/doacoes');

        } catch (error) {
            alert('Erro ao cadastrar Doação!');
            console.error(error);
        }

    }

    return(

        <div>
            <h3>Cadastro de Doações: {
                pessoas.map(pessoa => (
                    <h4>{pessoa.nome}</h4>
                ))
            }
            </h3>

            <form onSubmit={handleNewDoacao}>

                <div>
                    <label htmlFor="pessoa">Nome da Pessoa</label>

                    <input type="search" 
                        name="pessoa" 
                        id="pessoa" 
                        list="listPessoas"
                        onChange={e => 
                            setPessoaId(parseInt(e.target.value))
                        }
                    />
                    <datalist id="listPessoas">
                    {
                            pessoas.map(pessoa => (
                                <option
                                    value={pessoa.id}>{pessoa.nome}</option>
                            ))
                        }
                    </datalist>    
                </div>

                <div>
                    <label htmlFor="local">Local</label>

                    <input type="search" 
                        name="local" 
                        id="local" 
                        list="listLocais"
                        onChange={e => 
                            setPessoaId(parseInt(e.target.value))
                        }
                    />
                    <datalist id="listLocais">
                    {
                            locais.map(local => (
                                <option
                                    value={local.id}>{local.nome}</option>
                            ))
                        }
                    </datalist>

                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
                <Link to="/doacoes">Voltar</Link>
            </form>
        </div>

    );



}

export default CreateDoacao;