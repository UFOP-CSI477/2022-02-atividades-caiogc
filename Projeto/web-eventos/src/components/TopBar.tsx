import { AppBar, Box, Button, IconButton, InputBase, styled, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Logo from '../assets/jm-logo.png'
import { Add} from '@mui/icons-material';
import { useState } from 'react';
import { EventoInterface } from './ListEventos';

const TopBar = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'secondary',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '18ch',
            '&:focus': {
              width: '25ch',
            },
          },
        },
      }));

    


    return(
          <AppBar position="fixed" sx={{bgcolor:"#ffffff"}}>
              <Toolbar sx={{ color: 'primary.main' }}>
                <Box sx={{ flexGrow:1 }}>
                  <IconButton href='/'
                      edge="start"                      
                  >
                      <img src={Logo} alt="Eventos JM Logo" height="50px" />
                  </IconButton>
                </Box>
                <Box sx={{flexGrow:1 }}>
                  <Search sx={{ border: 1, borderRadius: 2}}>
                      <SearchIconWrapper>
                          <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                      placeholder="Pesquisar Eventos..."
                      inputProps={{ 'aria-label': 'search' }}
                      />
                  </Search>

                  

                  
                </Box>
                
                <Box sx={{ flexGrow:1, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                  <Button                      
                      href="/eventos/create"
                      endIcon={<Add fontSize='large'/>}
                      variant='text'
                      color='primary'
                      size='large'
                      sx={{display: { xs: 'none', sm: 'flex'} }}
                  >Adicionar Evento
                  </Button>
                </Box>
              </Toolbar>
          </AppBar>
    
    );

}

export default TopBar;