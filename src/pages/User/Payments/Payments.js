import { CircularProgress } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Payments = () => {
    const { allContexts } = useAuth();
    const { isLoading } = allContexts;
    if (isLoading) {
        return (
            <div className="text-center">
                <h2 className="text-primary">..loading</h2>
                <CircularProgress />
            </div>
        )
    }
    
    return (
        <div>
            <h1>Payment system coming soon.</h1>
        </div>
    );
};

export default Payments;