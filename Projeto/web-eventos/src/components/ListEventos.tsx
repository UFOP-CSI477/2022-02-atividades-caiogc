import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react"
import api from "../services/api"
import { CategoriaInterface } from "./ListCategorias";

export interface EventoInterface {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    dataEvento: string;
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
            <Grid container spacing={3} p={2} maxWidth="xl">                           
                {eventos.map(evento => (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href={`/eventos/${evento.id}`}>
                                <CardMedia
                                component="img"
                                height="300"
                                image={evento.img}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {evento.nome}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {evento.local}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {evento.dataEvento}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    ))
                }
            </Grid>
        </div>

    )

}

export default ListEventos;