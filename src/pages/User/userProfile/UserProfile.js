import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
const UserProfile = () => {
    const { allContexts } = useAuth();
    const { isLoading, user, logOut } = allContexts;
    if (isLoading) {
        return (
            <div className="text-center">
                <h2 className="text-primary">..loading</h2>
                <CircularProgress />
            </div>
        )
    }
    
    return (
        <div className="container" style={{marginTop:'5%'}}>
            <div className=" shadow pb-5" style={{width:'30rem', marginLeft:'25%'}}>
                <h3> user: {user.displayName} </h3>
                <br />
                <h4> Email: {user.email} </h4>
                <br />
                 <Button onClick={logOut} variant="contained">Logout</Button>
            </div>
        </div>
    );
};

export default UserProfile;