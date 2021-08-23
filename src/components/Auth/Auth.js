// Importing all the needed libraries. 
import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

// Importing all the needed modules. 
import useStyles from './styles'
import Input from './Input'
import Icon from './icon'
import { register, login } from '../../actions/auth'


// Form Initial state constant. 
const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }

// Our Auth react component. 
const Auth = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isRegister) {
            dispatch(register(formData, history))
        } else {
            dispatch(login(formData, history))
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const switchMode = () => {
        setIsRegister((prevIsRegister) => !prevIsRegister)
        setShowPassword(false)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({ type: "AUTH", data: { result, token } })
            history.push("/")
        } catch (error) {
            console.log(error)
        }
    } 

    const googleFailure = (error) => {
        console.lof(error)
        console.log("Google login failed!")
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isRegister ? "Register" : "Login"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isRegister && ( 
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isRegister && (
                            <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                        )}
                    </Grid> 
                    
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isRegister ? "Register" : "Login" }
                    </Button>
                    <GoogleLogin 
                        clientId="541475406061-dnejvs8lpkcpnalpeo7ps14lvgvised3.apps.googleusercontent.com" 
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained" >
                                Google Login
                            </Button>
                        )}
                        onSuccess={googleSuccess} 
                        onFailure={googleFailure} 
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>{ isRegister ? "Already have an account? Login" : "Don't have an account? Register" }</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

// Exporting our needed modules. 
export default Auth