import { CircularProgress, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const { allContexts } = useAuth();
    const { isLoading } = allContexts;
    const [orders, setOrders] = useState([]);
    const { user } = allContexts;
    const { email } = user;
   
    useEffect(() => {
        fetch(`https://aqueous-dusk-98125.herokuapp.com/order/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email])
    
    if (isLoading) {
        return (
            <div className="text-center">
                <h2 className="text-primary">..loading</h2>
                <CircularProgress />
            </div>
        )
    }
    return (
        <div className="mt-5">
            <Grid className="shadow" container spacing={2} mb={5}>
                <Grid item xs={2}>
                    <h5>Product</h5>
                </Grid>
                <Grid item xs={2}>
                    <h5>Price$</h5>
                </Grid>
                <Grid item xs={2}>
                  <h5>User Name</h5>
                </Grid>
                <Grid item xs={2}>
                    <h5> User Email</h5>
                </Grid>
                <Grid item xs={2}>
                   <h5>Status</h5>
                </Grid>
                <Grid item xs={2}>
                    <h5>Action</h5>
                </Grid>
            </Grid>
            {
                orders.map(order => <MyOrder order={order} key={order._id}
                orders={orders} setOrders={setOrders}
                ></MyOrder>)
            }
           
        </div>
    );
};

export default MyOrders;