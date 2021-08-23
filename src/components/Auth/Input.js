// Importing all the needed libraries. 
import React from 'react'
import Visibilty from '@material-ui/icons/Visibility'
import VisibiltyOff from '@material-ui/icons/VisibilityOff'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'


// Our Input react component. 
const Input = ({ name, handleChange, label, autoFocus, type, handleShowPassword, half }) => {
    return (
        <Grid item xs={12} md={half ? 6 : 12}>
            <TextField 
                name={name} 
                onChange={handleChange} 
                variant="outlined" 
                required 
                fullWidth 
                label={label} 
                autoFocus={autoFocus} 
                type={type} 
                InputProps={
                    name === "password" && {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword}>
                                    { type === "password" ? <Visibilty /> : <VisibiltyOff /> }
                                </IconButton>
                            </InputAdornment>
                        )
                    }
                }
            />
        </Grid>
    )
}

// Exporting our needed modules. 
export default Input