import { CheckBox } from '@mui/icons-material';
import { Box,  Checkbox,  FormControl,  FormControlLabel,  FormGroup,  Input,  InputLabel,  Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import api from "../services/api"
import { CategoriaInterface } from './ListCategorias';
import ListEventos, { EventoInterface } from './ListEventos';
import TopBar from './TopBar';

const Home = () => {
    
    const [ eventos, setEventos ] = useState<EventoInterface[]>([]);  
    const [ categorias, setCategorias ] = useState<CategoriaInterface[]>([]);  
    
    useEffect(() =>{

        api.get('/eventos')
            .then(response => {
                console.log(response.data);
                setEventos(response.data);
            })
            api.get('/categorias')
            .then(response => {
                console.log(response.data);
                setCategorias(response.data);
            })


    }, [])


    return(
        <Box>
            <TopBar/>
            
            <Box mt={8}>
                <Typography variant='h4' textAlign='left' color='primary.main' py={2} my={1}>Próximos Eventos:</Typography>
                <ListEventos />
            </Box>
            <Box mt={8}>
                <Typography variant='h4' textAlign='left' color='primary.main' py={2} mt={1}>Filtre por Categoria:</Typography>
                <div>
                {categorias.map(categoria => (
                    <FormControl>
                        <FormGroup aria-label="categorias" >
                        <FormControlLabel
                            value={categoria.nome}
                            control={<Checkbox/>}
                            label={categoria.nome}
                            labelPlacement="end"
                            
                    />
                

                        </FormGroup>
                    </FormControl>

                ))}
                </div>
                <ListEventos />
            </Box>

        </Box>
    );

}

export default Home;