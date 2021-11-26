import { Grid, Button, CircularProgress, } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Switch, Route, useRouteMatch, Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AddProducts from '../Admin/AddProducts/AddProducts';
import AllOrders from '../Admin/AllOrders/AllOrders';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import EditUser from '../Admin/ManageProducts/EditUser';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import AdminRoute from '../Routes/AdminRoute/AdminRoute';
import UserRoute from '../Routes/UserRoute/UserRoute';
import MyOrders from '../User/MyOrders/MyOrders';
import Payments from '../User/Payments/Payments';
import Review from '../User/Review/Review';
import UserProfile from '../User/userProfile/UserProfile';


const Dashboard = () => {
    const { allContexts } = useAuth()
    const { user,admin, isLoading } = allContexts;


    let { path, url } = useRouteMatch();


    if (isLoading) {
        return (
            <div className="text-center">
                <h2 className="text-primary">..loading</h2>
                <CircularProgress />
            </div>
        )
    }
    return (
        <div className="text-center">
            <Grid container spacing={2} mt={5} >
                <Grid item xs={12} md={3}>
                    <div className="" >
                        <Nav className="nav-link">
                            { admin === false && user.email &&
                                <Box>
                                    <NavLink style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '22px' }} to={`${url}`}><Button color="inherit">Profile</Button></NavLink>
                                    <br />
                                    <NavLink style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '22px' }} to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></NavLink>
                                    <br />
                                    <NavLink style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '22px' }} to={`${url}/payments`}><Button color="inherit">PayMents</Button></NavLink>
                                    <br />
                                    <NavLink style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '22px' }} to={`${url}/review`}><Button color="inherit">Review</Button></NavLink>
                                </Box>
                               }
                            
                            { admin &&   <Box>

                                    <Link style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '22px' }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                                    <br />
                                    <Link style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '22px' }} to={`${url}/addProducts`}><Button color="inherit">Add Products</Button></Link>
                                    <br />
                                    <Link style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '22px' }} to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
                                    <br />
                                    <Link style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '22px' }} to={`${url}/allOrders`}><Button color="inherit">All Orders</Button></Link>
                                </Box>}

                        </Nav>

                    </div>
                </Grid>

                <Grid item xs={12} md={9} className="justify-content-center">

                    <Switch>
                        <Route exact path={path}>
                            <UserProfile></UserProfile>
                        </Route>
                        <UserRoute path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </UserRoute>
                        <UserRoute path={`${path}/payMents`}>
                            <Payments></Payments>
                        </UserRoute>
                        <UserRoute path={`${path}/review`}>
                            <Review></Review>
                        </UserRoute>

                        {/* admin */}

                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProducts`}>
                            <AddProducts></AddProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/allOrders`}>
                            <AllOrders></AllOrders>
                        </AdminRoute>

                        <AdminRoute path={`/dashboard/:id`}>
                            <EditUser></EditUser>
                        </AdminRoute>
                    </Switch>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;