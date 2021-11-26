import { Rating } from '@mui/material';
import React from 'react';
import userImage from '../../images/userProfile.jpg';
import StarIcon from '@mui/icons-material/Star';
import './GerReview.css';
const GetReview = ({review}) => {
    const { name, Description,rating} =  review ;
    
    
    return (
        <div>
            
        <div className="text-cnter" >
               
                <div className="item shadow text-center" style={{ width: '20rem', borderRadius:'1rem' }}>
                    <img style={{ width: '50px', margin: '20px auto', borderRadius: '50%', border: '1px solid gray' }} src={userImage} alt="cap" />
                    <div className="card-body">
                        <h6 className="card-text">{name}</h6>
                        <Rating
                            name="hover-feedback"
                            value={rating}
                            precision={0.5}
                            readOnly
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <p> {Description} </p>
                    </div>
                </div>
           
            </div>
        </div>
    );
};

export default GetReview;