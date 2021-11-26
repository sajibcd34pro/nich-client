import axios from 'axios';
import React from 'react';

import './AllOrder.css';
const AllOrder = ({allOrder, setAllOrders, allOrders}) => {
    const {product, price, user, email, address, phone , status, _id } = allOrder;
    
    const deleteOrders = (id) => {
        axios.delete(`https://aqueous-dusk-98125.herokuapp.com/order/${id}`)
            .then((res) => {
                if (res.data.deletedCount > 0) {
                    const remainingAllProducts = allOrders.filter(
                        (allProduct) => allProduct._id !== id
                    );
                    setAllOrders(remainingAllProducts);
                    alert('order canceled successfully')
                }
            })
    }
  
    
    
    return (
        <div>
            <div className="grid-order">
                <div className=" mt-2">
                    <h6>{product}</h6>
                </div>
                <div className=" mt-2">
                    <h6>{price}$</h6>
                </div>
                <div className=" mt-2">
                    <h6>{user}</h6>
                </div>
                <div className=" mt-2">
                    <h6>{email}</h6>
                </div>
                <div className=" mt-2">
                    <h6>{address}</h6>
                </div>
                <div className=" mt-2">
                    <h6>{phone}</h6>
                </div>
                <div className=" mt-2">
                    <button className="btn btn-danger">{status} </button>
                </div>
                <div className=" mt-2">
                    <button className="btn btn-danger"
                        onClick={() => deleteOrders(_id)}>Delete</button>
                </div>
           </div>
        </div>
    );
};

export default AllOrder;