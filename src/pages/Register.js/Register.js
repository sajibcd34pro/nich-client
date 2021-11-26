import { Container, Typography, TextField, Button, CircularProgress, Alert, Paper } from '@mui/material';
import React, { useState } from 'react';

import { NavLink, useHistory } from 'react-router-dom';
import { Box } from '@mui/system';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { allContexts } = useAuth();
    const { registerUser, isLoading, authError } = allContexts;
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.confirmPassword) {
            alert('password not matched');
            return;
        } 
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    
    if (isLoading) {
        return <CircularProgress/>
    }
    return (
        <Container sx={{marginTop:'3%', width:'50%'}} className="text-center">
            <Box container>
                
                <Paper variant="outlined">
                    {authError && <Alert severity="error">{authError}</Alert>}
                    <Typography variant="h4" gutterBottom>Register</Typography>
                  
                    {!isLoading &&
                     <form onSubmit={handleLoginSubmit}
                    >
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            variant="outlined"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            variant="outlined"
                            onBlur={handleOnBlur}/>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            variant="outlined"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Confirm Your Password"
                            type="password"
                            name="confirmPassword"
                            variant="outlined"
                            onBlur={handleOnBlur}
                        />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>
                }
                 
                    
                    
               </Paper>
            </Box>
        </Container>
    );
};

export default Register;