import { Container, Typography, TextField, Button, CircularProgress, Box, Paper, Alert } from '@mui/material';

import google from '../../images/google.png';
import useAuth from '../../hooks/useAuth';
import { NavLink,useLocation, useHistory  } from 'react-router-dom';
import { useState } from 'react';




const Login = () => {
    
    const [loginData, setLoginData] = useState({});
    const { allContexts } = useAuth();
    const { loginEmail, signInWithGoogle, isLoading, authError } = allContexts;
    const location = useLocation();
    const history = useHistory();
     
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginEmail(loginData.email, loginData.password, location, history);
        e.preventDefault();
        
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
     
    

    return (
        <Box className="text-center">
            <Container sx={{ width: '50%', marginTop:'5%' }} container spacing={2}>
               
                <Paper variant="outlined">
                    {authError && <Alert severity="error"> {authError} </Alert>}
                    <Typography variant="h4" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            required
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnBlur}
                            variant="outlined" />
                        <TextField
                            required
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnBlur}
                            variant="outlined" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>

                    </form>
                    <p>------------------------</p>
                    <Button onClick={handleGoogleSignIn}><img src={google} width="46px" alt="google-icon" /></Button>
                </Paper>
              
                
            </Container>
        </Box>
    );
};

export default Login;