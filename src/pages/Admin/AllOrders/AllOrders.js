import { CircularProgress, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import AllOrder from './AllOrder/AllOrder';

const AllOrders = () => {
    const { allContexts } = useAuth();
    const { isLoading } = allContexts;
    const [allOrders, setAllOrders] = useState([]);
    
    useEffect(() => {
        fetch(`https://aqueous-dusk-98125.herokuapp.com/order/`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
     },[])



    if (isLoading) {
        return (
            <div className="text-center">
                <h2 className="text-primary">..loading</h2>
                <CircularProgress />
            </div>
        )
    }
    
    return (
        <div className="container">
            <h1>Manage All Orders</h1>
            <Grid style={{ backgroundColor:'#eae4d1'}} container spacing={1} mb={5}>
                <Grid item xs={1.5}>
                    <h5>Product</h5>
                </Grid>
                <Grid item xs={1.5}>
                    <h5>Price</h5>
                </Grid>
                <Grid item xs={1.5}>
                    <h5>User Name</h5>
                </Grid>
                <Grid item xs={1.5}>
                    <h5> User Email</h5>
                </Grid>
                <Grid item xs={1.5}>
                    <h5> Address</h5>
                </Grid>
                <Grid item xs={1.5}>
                    <h5>Phone</h5>
                </Grid>
                <Grid item xs={1.5}>
                    <h5>Status</h5>
                </Grid>
                <Grid item xs={1.5}>
                    <h5>Action</h5>
                </Grid>
            </Grid>
            {
                allOrders.map(allOrder => <AllOrder allOrder={allOrder} key={allOrder._id} setAllOrders={setAllOrders} allOrders={allOrders}></AllOrder>)
            }
        </div>
    );
};

export default AllOrders;