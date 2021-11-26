import { Grid } from '@mui/material';
import axios from 'axios';
import React from 'react';

const MyOrder = ({order, orders, setOrders}) => {
    

    const {product, user, email, status, _id, price} = order;
   
    const handleDeleteOrder = (id) => {
        axios.delete(`https://aqueous-dusk-98125.herokuapp.com/order/${id}`)
            .then((res) => {
                if (res.data.deletedCount > 0) {
                    const remainingOrder = orders.filter(
                        (order) => order._id !== id
                    );
                    setOrders(remainingOrder);
                    alert('order canceled successfully')
                }
            })
    
    }
    
    
    return (
        <div>
            <Grid className="card" container spacing={2}>
                <Grid mb={2} item xs={2}>
                  
                  <h6>{product} </h6>
                </Grid>
                <Grid mb={2} item xs={2}>
                  
                  <h6>{price}$ </h6>
                </Grid>

                <Grid mb={2} item xs={2}>
                    {user}
                </Grid>

                <Grid mb={2} item xs={2}>
                    {email}
                </Grid>
                <Grid mb={2} item xs={2}>
                    <button className="btn btn-info">{status}...</button>
                </Grid>
                <Grid mb={2} item xs={2}>
                    
                    <button className="btn btn-danger"
                        onClick={() => handleDeleteOrder(_id)}  >Cancel</button>
                </Grid>

            </Grid>
        </div>
    );
};

export default MyOrder;