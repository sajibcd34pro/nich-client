import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { allContexts } = useAuth();
    const { admin } = allContexts;

    if (!admin) {
        return (
            <>
                <h1 className="text-danger">!you are not eligible for this route </h1>
                <CircularProgress/>
            </>
        )
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                admin ? (
                    children
                )
                    : (

                        <Redirect
                            to={{
                                pathname: "/dashboard",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}


export default AdminRoute;