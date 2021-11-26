import React from 'react';
import { useEffect, useState } from "react";
import GetReview from '../GetReview/GetReview';
import '../GetReview/GerReview.css';

const GetReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://aqueous-dusk-98125.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    
    return (
        <div className="container text-center" style={{ marginTop: '5%' }}>
            
            <h4 >What Our Happy Client Says ..</h4>
            <div className="items mt-5">
                {
                    reviews.map(review =>
                        <GetReview review={review} key={review._id}></GetReview>
                    )
                }
               </div>
           
        </div>
    );
};

export default GetReviews;