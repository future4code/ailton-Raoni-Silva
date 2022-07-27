import { createTheme } from '@mui/material';
import { neutralColor, primaryColor } from './colors';


const theme = createTheme({
  shape: {
    borderRadius: 20,
  }, 
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    text: {
        primary: neutralColor
    }
  },
  
   

})

export default theme