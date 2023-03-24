import { useEffect, useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { CategoriaInterface } from "./ListCategorias";
import { TextField, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";


const CreateEvento = () => {
    
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [dataEvento, setDataEvento] = useState('');
    const [local, setLocal] = useState('');
    const [img, setImg] = useState('');

    const [categoriaId, setCategoriaId] = useState(0);
    const [ categorias, setCategorias ] = useState<CategoriaInterface[]>([]);

    useEffect(() => {

        api.get('/categorias')
            .then(response => {
                setCategorias(response.data);
            })

    })

    const handleNewEvento = async (event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            nome,
            descricao,
            preco,
            dataEvento,
            local,
            img,
            caegoria_id: categoriaId
        }

        try {
            
            await api.post('/eventos', data);
            alert('Evento criado com sucesso');
            navigate('/eventos');

        } catch (error) {
            alert('Erro ao cadastrar Evento!');
            console.error(error);
        }

    }

    return(

        <div>



            <Box display="flex">
                <Box mb={5}>
                    <Typography variant="h4" fontWeight={700} mb={2}>
                        Criação de Evento
                    </Typography>

                <form onSubmit={handleNewEvento}>
                    <Grid container display="flex" alignItems="start">
                        <Grid item display="flex" alignSelf="flex-start" md={6}>
                            <Typography variant="h6">Nome do Evento:</Typography>
                        </Grid>
                        <Grid item md={12} mb={2}>
                            <FormControl color="primary" focused fullWidth>
                                <TextField
                                    size="small"
                                    fullWidth
                                    type="text"
                                    id="nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                ></TextField>
                            </FormControl>
                        </Grid>
                        
                    </Grid>

                    <Grid container display="flex" alignItems="start">
                        <Grid item xs={12} md={4} display="flex" alignSelf="flex-start">
                            <Typography fontWeight="600">Categoria:</Typography>
                        </Grid>
                        <Grid item xs={12} md={8} mb={2} display="flex" alignSelf="flex-start">                            
                            <select 
                                name="categoria" 
                                id="categoria"
                                value={categoriaId}
                                onChange={e => 
                                    setCategoriaId(parseInt(e.target.value))
                                }
                            >

                            <option 
                                value="0" 
                                selected>Selecione:</option>

                            {
                                categorias.map(categoria => (
                                    <option
                                        value={categoria.id}>{categoria.nome}</option>
                                ))
                            }

                        </select>
                           
                        </Grid>

                    </Grid>


                    <Grid container display="flex" alignItems="start">
                        <Grid item display="flex" alignSelf="flex-start" md={6}>
                            <Typography variant="h6">Sobre o Evento:</Typography>
                        </Grid>
                        <Grid item md={12} mb={2}>
                            <FormControl color="primary" focused fullWidth>                                               
                                <TextField
                                id="descricao"
                                label="Dê mais informações sobre o seu evento..."
                                multiline
                                rows={10}
                                fullWidth
                                onChange={e => setDescricao(e.target.value)}
                                />
                            </FormControl>
                        </Grid>                    
                    </Grid>

                    <Grid container display="flex" alignItems="start">
                        <Grid item md={12} my={2}>
                            <FormControl fullWidth variant="standard">
                                <InputLabel htmlFor="preco">Valor</InputLabel>
                                <Input
                                    id="preco"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    onChange={e => setDescricao(e.target.value)}
                                />
                            </FormControl>
                        </Grid>                    
                    </Grid>

                    <Grid container display="flex" alignItems="start">
                        <Grid item md={12} my={2}>
                            <InputLabel htmlFor="dataEvento">Data</InputLabel>
                            <Input type="date"
                                name="dataEvento"
                                id="dataEvento"
                                value={dataEvento}
                                fullWidth
                                onChange={e => setDataEvento(e.target.value)}
                                />
                        </Grid>                    
                    </Grid>

                    <Grid container display="flex" alignItems="start">
                        <Grid item display="flex" alignSelf="flex-start" md={6}>
                            <Typography variant="h6">Local:</Typography>
                        </Grid>
                        <Grid item md={12} mb={2}>
                            <FormControl color="primary" focused fullWidth variant="standard">
                                <TextField
                                    size="small"
                                    fullWidth
                                    type="text"
                                    id="local"
                                    value={local}
                                    onChange={(e) => setLocal(e.target.value)}
                                    required
                                ></TextField>
                            </FormControl>
                        </Grid>
                    </Grid>                      
                        <Grid container display="flex" alignItems="start">
                            <Grid item display="flex" alignSelf="flex-start" md={6}>
                                <Typography variant="h6">Banner do Evento:</Typography>
                            </Grid>
                            <Grid item md={12} mb={2}>
                                <FormControl fullWidth variant="standard">
                                    <InputLabel htmlFor="img">Insira um link</InputLabel>
                                    <Input
                                        id="img"
                                        onChange={e => setImg(e.target.value)}
                                    />
                                </FormControl>
                            </Grid>
                        
                        </Grid>

                    <Button fullWidth type="submit" variant="contained" color="primary">Cadastrar Evento</Button>
                    <Link to="/">Voltar</Link>
                </form>
                </Box>
            </Box>




        </div>

    );



}

export default CreateEvento;