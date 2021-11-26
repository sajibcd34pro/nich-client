import React from 'react';
import { Link } from 'react-router-dom';

import './About.css';

const About = () => {
    return (
        <div className="mt-5 body">
            <div
                className="home-banner"
            >
                <div className="content">
                    <div  className=" text-area">
                        <h6> <span className="get">GET</span>   <span className="get">BIKE </span>   <span className="get">MANIA</span> </h6>
                        <h3>RIDE TO VICTORY</h3>
                        <Link to="/explore"><button className="purchase">PURCHASE NOW <i class="fas fa-long-arrow-alt-right"></i></button> </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;