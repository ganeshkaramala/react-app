import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    
    spacing: 0.5,
    typography: {
        fontFamily: "Poppins"
    },
    overrides: {

        MuiAppBar: {
            colorPrimary: {
                color: 'white',
                backgroundColor: '#1C2260 !important'
            }
        }
    }

});