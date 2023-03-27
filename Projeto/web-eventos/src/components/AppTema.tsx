import {createTheme, Typography} from '@mui/material';
import "@fontsource/poppins";

export const AppTema = createTheme({
    palette: {
        primary:{
            main:'#9900CC'
        },
        secondary:{
            main:'#0B0A0A'
        },
        
        background:{
            default:'#F5F5F5',
            paper:'#ffffff'
        }
    },
    typography: {
        fontFamily:'Poppins'

    }

});