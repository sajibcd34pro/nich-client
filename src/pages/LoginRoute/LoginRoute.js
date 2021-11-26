import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const LoginRoute = ({ children, ...rest }) => {
    const { allContexts } = useAuth();
    const { user, isLoading } = allContexts;
    if (isLoading) {
        return (
            <div className="text-center">
                <h2 className="text-primary">..loading</h2>
                <CircularProgress />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}


export default LoginRoute;