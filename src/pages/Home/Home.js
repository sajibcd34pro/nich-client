import { CircularProgress} from '@mui/material';
import React from 'react';
import About from '../../components/About/About';
import GetReviews from '../../components/GetReviews/GetReviews';

import Hero from '../../components/Hero/Hero';
import HomeProducts from '../../components/HomeProducts/HomeProducts';
import useAuth from '../../hooks/useAuth';




const Home = () => {
    const { allContexts } = useAuth();
    
    const { isLoading } = allContexts;
    if (isLoading) {
        return (
            <div className="text-center">
                <h2 className="text-primary">..loading</h2>
                <CircularProgress />
            </div>
        )
    }
    return (
        <div>
            
           <Hero></Hero> 
            <HomeProducts></HomeProducts>
            <About></About>
            <GetReviews></GetReviews>
        </div>
    );
};

export default Home;