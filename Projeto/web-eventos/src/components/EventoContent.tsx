import { AttachMoney, CalendarMonth, CopyAll, Delete, Edit, Facebook, Place, Share, WhatsApp } from "@mui/icons-material";
import { Typography, Grid, Paper, IconButton, Menu, MenuItem, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import api from "../services/api"
import TopBar from "./TopBar";


const EventoContent = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoriaId, setCategoriaId] = useState(0);
    const [preco, setPreco] = useState(0);
    const [dataEvento, setDataEvento] = useState('');
    const [local, setLocal] = useState('');
    const [img, setImg] = useState('');
    
    const { id } = useParams();
    
    const [linkWpp] = useState(`https://api.whatsapp.com/send?text=http://localhost:5173/eventos/${id}`);
    const [linkFace] = useState(`https://www.facebook.com/sharer/sharer.php?u=http://localhost:5173/eventos/${id}`);    


    const styles = {
        paperContainer: {
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    };
    
    useEffect(() => {

        api.get(`/eventos/${id}`)
            .then(response => {
                console.log(response.data);
                setNome(response.data.nome);
                setDescricao(response.data.descricao)
                setCategoriaId(response.data.categoria.nome)
                setPreco(response.data.preco);
                setDataEvento(response.data.dataEvento);
                setLocal(response.data.local);
                setImg(response.data.img)

            })

    }, [id]);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    

    const handleDeleteEvento = async (id: number) => {

        // Validações
        if ( !window.confirm( "Confirma exclusão do Evento?" ) ) {
            return
        }

        try {
            await api.delete(`/eventos/${id}`, 
            {
                data: {
                    id
                }
            });

            alert("Evento excluído com sucesso!");


        } catch(error) {
            alert("Erro na exclusão do Evento!");
            console.error(error);
        }

    }

    
    
    
    return(
        <div>

        <TopBar/>
        <Box mt={3} sx={{width:'70vw', background:'white', borderRadius: 5}}>
            <Paper style={styles.paperContainer}>
             <Box sx={{height:"40vh"}}></Box>
            </Paper>

            <Typography variant="h4" fontWeight='700' p={2}>{nome}</Typography>
            <Grid container spacing={2} pb={2}>
                <Grid item xs={2} display='flex' justifyContent='flex-end'>
                    <CalendarMonth />
                </Grid>
                <Grid item xs={10}> 
                 <Typography textAlign='start'>{dataEvento}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} pb={2}>
                <Grid item xs={2} display='flex' justifyContent='flex-end'>
                    <Place  />
                </Grid>
                <Grid item xs={10}> 
                 <Typography textAlign='start'>{local}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} pb={2}>
                <Grid item xs={2} display='flex' justifyContent='flex-end'>
                    <AttachMoney />
                </Grid>
                <Grid item xs={10}> 
                 <Typography textAlign='start'>{preco}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} pb={2}>
                <Grid item xs={2} display='flex' justifyContent='flex-end'>
                    <Typography fontWeight='bold'>Categoria:</Typography>
                </Grid>
                <Grid item xs={10}> 
                 <Typography textAlign='start'>{categoriaId}</Typography>
                </Grid>
            </Grid>
            <Typography variant="h6" fontWeight='700' >Sobre o Evento</Typography>
            <Typography p={5}>{descricao}</Typography>
            <Box p={4}>            
              <Button
                size="large"
                aria-label="compartilhe nas redes sociais"
                aria-controls="share"
                aria-haspopup="true"
                onClick={handleMenu}
                color="primary"
                variant="outlined"
                endIcon={<Share />}
                
              >
                    Compartilhar
              </Button>
              <Menu
                id="share"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>                
                    <Link to={linkWpp}>
                        <WhatsApp /> Whatsapp
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>                
                    <Link to={linkFace}>
                        <Facebook /> Facebook
                    </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Box display='flex' justifyContent="flex-end">
                <Button>
                    <Link to={`/eventos/update/${id}`}>
                        <Edit color="primary"/>
                    </Link>
                </Button>
                <Button
                    onClick={()=>{ 
                    handleDeleteEvento(id)
                    }}>  
                    <Delete color="primary"/>                
                </Button>
            </Box>

        </Box>
        </div>
        

    )

}

export default EventoContent;