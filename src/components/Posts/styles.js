// Importing all the needed libraries. 
import { makeStyles } from '@material-ui/core/styles'


// Exporting posts styles function. 
export default makeStyles((theme) => ({
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    smMargin: {
      margin: theme.spacing(1),
    },
    actionDiv: {
      textAlign: 'center',
    },
}));