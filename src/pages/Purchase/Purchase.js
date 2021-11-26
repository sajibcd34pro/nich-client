import { CircularProgress, Divider, Grid } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Button from '@mui/material/Button';


const Purchase = () => {
    const { allContexts } = useAuth();
    const { isLoading, user } = allContexts;
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const productRef = useRef();
    const priceRef = useRef();
    const userRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    

    
 useEffect(() => {
     fetch(`https://aqueous-dusk-98125.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [id])
    const { price, name, img } = singleProduct;

    
    if (isLoading) {
        return (
            <div className="text-center">
                <h2 className="text-primary">..loading</h2>
                <CircularProgress />
            </div>
        )
    }

    const submitOrder = e => {
        e.preventDefault();
        const product = productRef.current.value;
        const price = priceRef.current.value;
        const user = userRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        
        const order = { product, price, user, email, address, phone }
        order.status = "pending";
        
        
        addressRef.current.value = " ";
        phoneRef.current.value = " ";
    
        return fetch(`https://aqueous-dusk-98125.herokuapp.com/order/`, {
            method: 'post',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('order Confirmed');
                 
                }
            })
       
     }


    return (
        <div className="container" style={{ marginTop: '2%' }}>

            <Grid className="text-center" container spacing={2}>
                <Grid item lg={6} xs={12} mt={5}>
                    <h4>{name}</h4>
                    <h5> price: $ {price} </h5>
                    <img style={{ height: "20rem" }} src={img} alt="" />
                </Grid>
                <Divider />

                <Grid item xs={12} lg={6} mt={5}>
                    <h4>Purchase and Confirm Your Order</h4>
                    <form onSubmit={submitOrder}>


                        <h6 className="text-left"> Product Name:</h6>

                        <input defaultValue={name} ref={productRef}   placeholder="Product"  disabled
                            style={{ width: '75%', padding: '10px' }} 
                        />
                        <h6 className="text-left"> Price</h6>

                        <input defaultValue={price} ref={priceRef}  placeholder="Price" disabled
                            style={{ width: '75%', padding: '10px' }} 
                        />

                        <h6 className="text-left"> User Name:</h6>

                        <input defaultValue={user.displayName} ref={userRef}   placeholder="Name" disabled
                            style={{ width: '75%', padding: '10px' }} 
                        />




                        <h6 className="text-left"> User Email:</h6>


                        <input defaultValue={user.email} ref={emailRef}   placeholder="email" disabled
                            style={{ width: '75%', padding: '10px' }} 
                        />
                        <h6 className="text-left"> Address:</h6>


                        <textarea type="text" ref={addressRef} placeholder="Address" required
                            style={{width: '75%'}} 
                        />
                        
                        
                        <h6 className="text-left"> Phone Number:</h6>


                        <input type="number" ref={phoneRef} placeholder="phone"
                            required
                        style={{ width: '75%', padding: '10px' }}
                        />

                            


                        <p></p>

                        <Button style={{width:'75%'}} type="submit" variant="contained">Submit</Button>
                    </form>
                </Grid>

            </Grid>
        </div>
    );
};

export default Purchase;